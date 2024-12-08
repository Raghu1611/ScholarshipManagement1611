package com.example.auth.controller;

import com.example.auth.model.Scholarship;
import com.example.auth.service.ScholarshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/scholarships")
public class ScholarshipController {

    private final ScholarshipService scholarshipService;

    @Autowired
    public ScholarshipController(ScholarshipService scholarshipService) {
        this.scholarshipService = scholarshipService;
    }

    // Create or Update Scholarship
    @PostMapping
    public ResponseEntity<Scholarship> createOrUpdateScholarship(@RequestBody Scholarship scholarship) {
        Scholarship savedScholarship = scholarshipService.saveScholarship(scholarship);
        return new ResponseEntity<>(savedScholarship, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateScholarship(@PathVariable Long id, @RequestBody Scholarship scholarship) {
        try {
            // Fetch existing scholarship
            Optional<Scholarship> existingScholarshipOpt = scholarshipService.getScholarshipById(id);
            if (existingScholarshipOpt.isPresent()) {
                Scholarship existingScholarship = existingScholarshipOpt.get();
                // Update fields
                existingScholarship.setTitle(scholarship.getTitle());
                existingScholarship.setDescription(scholarship.getDescription());
                existingScholarship.setAmount(scholarship.getAmount());
                existingScholarship.setEligibilityCriteria(scholarship.getEligibilityCriteria());
                existingScholarship.setDeadline(scholarship.getDeadline());

                // Save updated scholarship
                scholarshipService.saveScholarship(existingScholarship);
                return ResponseEntity.ok("Scholarship updated successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Scholarship not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating scholarship");
        }
    }

    // Get All Scholarships
    @GetMapping
    public ResponseEntity<List<Scholarship>> getAllScholarships() {
        List<Scholarship> scholarships = scholarshipService.getAllScholarships();
        return new ResponseEntity<>(scholarships, HttpStatus.OK);
    }

    // Get Scholarship by ID
    @GetMapping("/{id}")
    public ResponseEntity<Scholarship> getScholarshipById(@PathVariable Long id) {
        Optional<Scholarship> scholarship = scholarshipService.getScholarshipById(id);
        return scholarship.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Delete Scholarship
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteScholarship(@PathVariable Long id) {
        scholarshipService.deleteScholarship(id);
        return ResponseEntity.noContent().build();
    }

    // Retrieve deleted scholarship (Optional, based on your logic)
    @GetMapping("/deleted/{id}")
    public ResponseEntity<Scholarship> retrieveDeletedScholarship(@PathVariable Long id) {
        Optional<Scholarship> deletedScholarship = scholarshipService.retrieveDeletedScholarship(id);
        return deletedScholarship.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
