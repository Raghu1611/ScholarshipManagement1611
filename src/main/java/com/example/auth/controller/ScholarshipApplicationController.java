package com.example.auth.controller;

import com.example.auth.model.ScholarshipApplication;
import com.example.auth.service.ScholarshipApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/scholarship")
public class ScholarshipApplicationController {

    @Autowired
    private ScholarshipApplicationService service;

    // Submit a new scholarship application with file uploads
    @PostMapping("/apply")
    public ResponseEntity<ScholarshipApplication> submitApplication(
            @ModelAttribute ScholarshipApplication application,
            @RequestParam(value = "tenthCertificate", required = false) MultipartFile tenthCertificate,
            @RequestParam(value = "interCertificate", required = false) MultipartFile interCertificate,
            @RequestParam(value = "graduationCertificate", required = false) MultipartFile graduationCertificate,
            @RequestParam(value = "postGradCertificate", required = false) MultipartFile postGradCertificate,
            @RequestParam(value = "incomeProof", required = false) MultipartFile incomeProof,
            @RequestParam(value = "casteCertificate", required = false) MultipartFile casteCertificate,
            @RequestParam(value = "domicileCertificate", required = false) MultipartFile domicileCertificate
    ) {
        try {
            // Call service method to save the application with the attached files
            ScholarshipApplication savedApplication = service.submitApplication(
                application, 
                tenthCertificate, 
                interCertificate, 
                graduationCertificate, 
                postGradCertificate, 
                incomeProof, 
                casteCertificate, 
                domicileCertificate
            );
            return new ResponseEntity<>(savedApplication, HttpStatus.CREATED);  // Return success response
        } catch (IOException e) {
            e.printStackTrace();  // Log the error for debugging
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);  // Return error response for file upload issues
        } catch (Exception e) {
            e.printStackTrace();  // Log the error for debugging
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);  // Return error response for other issues
        }
    }

    // Get all scholarship applications
    @GetMapping("/applications")
    public ResponseEntity<List<ScholarshipApplication>> getAllApplications() {
        return new ResponseEntity<>(service.getAllApplications(), HttpStatus.OK);  // Return list of applications
    }

    // Get a specific application by ID
    @GetMapping("/{id}")
    public ResponseEntity<ScholarshipApplication> getApplicationById(@PathVariable Long id) {
        return service.getApplicationById(id)
                .map(application -> new ResponseEntity<>(application, HttpStatus.OK))  // Return the application if found
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));  // Return 404 if application not found
    }

    // Delete an application by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteApplication(@PathVariable Long id) {
        service.deleteApplication(id);  // Call the service to delete the application
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);  // Return 204 No Content on successful deletion
    }

    // Approve an application by ID
    @PostMapping("/approve/{id}")
    public ResponseEntity<String> approveApplication(@PathVariable Long id) {
        try {
            String status = service.updateApplicationStatus(id, "Approved");  // Set status to "Approved"
            return new ResponseEntity<>(status, HttpStatus.OK);  // Return success response
        } catch (Exception e) {
            return new ResponseEntity<>("Error updating application status", HttpStatus.BAD_REQUEST);  // Handle error
        }
    }

    // Reject an application by ID
    @PostMapping("/reject/{id}")
    public ResponseEntity<String> rejectApplication(@PathVariable Long id) {
        try {
            String status = service.updateApplicationStatus(id, "Rejected");  // Set status to "Rejected"
            return new ResponseEntity<>(status, HttpStatus.OK);  // Return success response
        } catch (Exception e) {
            return new ResponseEntity<>("Error updating application status", HttpStatus.BAD_REQUEST);  // Handle error
        }
    }
}
