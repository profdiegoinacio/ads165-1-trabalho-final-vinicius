package org.example.backend.security;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test-security")
public class TestSecurityController {

    @GetMapping("/hello")
    public ResponseEntity<String> hello() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        return ResponseEntity.ok("Hello, " + currentPrincipalName + "! This is a authenticated resource.");
    }

    @GetMapping("/user")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')") // Ou hasAuthority('ROLE_USER')
    public ResponseEntity<String> userEndpoint() {
        return ResponseEntity.ok("Hello from user endpoint!");
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')") // Ou hasAuthority('ROLE_ADMIN')
    public ResponseEntity<String> adminEndpoint() {
        return ResponseEntity.ok("Hello from admin endpoint!");
    }
}