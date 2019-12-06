package ooo.sansk.dockerweb

import com.github.dockerjava.api.DockerClient
import com.github.dockerjava.api.model.Container
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Flux

@RestController
@RequestMapping("/containers")
class ContainerController(private val dockerClient: DockerClient) {

    @GetMapping
    fun getContainers(@RequestParam(defaultValue = "false") includeInactiveContainers: Boolean): Flux<Container> {
        return Flux.fromIterable(dockerClient.listContainersCmd()
                .withShowAll(includeInactiveContainers)
                .exec())
    }
}
