package com.example.auth.service;

import com.example.auth.model.Scholarship;
import com.example.auth.repository.ScholarshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private ScholarshipRepository scholarshipRepository;

    public List<Scholarship> getAllScholarships() {
        return scholarshipRepository.findAll();
    }

    public Optional<Scholarship> getScholarshipById(Long id) {
        return scholarshipRepository.findById(id);
    }

    public Scholarship addScholarship(Scholarship scholarship) {
        return scholarshipRepository.save(scholarship);
    }

    public Scholarship updateScholarship(Scholarship scholarship) {
        return scholarshipRepository.save(scholarship);
    }

    public void deleteScholarship(Long id) {
        scholarshipRepository.deleteById(id);
    }
}
