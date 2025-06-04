package org.example.backend;

import org.springframework.data.jpa.domain.Specification;
import jakarta.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

public class ProdutoSpecifications {

    public static Specification<Produto> comFiltros(
            String nome, Double precoMinimo, Double precoMaximo, Long categoriaId) {

        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (nome != null && !nome.isEmpty()) {
                predicates.add(criteriaBuilder.like(
                    criteriaBuilder.lower(root.get("nome")), 
                    "%" + nome.toLowerCase() + "%"
                ));
            }

            if (precoMinimo != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(
                    root.get("preco"), precoMinimo
                ));
            }

            if (precoMaximo != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(
                    root.get("preco"), precoMaximo
                ));
            }

            if (categoriaId != null) {
                predicates.add(criteriaBuilder.equal(
                    root.get("categoria").get("id"), categoriaId
                ));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
