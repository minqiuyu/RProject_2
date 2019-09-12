package repo;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import model.Profile;

@Repository("profileRepo")
@Transactional
public class ProfileDao {
	
	
	@Autowired
	private SessionFactory sesFact;
	public ProfileDao() {
		super();
		
	}
	
	public void insert(Profile profile) {
		sesFact.getCurrentSession().save(profile);
	}
	
//	public void update(int id , Profile profile) {
//		sesFact.getCurrentSession().update(profile);
//	}
	
	public void update(int id , Profile profile) {
		Session session = sesFact.getCurrentSession();
		Profile profile1 = session.byId(Profile.class).load(id);
		profile1.getUserPassword();
	}
	
	
	public Profile selectById(int id) {
		return sesFact.getCurrentSession().get(Profile.class, id);
	}
	
	public List<Profile> selectAll(){
		List<Profile> profileList = sesFact.getCurrentSession().createQuery("from Profile", Profile.class).list();
		return profileList;
	}
	
	

}
