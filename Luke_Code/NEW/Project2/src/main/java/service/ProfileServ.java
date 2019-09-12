package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import model.Profile;
import repo.ProfileDao;

@Service
public class ProfileServ {
	
	@Autowired
	ProfileDao profiledao;
	
	public List<Profile> selectAll(){
		return profiledao.selectAll();
	}
	
	public void insert(Profile profile) {
	
	}
	
	public Profile selectById(int id) {
		return profiledao.selectById(id);
	}
	
//	public void update(int id, Profile proflie) {
//		profiledao.update(id , profile);
//	}

}