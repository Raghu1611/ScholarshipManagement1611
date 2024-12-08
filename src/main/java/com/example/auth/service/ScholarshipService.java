package com.example.auth.service;

import com.example.auth.model.Scholarship;
import com.example.auth.repository.ScholarshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScholarshipService {

    private final ScholarshipRepository scholarshipRepository;

    @Autowired
    public ScholarshipService(ScholarshipRepository scholarshipRepository) {
        this.scholarshipRepository = scholarshipRepository;
    }

    // Create or Update Scholarship
    public Scholarship saveScholarship(Scholarship scholarship) {
        return scholarshipRepository.save(scholarship);
    }

    // Get All Scholarships
    public List<Scholarship> getAllScholarships() {
        return scholarshipRepository.findAll();
    }

    // Get Scholarship by ID
    public Optional<Scholarship> getScholarshipById(Long id) {
        return scholarshipRepository.findById(id);
    }

    // Delete Scholarship
    public void deleteScholarship(Long id) {
        scholarshipRepository.deleteById(id);
    }

    // Retrieve deleted scholarship (you may need to implement soft deletion or have an archive table for this)
    public Optional<Scholarship> retrieveDeletedScholarship(Long id) {
        // This is assuming you store deleted scholarships somewhere (e.g., in an archive table or soft delete)
        // For now, it's just checking in the same repository. 
        // You could change the logic based on your actual implementation.
        return scholarshipRepository.findById(id);
    }
}
