package com.example.auth.controller;

import com.example.auth.model.User;
import com.example.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private UserService userService;

    // Admin Dashboard Endpoint
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/dashboard")
    public String getAdminDashboard() {
        return "Welcome to the Admin Dashboard!";
    }

    // Get all users (Admin only)
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // Update an existing user (Admin only)
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/users/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    // Delete a user (Admin only)
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
