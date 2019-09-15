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
	
	public void update(int id , Profile profile) {
		Session session = sesFact.getCurrentSession();
		Profile profile1 = session.byId(Profile.class).load(id);
		profile1.getUserPassword();
	}
	
	
	public Profile selectById(int id) {
		return sesFact.getCurrentSession().get(Profile.class, id);
	}
	
	public Profile selectByUserName(String userName) {
		Query q = sesFact.getCurrentSession().createQuery("from Profile where username=:username");
		q.setString("username", userName);
		return (Profile) q.uniqueResult();
//		return sesFact.getCurrentSession().get(Profile.class, userName);
	}
	
	
	public Profile selectByEmail(String email) {
		Query q = sesFact.getCurrentSession().createQuery("from Profile where email=?");
		q.setString(0, email);
		return (Profile) q.uniqueResult();
//		return sesFact.getCurrentSession().get(Profile.class, userName);
	}
	
	public List<Profile> selectByFirstName(String firstName) {
		Query q = sesFact.getCurrentSession().createQuery("from Profile where fName = ?");
		q.setString(0, firstName);
		return (List<Profile>) q.getResultList();
	}
	public List<Profile> selectAll(){
		List<Profile> profileList = sesFact.getCurrentSession().createQuery("from Profile", Profile.class).list();
		return profileList;
	}
	
	

}
