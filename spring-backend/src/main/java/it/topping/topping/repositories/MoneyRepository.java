package it.topping.topping.repositories;

import it.topping.topping.domain.Money;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MoneyRepository extends CrudRepository<Money, Long> {
    Money findById(String moneyId);
}
