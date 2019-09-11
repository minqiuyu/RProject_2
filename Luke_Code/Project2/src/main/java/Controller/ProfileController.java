package Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import Model.Profile;
import Repo.ProfileDao;

@CrossOrigin
@RestController
public class ProfileController {
	
	@Autowired
	private ProfileDao profileDao;
	
	

	public ProfileController() {
		
	}
	
//	Profile pro = new Profile(request.getParam("username"), request.getParam("password")..etc  
//			// then somewhere else we would do this:
//			FoodDao fd = fd.insert(pro);
	
	@PostMapping(value="/CreateProfile.foo")
	public void insert(Profile profile) {
	
//		Profile pro = new Profile();
//		
//		String userName = pro.se
//		String userPassword = profile.getUserPassword()
//		long phoneNum = profile.getPhoneNum();
//		String fName = profile.getfName() ;
//		String lName = profile.getlName() ;
//		String gender = profile.getGender();
//		int dob = profile.getDob();
//		String city = profile.getCity();
//		String email = profile.getEmail();
//		
		
		
	}
	



}
