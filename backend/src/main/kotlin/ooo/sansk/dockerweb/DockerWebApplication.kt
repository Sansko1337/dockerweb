package ooo.sansk.dockerweb

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class DockerWebApplication

fun main(args: Array<String>) {
	runApplication<DockerWebApplication>(*args)
}
