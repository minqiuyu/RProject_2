package Test;

import Controller.ProfileController;
import Model.Profile;

public class Test {

	public static void main(String[] args) {
		
		ProfileController Pc = new ProfileController();
		Profile profile = new Profile();
		
		profile.setUserName("kim");
		profile.setUserPassword("test");
		
		Pc.insert(profile);

	}

	
}
