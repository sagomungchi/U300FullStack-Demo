package it.topping.topping.domain;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "money_id")
    private Money money;

    @NotBlank(message = "Project Name is Required")
    private String projectName;

    @NotBlank(message = "Project Identifier is Required")
    @Size(min = 4, max = 5, message = "Please use 4 to 5 characters")
    @Column(updatable = false, unique = true)
    private String projectIdentifier;

    @NotBlank(message = "Project Description is required")
    private String description;

    @NotNull(message = "Project Goal Money is required")
    private Integer goalMoney;

    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date start_date;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date end_date;

    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date created_at;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date updated_At;

    public Project(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectIdentifier() {
        return projectIdentifier;
    }

    public void setProjectIdentifier(String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getUpdated_At() {
        return updated_At;
    }

    public void setUpdated_At(Date updated_At) {
        this.updated_At = updated_At;
    }

    public Money getMoney() {
        return money;
    }

    public Integer getGoalMoney() {
        return goalMoney;
    }

    public void setGoalMoney(Integer goalMoney) {
        this.goalMoney = goalMoney;
    }

    public Money setMoney(Integer goalMoney) {
        this.money = new Money(goalMoney);
        return money;
    }

    @PrePersist
    protected void onCreate(){
        this.created_at = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.updated_At = new Date();
    }

}
