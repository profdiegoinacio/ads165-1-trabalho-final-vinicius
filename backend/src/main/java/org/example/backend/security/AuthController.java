package org.example.backend.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;


record AuthRequest(String username, String password) {
}

record AuthResponse(String token, String username, java.util.List<String> roles) {
}

record RegisterRequest(String username, String password, Set<String> roles) {
}

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsServiceImpl userDetailsService; // Para carregar UserDetails após autenticação

    @Autowired
    private UserRepository userRepository; // Para registro

    @Autowired
    private PasswordEncoder passwordEncoder; // Para registro

    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthRequest authRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.username(), authRequest.password())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.username());
        final String token = jwtUtil.generateToken(userDetails);

        java.util.List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(java.util.stream.Collectors.toList());

        return ResponseEntity.ok(new AuthResponse(token, userDetails.getUsername(), roles));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        if (userRepository.findByUsername(registerRequest.username()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Error: Username is already taken!"));
        }

        // Garanta que os papéis tenham o prefixo "ROLE_" se sua lógica de autorização depender disso.
        // Se não, ajuste conforme necessário.
        Set<String> roles = registerRequest.roles();
        if (roles == null || roles.isEmpty()) {
            roles = Collections.singleton("ROLE_USER"); // Papel padrão
        } else {
            // Exemplo: garantir que todos os papéis comecem com ROLE_
            roles = roles.stream().map(r -> r.startsWith("ROLE_") ? r : "ROLE_" + r.toUpperCase()).collect(Collectors.toSet());
        }


        User user = new User(
                registerRequest.username(),
                passwordEncoder.encode(registerRequest.password()),
                roles
        );
        userRepository.save(user);
        return ResponseEntity.ok(Map.of("message", "User registered successfully!"));
    }
}