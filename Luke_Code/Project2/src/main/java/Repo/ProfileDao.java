package Repo;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import Model.Profile;

@Repository("profileDaoo")
@Transactional
public class ProfileDao {
	
	
	@Autowired
	private SessionFactory sesFact;
	public ProfileDao() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public void insert(Profile profile) {
		sesFact.getCurrentSession().save(profile);
	}
	
	public void update(Profile profile) {
		sesFact.getCurrentSession().update(profile);
	}
	
	public Profile selectById(int id) {
		return sesFact.getCurrentSession().get(Profile.class, id);
	}
	
	public List<Profile> selectAll(){
		return sesFact.getCurrentSession()
				.createQuery("from Profile", Profile.class).list();
	}
	
	

}
