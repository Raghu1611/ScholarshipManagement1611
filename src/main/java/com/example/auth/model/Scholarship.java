package com.example.auth.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "adminsch") // Changed table name
public class Scholarship {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generate ID
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(length = 1000)
    private String description;

    @Column(nullable = false)
    private Double amount;

    @Column(name = "eligibility_criteria")
    private String eligibilityCriteria;
    @Column(name = "deadline")
    private LocalDate deadline; // Changed to LocalDate for better date handling

    // Constructors
    public Scholarship() {}

    public Scholarship(String title, String description, Double amount, 
                       String eligibilityCriteria, LocalDate deadline) {
        this.title = title;
        this.description = description;
        this.amount = amount;
        this.eligibilityCriteria = eligibilityCriteria;
        this.deadline = deadline;
    }

    // Getters and Setters (same as before, with LocalDate for deadline)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getEligibilityCriteria() {
        return eligibilityCriteria;
    }

    public void setEligibilityCriteria(String eligibilityCriteria) {
        this.eligibilityCriteria = eligibilityCriteria;
    }

    public LocalDate getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalDate deadline) {
        this.deadline = deadline;
    }
}