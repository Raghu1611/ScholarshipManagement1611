package com.example.auth.service;

import com.example.auth.model.User;
import com.example.auth.repository.UserRepository;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

 
    public String registerUser(User user) {
        // Check if email already exists
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return "Email already exists";
        }

        // Hash the password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Set default role if not provided
        if (user.getRole() == null || user.getRole().isEmpty()) {
            user.setRole("USER");
        }

        // Save user to the database
        userRepository.save(user);
        return "User registered successfully";
    }

    // Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll(); // Return all users from the database
    }

    // Get a user by ID
    public User getUserById(Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.orElse(null); // Return user if found, else return null
    }

    // Update an existing user
    public User updateUser(Long id, User updatedUser) {
        Optional<User> existingUserOpt = userRepository.findById(id);
        if (existingUserOpt.isPresent()) {
            User existingUser = existingUserOpt.get();
            existingUser.setEmail(updatedUser.getEmail()); // Update email
            existingUser.setPassword(updatedUser.getPassword()); // Update password
            existingUser.setRole(updatedUser.getRole()); // Update role
            return userRepository.save(existingUser); // Save the updated user
        }
        return null; // If user not found, return null
    }

    // Delete a user by ID
    public void deleteUser(Long id) {
        userRepository.deleteById(id); // Delete user by ID
    }

    // Authenticate a user (Login)
    public String authenticateUser(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);

        // Check if user exists and password matches
        if (user.isPresent() && passwordEncoder.matches(password, user.get().getPassword())) {
            String role = user.get().getRole();
            return role; // Return role ('USER' or 'ADMIN')
        }

        return null; // Authentication failed
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email)
                             .orElse(null);
    }

    public boolean checkPassword(User user, String rawPassword) {
        // Compare raw password with the hashed password in the database
        return passwordEncoder.matches(rawPassword, user.getPassword());
    }

    public void updatePassword(User user, String newPassword) {
        // Hash the new password before saving
        String hashedPassword = passwordEncoder.encode(newPassword);
        user.setPassword(hashedPassword);
        userRepository.save(user);
    }
}
