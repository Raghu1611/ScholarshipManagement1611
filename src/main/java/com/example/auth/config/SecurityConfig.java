package com.example.auth.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.SecurityBuilder;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // Use BCryptPasswordEncoder for password hashing
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeRequests()
                .requestMatchers("/api/register").permitAll()
                .requestMatchers("/api/login").permitAll()
                .requestMatchers("/api/reset-password").permitAll()
                .requestMatchers("/api/scholarships/**").permitAll()
                .requestMatchers("/api/scholarship/**").permitAll()
                .requestMatchers("/api/user/apply-scholarship/**").permitAll() // Allow unauthenticated access
                .requestMatchers("/api/user/**").hasRole("USER") // Restrict other user-specific endpoints
                .requestMatchers("/admin/**").hasRole("ADMIN") // Restrict admin paths
                .anyRequest().authenticated() // Default: authenticated access for everything else
            .and()
                .formLogin().permitAll()
            .and()
                .httpBasic();
        
        return http.build();
    }

   
}
