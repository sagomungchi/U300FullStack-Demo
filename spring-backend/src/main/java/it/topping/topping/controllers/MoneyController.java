package it.topping.topping.controllers;

import it.topping.topping.domain.Money;
import it.topping.topping.domain.Project;
import it.topping.topping.services.MoneyService;
import it.topping.topping.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/api/money")
public class MoneyController {

    @Autowired
    private MoneyService moneyService;

    @PostMapping("")
    public ResponseEntity<?> createNewMoney(@Valid @RequestBody Money money){
        Money newMoney = moneyService.updateMoney(money);
        return new ResponseEntity<Money>(newMoney, HttpStatus.CREATED);
    }

    @GetMapping("/{moneyId}")
    public ResponseEntity<?> getMoneyById(@PathVariable String moneyId){
        Money money = moneyService.findMoneyById(moneyId);
        return new ResponseEntity<Money>(money, HttpStatus.OK);
    }
}
