package org.example.backend;

import java.util.HashMap;
import java.util.Map;


/**
 * Classe responsável por gerar IDs exclusivos para diferentes classes.
 * <p>
 * Fornece um metodo para gerar IDs incrementais exclusivos
 * e uma maneira de acessar os últimos IDs gerados para cada classe.
 */
public class IdGenerator {

    // Tabela interna para armazenar o último ID gerado para cada classe
    private static final Map<String, Long> classIdMap = new HashMap<>();

    /**
     * Gera o próximo ID exclusivo baseado na classe fornecida.
     *
     * @param clazz A classe para a qual o ID será gerado.
     * @return O próximo ID exclusivo para a classe fornecida.
     */
    public static synchronized <T> long nextId(Class<T> clazz) {
        // Recupera o último ID gerado para a classe ou inicializa com 0, se ainda não existir
        String className = clazz.getName();
        Long currentId = classIdMap.getOrDefault(className, 0L);

        // Incrementa o ID e salva na tabela interna
        long nextId = currentId + 1;
        classIdMap.put(className, nextId);

        return nextId;
    }

    /**
     * Método de acesso para verificar todos os IDs armazenados por classe.
     * Útil para teste e depuração.
     *
     * @return Um mapa contendo as classes e seus últimos IDs gerados.
     */
    public static synchronized Map<String, Long> getClassIdMap() {
        return new HashMap<>(classIdMap);
    }
}
