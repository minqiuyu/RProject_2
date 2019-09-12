package repo;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import model.Post;

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
	
	public Post selectById(int id) {
		return sesFact.getCurrentSession().get(Post.class, id);
	}
	
	public List<Post> selectAll(){
		return sesFact.getCurrentSession().createQuery("from Post", Post.class).list();
	}
	

}
