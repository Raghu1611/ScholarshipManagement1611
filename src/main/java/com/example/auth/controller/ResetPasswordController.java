package com.example.auth.controller;

import com.example.auth.service.ResetPasswordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ResetPasswordController {

    private final ResetPasswordService resetPasswordService;

    @Autowired
    public ResetPasswordController(ResetPasswordService resetPasswordService) {
        this.resetPasswordService = resetPasswordService;
    }

    @PostMapping("/reset-password")
    public String resetPassword(@RequestParam String email, @RequestParam String newPassword) {
        return resetPasswordService.resetPassword(email, newPassword);
    }
}
