package com.microservices.elit.controller;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class useroles {

	@GetMapping(path="/elit/secured/user/roles",produces="application/json")
	public @ResponseBody ResponseEntity<?> roles() { 
		
		try {
	Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

	Set<String> roles = authentication.getAuthorities().stream()
	     .map(r -> r.getAuthority()).collect(Collectors.toSet());
	
	
	
	return new ResponseEntity<Set<String>>( roles, HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<Set<String>>( HttpStatus.INTERNAL_SERVER_ERROR);
		}
	
	}
	
	@GetMapping(path="/elit/secured/user/name",produces="application/json")
	public @ResponseBody ResponseEntity<?> user() { 
		
		try {
	Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

	String u =authentication.getName();
	
	
	return new ResponseEntity<String>( u, HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<Set<String>>( HttpStatus.INTERNAL_SERVER_ERROR);
		}
	
	}
	
	@GetMapping(path="/elit/secured/user/user",produces="application/json")
	public @ResponseBody ResponseEntity<?> userole() { 
		
		try {
	Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

	Set<String> roles = authentication.getAuthorities().stream()
	     .map(r -> r.getAuthority()).collect(Collectors.toSet());
	
	String u =authentication.getName();
	
	userole ur=new userole(u,roles);
	
	return new ResponseEntity<userole>( ur, HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<Set<String>>( HttpStatus.INTERNAL_SERVER_ERROR);
		}
	
	}
	
	
}

class userole{
	String name;
	Set<String> roles;
	public userole(String name, Set<String> roles) {
		super();
		this.name = name;
		this.roles = roles;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Set<String> getRoles() {
		return roles;
	}
	public void setRoles(Set<String> roles) {
		this.roles = roles;
	}
}
