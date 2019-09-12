package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import model.Profile;
import service.ProfileServ;


@CrossOrigin
@RestController
public class ProfileController {
	
	@Autowired
	private ProfileServ profileserv;
	
	
	//Get all profiles
	@GetMapping("/GetAllP.do")
	public ResponseEntity<List<Profile>> list(){
		List<Profile>Plist = profileserv.selectAll();
		return ResponseEntity.ok().body(Plist);
	}
	
	//insert a profile
	@PostMapping(value="/InsertProfile")
	public void insert(@RequestBody Profile profile){
		profileserv.insert(profile);
	}
	 
	//select profile by ID
	@GetMapping("/SelectByID/{id}")
	public ResponseEntity<Profile> selectById(@PathVariable("id") int id){
		Profile profile = profileserv.selectById(id);
		return ResponseEntity.ok().body(profile);
	}
	
	//update profile
//	@PutMapping("/UpdateProfile/{id}")
//	public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody Profile profile){
//		profileserv.
		
	//}
	
}




