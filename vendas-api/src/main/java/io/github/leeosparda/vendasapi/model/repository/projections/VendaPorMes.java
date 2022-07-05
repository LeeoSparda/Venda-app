package io.github.leeosparda.vendasapi.model.repository.projections;

import java.math.BigDecimal;

public interface VendaPorMes {
	Integer getMes();
	BigDecimal getValor();
}
