package io.github.leeosparda.vendasapi.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.leeosparda.vendasapi.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {

}
