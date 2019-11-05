package it.topping.topping.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Money {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private Integer investedMoney;
    private Integer goalMoney;
    private Integer cnt;

    public Money() {
    }

    public Money(@NotNull(message = "goalMoney is required") Integer goalMoney) {
        this.goalMoney = goalMoney;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getInvestedMoney() {
        return investedMoney;
    }

    public void setInvestedMoney(Integer investedMoney) {
        this.investedMoney = investedMoney;
    }

    public Integer getGoalMoney() {
        return goalMoney;
    }

    public void setGoalMoney(Integer goalMoney) {
        this.goalMoney = goalMoney;
    }

    public Integer getCnt() {
        return cnt;
    }

    public void setCnt(Integer cnt) {
        this.cnt = cnt;
    }
}
