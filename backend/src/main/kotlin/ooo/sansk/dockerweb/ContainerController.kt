package ooo.sansk.dockerweb

import com.github.dockerjava.api.DockerClient
import com.github.dockerjava.api.command.InspectContainerResponse
import com.github.dockerjava.api.model.Container
import com.github.dockerjava.api.model.Frame
import com.github.dockerjava.core.command.AttachContainerResultCallback
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import java.io.InputStream
import java.io.PipedInputStream
import java.io.PipedOutputStream

@RestController
@RequestMapping("/api/containers")
class ContainerController(private val dockerClient: DockerClient) {

    @GetMapping
    fun getContainers(@RequestParam(defaultValue = "false") includeInactiveContainers: Boolean): Flux<Container> {
        return Flux.fromIterable(dockerClient.listContainersCmd()
                .withShowSize(true)
                .withShowAll(includeInactiveContainers)
                .exec())
    }

    @GetMapping("/{id}")
    fun getContainerDetails(@PathVariable id: String): Mono<InspectContainerResponse> {
        return Mono.just(dockerClient.inspectContainerCmd(id)
                .withSize(true)
                .exec())
    }

    @GetMapping("/{id}/logs")
    fun attachContainer(@PathVariable id: String): Mono<String> {
        val callback = object : AttachContainerResultCallback() {

            override fun onNext(item: Frame?) {
                println(String(item!!.payload))
                super.onNext(item)
            }
        }
        val input = PipedInputStream()
        val out = PipedOutputStream()
        input.connect(out)

        val exec = dockerClient.attachContainerCmd(id)
                .withStdIn(input)
                .withStdOut(true)
                .withStdErr(true)
                .withFollowStream(true)
                .exec(callback)

        out.write("list\n".toByteArray())
        out.flush()
        return Mono.empty()
    }
}
