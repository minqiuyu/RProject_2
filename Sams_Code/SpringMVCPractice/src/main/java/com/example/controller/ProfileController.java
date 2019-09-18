package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.helpers.SendEmail;
import com.example.model.Profile;
import com.example.repository.ProfileDao;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProfileController {
	
	@Autowired
	private ProfileDao proDao;
	
	
	//Get all profiles
	@GetMapping("/getAllProfiles.do")
	public ResponseEntity<List<Profile>> list(){
		List<Profile>Plist = proDao.selectAll();
		return ResponseEntity.ok().body(Plist);
	}
	
	@GetMapping("/selectProfileByUsername/{userName}.do")
	public ResponseEntity<Profile> selectProfileByUserName(@PathVariable("userName") String userName){
		Profile profile = proDao.selectByUserName(userName);
		return ResponseEntity.ok().body(profile);
	}
	
	@GetMapping("/selectProfileByEmail/{email}.do")
	public ResponseEntity<Profile> selectProfileByEmail(@PathVariable("email") String email){
		Profile profile = proDao.selectByEmail(email);
		return ResponseEntity.ok().body(profile);
	}
	
	@GetMapping("/selectProfileByFirstName/{firstName}.do")
	public ResponseEntity<List<Profile>> selectProfileByFirstName(@PathVariable("firstName") String firstName){
		List<Profile> profiles = proDao.selectByFirstName(firstName);
		return ResponseEntity.ok().body(profiles);
	}
	//insert a profile
	@CrossOrigin("http://localhost:4200")
	@PostMapping(value="/addProfile.do")
	@ResponseBody
	public void insert(@RequestBody Profile profile){
		System.out.println(profile);
		proDao.insert(profile);
	}
	 
	//select profile by ID
	@GetMapping("/selectProfileByID/{id}.do")
	public ResponseEntity<Profile> selectById(@PathVariable("id") int id){
		Profile profile = proDao.selectById(id);
		return ResponseEntity.ok().body(profile);
	}
	
	//update profile
//	@PutMapping("/updateProfile/{id}")
//	public ResponseEntity<String> update(@PathVariable int id, @RequestBody Profile profile) {
//		System.out.println("Updating profile: " + profile.toString());
//		proDao.update(id, profile);
//		return ResponseEntity.ok().body("Profile updated");
//	}
	
	@PutMapping("/updateProfile/{id}")
	public Profile updateAndReturn(@PathVariable int id, @RequestBody Profile profile) {
		System.out.println("Updating profile: " + profile.toString());
		Profile newProfile = proDao.update(id, profile);
		System.out.println("New profile in controller: " + newProfile.toString());
		return newProfile;
//		return ResponseEntity.ok().body("Profile updated: " + newProfile.toString());
	}
	
	@PutMapping("/resetPassword/{username}")
	public HttpStatus resetPassword(@PathVariable String username, @RequestBody Profile profile) {
		
		Profile foundProfile = proDao.selectByUserName(username); // find profile of the user
		String tempPass = SendEmail.sendMail(foundProfile.getEmail());
		if(foundProfile.getUserPassword().equals("false")) {
//			,HttpStatus.I_AM_A_TEAPOT
			System.out.println("SMTP failed. Resetting password to 'false' for user: " + foundProfile.getUserName());	
			return HttpStatus.NOT_IMPLEMENTED;
		}
		foundProfile.setUserPassword(tempPass);
		proDao.update(foundProfile.getUserId(), foundProfile); //update the atabase
//		ResponseEntity.ok().body("Password updated and sent to: " + foundProfile.getEmail())
		System.out.println("Password reset and sent to: " + foundProfile.getEmail());
		return HttpStatus.OK;  //send a message to front end
		
	}
	
}




