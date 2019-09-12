package Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Model.Profile;
import Repo.ProfileDao;

@Service
public class ProfileServ {
	
	@Autowired
	ProfileDao profiledao;
	
	public List<Profile> selectAll(){
		return profiledao.selectAll();
	}
	
	

}
