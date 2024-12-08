package com.example.auth.repository;

import com.example.auth.model.Scholarship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScholarshipRepository extends JpaRepository<Scholarship, Long> {
    // Custom query methods can be added here if needed
}
