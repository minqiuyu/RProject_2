package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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
//	@RequestMapping(value="InsertProfile.do", method=RequestMethod.POST)
	@PostMapping(value="/addProfile.do")
	@ResponseBody
	
//	@RequestParam String username, @RequestParam String password,
//	@RequestParam String firstName, @RequestParam String lastName, @RequestParam Integer dob,
//	@RequestParam String email, @RequestParam String city, @RequestParam String gender
	public void insert(@RequestBody Profile profile){
		System.out.println(profile);
//		Profile nP = new Profile(username, password, firstName, lastName, gender, dob, city, email);
//		proDao.insert(nP);
		proDao.insert(profile);
	}
	 
	//select profile by ID
	@GetMapping("/selectProfileByID/{id}.do")
	public ResponseEntity<Profile> selectById(@PathVariable("id") int id){
		Profile profile = proDao.selectById(id);
		return ResponseEntity.ok().body(profile);
	}
	
	//update profile
//	@PutMapping("/UpdateProfile/{id}")
//	public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody Profile profile){
//		profileserv.
		
	//}
	
}




