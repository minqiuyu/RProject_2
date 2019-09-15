package com.example.repository;

import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.model.Post;
@Repository("postRepo")
@Transactional
public class PostDao {

	@Autowired
	private SessionFactory sesFact;
	public PostDao() {
		super();
		
	}
	
	public void insert(Post post) {
		sesFact.getCurrentSession().save(post);
	}
	
	public void update(Post post) {
		sesFact.getCurrentSession().update(post);
	}
	
	public Post selectPostById(int id) {
		return sesFact.getCurrentSession().get(Post.class, id);
	}
	
	public List<Post> selectPostByUserId(int userId){
		Query q = sesFact.getCurrentSession().createQuery("from Post where user_id=:userId", Post.class);
		q.setInteger("userId", userId);
		return q.getResultList();
		
	}
	
	public List<Post> selectAll(){
		return sesFact.getCurrentSession().createQuery("from Post", Post.class).list();
	}
	

}
