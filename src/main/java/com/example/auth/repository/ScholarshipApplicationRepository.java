package com.example.auth.repository;

import com.example.auth.model.ScholarshipApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScholarshipApplicationRepository extends JpaRepository<ScholarshipApplication, Long> {
    // Additional custom query methods can be added here if needed
}