package Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Model.Post;
import Repo.PostDao;

@Service
public class PostService {
	
	@Autowired
	PostDao postDao;
	
	public List<Post> selectAll(){
		return postDao.selectAll();
	}
	
	public boolean addPost(Post post) {
		postDao.insert(post);
		return true;
	}
	
	public boolean updatePost(Post post) {
		postDao.update(post);
		return true;
	}
	
	public Post selectPostById(int id) {
		Post post = postDao.selectById(id);
		return post;
	}
	
	
}
