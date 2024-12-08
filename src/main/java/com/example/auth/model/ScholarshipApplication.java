package com.example.auth.model;

import org.springframework.web.multipart.MultipartFile;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

import java.util.Date;

@Entity
@Table(name = "scholarship_application")  // Explicitly specify the table name
public class ScholarshipApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String dob;
    private String qualification;
    private double tenthMarks;
    private double interMarks;
    private double graduationMarks;
    private double postGradMarks;
    private String phone;
    private String reason;
    private String bankDetails;
    private String status;

    public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Lob
    private byte[] tenthCertificate;

    @Lob
    private byte[] interCertificate;

    @Lob
    private byte[] graduationCertificate;

    @Lob
    private byte[] postGradCertificate;

    @Lob
    private byte[] incomeProof;

    @Lob
    private byte[] casteCertificate;

    @Lob
    private byte[] domicileCertificate;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt = new Date();

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public double getTenthMarks() {
        return tenthMarks;
    }

    public void setTenthMarks(double tenthMarks) {
        this.tenthMarks = tenthMarks;
    }

    public double getInterMarks() {
        return interMarks;
    }

    public void setInterMarks(double interMarks) {
        this.interMarks = interMarks;
    }

    public double getGraduationMarks() {
        return graduationMarks;
    }

    public void setGraduationMarks(double graduationMarks) {
        this.graduationMarks = graduationMarks;
    }

    public double getPostGradMarks() {
        return postGradMarks;
    }

    public void setPostGradMarks(double postGradMarks) {
        this.postGradMarks = postGradMarks;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getBankDetails() {
        return bankDetails;
    }

    public void setBankDetails(String bankDetails) {
        this.bankDetails = bankDetails;
    }

    public byte[] getTenthCertificate() {
        return tenthCertificate;
    }

    public void setTenthCertificate(byte[] tenthCertificate) {
        this.tenthCertificate = tenthCertificate;
    }

    public byte[] getInterCertificate() {
        return interCertificate;
    }

    public void setInterCertificate(byte[] interCertificate) {
        this.interCertificate = interCertificate;
    }

    public byte[] getGraduationCertificate() {
        return graduationCertificate;
    }

    public void setGraduationCertificate(byte[] graduationCertificate) {
        this.graduationCertificate = graduationCertificate;
    }

    public byte[] getPostGradCertificate() {
        return postGradCertificate;
    }

    public void setPostGradCertificate(byte[] postGradCertificate) {
        this.postGradCertificate = postGradCertificate;
    }

    public byte[] getIncomeProof() {
        return incomeProof;
    }

    public void setIncomeProof(byte[] incomeProof) {
        this.incomeProof = incomeProof;
    }

    public byte[] getCasteCertificate() {
        return casteCertificate;
    }

    public void setCasteCertificate(byte[] casteCertificate) {
        this.casteCertificate = casteCertificate;
    }

    public byte[] getDomicileCertificate() {
        return domicileCertificate;
    }

    public void setDomicileCertificate(byte[] domicileCertificate) {
        this.domicileCertificate = domicileCertificate;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
