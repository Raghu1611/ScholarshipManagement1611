package com.example.auth.controller;

import com.example.auth.model.User;
import com.example.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    // Register a new user
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Map<String, String> registerDetails) {
        String email = registerDetails.get("email");
        String password = registerDetails.get("password");
        String role = registerDetails.get("role"); // Optional role

        User user = new User();
        user.setEmail(email);
        user.setPassword(password);  // This will be hashed in service
        user.setRole(role); // This could be "ADMIN" or "USER"

        String result = userService.registerUser(user);
        return ResponseEntity.ok(result); // Return result of registration
    }

    // Login a user
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginDetails) {
        String email = loginDetails.get("email");
        String password = loginDetails.get("password");

        String role = userService.authenticateUser(email, password);

        if (role == null) {
            return ResponseEntity.status(401).body("Invalid email or password");
        }

        // Create a response based on the user's role
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Login successful");
        response.put("role", role);

        if (role.equals("ADMIN")) {
            response.put("redirectUrl", "/admin-page");
        } else if (role.equals("USER")) {
            response.put("redirectUrl", "/user-page");
        }

        return ResponseEntity.ok(response);
    }
    // GET request to get all users
    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
   
}
