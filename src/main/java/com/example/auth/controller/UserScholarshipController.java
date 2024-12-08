package com.example.auth.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.auth.model.Scholarship;
import com.example.auth.service.ScholarshipService;

@RestController
@RequestMapping("/user/scholarships")
public class UserScholarshipController {

    @Autowired
    private ScholarshipService scholarshipService;

    // Get all scholarships (visible to users)
    @GetMapping
    public List<Scholarship> getAllScholarships() {
        return scholarshipService.getAllScholarships();
    }
}
