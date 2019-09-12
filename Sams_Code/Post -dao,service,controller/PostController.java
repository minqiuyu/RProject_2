package Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import Model.Post;
import Service.PostService;

@RestController
@CrossOrigin
public class PostController {
	
	@Autowired
	private PostService postServ;
	
	@GetMapping("/allPosts")
	public ResponseEntity<List<Post>> list(){
		List<Post> posts = postServ.selectAll();
		return ResponseEntity.ok().body(posts);
	}
	
	@PostMapping("/updatePosts")
	public ResponseEntity<String> update(Post post){
		
		return ResponseEntity.ok().body("Post updated: " + post.toString());
	}
	
	@GetMapping(value="/allPosts/{id}")
	public Post getPostById(@PathVariable("id") int id) {
		return postServ.selectPostById(id);
	}
	
	@PostMapping(value="/addPost")
	public ResponseEntity<String> insert(Post post){
		return ResponseEntity.ok().body("Post added: " + post.toString());
	}
	
	@PostMapping(value="/deletePost")
	public ResponseEntity<String> delete(Post post){
		return ResponseEntity.ok().body("Post deleted: " + post.toString());
	}
}
