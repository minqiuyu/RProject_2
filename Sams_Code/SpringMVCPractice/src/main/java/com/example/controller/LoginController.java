package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.example.helpers.LoginCredentials;
import com.example.model.Profile;
import com.example.repository.ProfileDao;

@RestController
@CrossOrigin
@SessionAttributes("loggedInUser")
public class LoginController {
	
	@Autowired
	ProfileDao proDao;
	@PostMapping(value="/login.do")
//	, @RequestParam String password
//	ResponseEntity<Profile>
	public Profile login(@RequestBody LoginCredentials creds) {
//		System.out.println("Received username and pass of " + userName + " " + password);
//		Profile found = proDao.selectByUserName(username);
		if(creds==null) {
//			return ResponseEntity.ok().body("No such profile exists.");
			return null;
		}
		System.out.println("Username from angular: " + creds);
		Profile found = returnLoggedInUser(creds.getUsername());
		System.out.println("Found profile: " + found);
		
		if(creds.getPassword().equals(found.getUserPassword())){
//			System.out.println(found.toString());
//			return ResponseEntity.ok().body("Login successful. " + found.toString());
			return found;
		}
		else {
//			return ResponseEntity.badRequest().body("Incorrect password");
			return null;
		}
//			return ResponseEntity.ok().body("Done. ");
	}
	
	@ModelAttribute("loggedInUser")
	public Profile returnLoggedInUser(String userName) {
		Profile p = proDao.selectByUserName(userName);
		return p;
	}
}
