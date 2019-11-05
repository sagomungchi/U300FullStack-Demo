package it.topping.topping.services;

import it.topping.topping.domain.Money;
import it.topping.topping.repositories.MoneyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MoneyService {

    @Autowired
    MoneyRepository moneyRepository;

    public Money updateMoney(Money money){
        Money updateMoney = moneyRepository.findById(money.getId());
        if(updateMoney.getGoalMoney() != null){
            updateMoney.setGoalMoney(updateMoney.getGoalMoney());
            if(updateMoney.getInvestedMoney() == null){
                updateMoney.setInvestedMoney(money.getInvestedMoney());
                updateMoney.setCnt(1);
            } else {
                updateMoney.setInvestedMoney(updateMoney.getInvestedMoney() + money.getInvestedMoney());
                updateMoney.setCnt(money.getCnt() + 1);
            }
            return moneyRepository.save(updateMoney);
        }
        return moneyRepository.save(money);
    }

    public Money findMoneyById(String moneyId){
        Money money = moneyRepository.findById(moneyId);
        return  money;
    }
}
