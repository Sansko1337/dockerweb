package ooo.sansk.dockerweb

import org.springframework.http.HttpStatus
import org.springframework.stereotype.Component
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ServerWebExchange
import org.springframework.web.server.WebExceptionHandler
import org.springframework.web.server.WebFilter
import org.springframework.web.server.WebFilterChain
import reactor.core.publisher.Mono

@Component
class IndexRedirectWebFilter : WebFilter {

    override fun filter(exchange: ServerWebExchange, chain: WebFilterChain): Mono<Void> {
        if (!exchange.request.uri.path.startsWith("/api") && !exchange.request.uri.path.startsWith("/static")) {
            return chain.filter(exchange.mutate().request(exchange.request.mutate().path("/index.html").build()).build());
        }

        return chain.filter(exchange);
    }
}
