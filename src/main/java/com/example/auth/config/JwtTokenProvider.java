package com.example.auth.config;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.Claims;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtTokenProvider {

    private static final byte[] SECRET_KEY = null;
	private String secretKey = "secret";  // Change this to a secure key

    // Generate JWT token
    public String generateToken(String email, String role) {
        return Jwts.builder()
                .setSubject(email)
                .claim("role", role) // Attach the role to the JWT token
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 86400000))  // 1 day expiration
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    // Validate the JWT token
    public boolean validateToken(String token) {
        try {
            Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token);  // This will throw an exception if the token is invalid
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    // Get user email from token
    public String getEmailFromToken(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject(); // Get the subject (email) from the token
    }

    public String extractUsername(String token) {
        try {
            // Parse the JWT token and extract the claims
            Claims claims = Jwts.parser()
                    .setSigningKey(SECRET_KEY)
                    .parseClaimsJws(token)
                    .getBody();

            // Return the subject (username) from the claims
            return claims.getSubject();
        } catch (Exception e) {
            // Log the error and return null if the token is invalid or parsing fails
            System.out.println("Invalid JWT token: " + e.getMessage());
            return null;
        }
    }
}
