package com.base.baseprojectbackend.security.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.base.baseprojectbackend.security.user.Principal;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JWTTokenProvider {

    public static final long JWT_EXPIRATION_TIME = 60 * 1000;  // 15 min expressed in milliseconds

    @Value("123")
    private String secret;

    public String generateJWTToken(Principal userPrincipal) {
        return JWT.create()
                .withIssuer("server")
                .withAudience("server")
                .withSubject(userPrincipal.getUsername())
                .withArrayClaim("roles", getClaimsFromUser(userPrincipal))
                .withExpiresAt(new Date(System.currentTimeMillis() + JWT_EXPIRATION_TIME))
                .sign(Algorithm.HMAC512(secret.getBytes()));
    }

    private String[] getClaimsFromUser(Principal user) {

        return user.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .toArray(String[]::new);
    }
}
