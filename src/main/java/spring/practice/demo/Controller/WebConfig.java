package spring.practice.demo.Controller;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * URL 패턴이 첫 번째에 api를 붙여서 들어오는 모든 패턴에 대하여 CROS 에러를 일으키지 않도록 설정
 */

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**").allowedOrigins("*").allowCredentials(false);
    }
}
