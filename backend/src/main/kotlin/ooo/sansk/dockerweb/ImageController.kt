package ooo.sansk.dockerweb

import com.github.dockerjava.api.DockerClient
import com.github.dockerjava.api.command.InspectImageResponse
import com.github.dockerjava.api.model.Image
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/api/images")
class ImageController(private val dockerClient: DockerClient) {

    @GetMapping
    fun getImages(): Flux<Image> {
        return Flux.fromIterable(dockerClient.listImagesCmd()
                .withShowAll(true)
                .exec())
    }

    @GetMapping("/{id}")
    fun getImageDetails(@PathVariable id: String): Mono<InspectImageResponse> {
        return Mono.just(dockerClient.inspectImageCmd(id)
                .exec())
    }

    @DeleteMapping("/{id}")
    fun deleteImage(@PathVariable id: String): Mono<Void> {
        return Mono.just(dockerClient.removeImageCmd(id)
                .exec())
    }
}
