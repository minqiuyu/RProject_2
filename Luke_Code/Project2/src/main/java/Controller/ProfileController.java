package Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import Model.Profile;
import Service.ProfileServ;

@CrossOrigin
@RestController
public class ProfileController {
	
	@Autowired
	private ProfileServ profileserv;
	
	
	//Get all profiles
	@GetMapping("/GetallP")
	public ResponseEntity<List<Profile>> list(){
		List<Profile>Plist = profileserv.selectAll();
		return ResponseEntity.ok().body(Plist);
		
	}
	
	
//	@PostMapping(value="/CreateProfile.foo")
//	public void insert(Profile profile) {
//		
//	}
//	

}
