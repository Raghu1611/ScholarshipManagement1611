package com.example.auth.service;

import com.example.auth.repository.UserRepository;
import com.example.auth.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class ResetPasswordService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public ResetPasswordService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public String resetPassword(String email, String newPassword) {
        User user = userRepository.findByEmail(email).orElse(null);
        if (user == null) {
            return "User not found";
        }

        // Encode the new password
        String encodedPassword = passwordEncoder.encode(newPassword);
        user.setPassword(encodedPassword);
        userRepository.save(user);

        return "Password successfully reset";
    }
}
