package com.example.repository;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.model.Profile;

@Repository("profileRepo")
@Transactional
public class ProfileDao {
	
	
	@Autowired
	private SessionFactory sesFact;
	public ProfileDao() {
		
	}
	
	public void insert(Profile profile) {
		sesFact.getCurrentSession().save(profile);
	}
	
//	public void update(int id , Profile profile) {
//		sesFact.getCurrentSession().update(profile);
//	}
	
//	public void update(int id , Profile profile) {
//		Session session = sesFact.getCurrentSession();
//		Profile profile1 = session.byId(Profile.class).load(id);
//		profile1.getUserPassword();
//	}
//	
//	
	public Profile selectById(int id) {
		return sesFact.getCurrentSession().get(Profile.class, id);
	}
	
	public Profile selectByUserName(String userName) {
		Query q = sesFact.getCurrentSession().createQuery("from Profile where username like :username");
		q.setParameter("username", userName + "%");
		return (Profile) q.uniqueResult();
//		return sesFact.getCurrentSession().get(Profile.class, userName);
	}
	
	
	public List<Profile> selectByEmail(String email) {
		Query q = sesFact.getCurrentSession().createQuery("from Profile where email like :email");
		q.setParameter("email", email + "%");
		return (List<Profile>) q.getResultList();
//		return sesFact.getCurrentSession().get(Profile.class, userName);
	}
	
	public List<Profile> selectByFirstName(String firstName) {
//		Query q = sesFact.getCurrentSession().createQuery("from Profile where fName = :fName");
		Query q = sesFact.getCurrentSession().createQuery("from Profile where fName like :fName");
		q.setParameter("fName", firstName + "%");
		return (List<Profile>) q.getResultList();
	}
	public List<Profile> selectAll(){
		List<Profile> profileList = sesFact.getCurrentSession().createQuery("from Profile", Profile.class).list();
		return profileList;
	}
	
	
	public Profile update(int id, Profile profile) {
		Session sess = sesFact.getCurrentSession();
		Profile newProfile = sess.byId(Profile.class).load(id);
		
		newProfile.setfName(profile.getfName());
		newProfile.setEmail(profile.getEmail());
		newProfile.setCity(profile.getCity());
		newProfile.setDob(profile.getDob());
		newProfile.setlName(profile.getlName());
		newProfile.setGender(profile.getGender());
		newProfile.setUserName(profile.getUserName());
		newProfile.setUserPassword(profile.getUserPassword());
		System.out.println("New profile: " + newProfile.toString());
		sess.saveOrUpdate(newProfile);
		System.out.println("Updated.");
		
		return newProfile;
	}
	
}
