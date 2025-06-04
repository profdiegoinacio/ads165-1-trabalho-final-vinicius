package org.example.backend.config;

import org.example.backend.Categoria;
import org.example.backend.CategoriaRepository;
import org.example.backend.Produto;
import org.example.backend.ProdutoRepository;
import org.example.backend.security.User;
import org.example.backend.security.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Set;

@Configuration
public class DbInitialization {

    private final ProdutoRepository produtoRepository;
    private final CategoriaRepository categoriaRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DbInitialization(ProdutoRepository produtoRepository, CategoriaRepository categoriaRepository,
                            UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.produtoRepository = produtoRepository;
        this.categoriaRepository = categoriaRepository;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Bean
    public CommandLineRunner inicializarDados() {
        return args -> {
            if (categoriaRepository.count() == 0) {
                Categoria smartphones = new Categoria("Smartphones");
                Categoria notebooks = new Categoria("Notebooks");

                smartphones = categoriaRepository.save(smartphones);
                notebooks = categoriaRepository.save(notebooks);

                produtoRepository.saveAll(List.of(
                        new Produto(
                                "iPhone 14",
                                7999.0,
                                50,
                                smartphones
                        ),
                        new Produto(
                                "Samsung Galaxy S23",
                                6999.0,
                                30,
                                smartphones
                        ),
                        new Produto(
                                "Notebook Dell Inspiron",
                                4999.0,
                                20,
                                notebooks
                        )
                ));

                if (userRepository.count() == 0) {
                    User admin = new User(
                            "admin",
                            passwordEncoder.encode("admin123"),
                            Set.of("ROLE_ADMIN", "ROLE_USER")
                    );
                    User user = new User(
                            "user",
                            passwordEncoder.encode("user123"),
                            Set.of("ROLE_USER")
                    );
                    userRepository.saveAll(List.of(admin, user));
                }
            }
        };
    }
}