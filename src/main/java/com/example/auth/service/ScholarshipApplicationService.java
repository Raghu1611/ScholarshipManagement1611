package com.example.auth.service;

import com.example.auth.model.ScholarshipApplication;
import com.example.auth.repository.ScholarshipApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ScholarshipApplicationService {

    @Autowired
    private ScholarshipApplicationRepository repository;

    // Method to submit a new scholarship application with file uploads
    @Transactional
    public ScholarshipApplication submitApplication(ScholarshipApplication application, 
                                                    MultipartFile tenthCertificate,
                                                    MultipartFile interCertificate,
                                                    MultipartFile graduationCertificate,
                                                    MultipartFile postGradCertificate,
                                                    MultipartFile incomeProof,
                                                    MultipartFile casteCertificate,
                                                    MultipartFile domicileCertificate) throws IOException {
        
        // Set file contents as byte arrays
        if (tenthCertificate != null && !tenthCertificate.isEmpty()) 
            application.setTenthCertificate(tenthCertificate.getBytes());
        if (interCertificate != null && !interCertificate.isEmpty()) 
            application.setInterCertificate(interCertificate.getBytes());
        if (graduationCertificate != null && !graduationCertificate.isEmpty()) 
            application.setGraduationCertificate(graduationCertificate.getBytes());
        if (postGradCertificate != null && !postGradCertificate.isEmpty()) 
            application.setPostGradCertificate(postGradCertificate.getBytes());
        if (incomeProof != null && !incomeProof.isEmpty()) 
            application.setIncomeProof(incomeProof.getBytes());
        if (casteCertificate != null && !casteCertificate.isEmpty()) 
            application.setCasteCertificate(casteCertificate.getBytes());
        if (domicileCertificate != null && !domicileCertificate.isEmpty()) 
            application.setDomicileCertificate(domicileCertificate.getBytes());

        // Save and return the scholarship application
        return repository.save(application);
    }

    // Fetch all applications
    @Transactional(readOnly = true)
    public List<ScholarshipApplication> getAllApplications() {
        return repository.findAll();
    }

    // Fetch application by ID
    @Transactional(readOnly = true)
    public Optional<ScholarshipApplication> getApplicationById(Long id) {
        return repository.findById(id);
    }

    // Delete application by ID
    @Transactional
    public void deleteApplication(Long id) {
        repository.deleteById(id);
    }

    // Update the status of an application (approve or reject)
    @Transactional
    public String updateApplicationStatus(Long id, String status) {
        ScholarshipApplication application = repository.findById(id).orElseThrow(() -> new RuntimeException("Application not found"));
        application.setStatus(status);
        repository.save(application);
        return "Application " + status;
    }
}
