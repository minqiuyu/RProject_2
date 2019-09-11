package Model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "PROFILE")
public class Profile {
	
	@Id // primary key
	@Column(name = "USER_ID")
	@GeneratedValue(strategy = GenerationType.AUTO) // autoincrement our id
	private int userId;
	
	@Column(name = "USERNAME", unique = true, nullable = false)
	private String userName;
	
	@Column(name = "USERPASS", nullable = false)
	private String userPassword;
	
	@Column(name = "PHONE")
	private long phoneNum;
	
	@Column(name = "FNAME", nullable = false)
	private String fName;
	
	@Column(name = "LNAME", nullable = false)
	private String lName;
	
	@Column(name = "GENDER", nullable = false)
	private String gender;
	
	@Column(name = "DOB", nullable = false)
	private int dob;
	
	@Column(name = "CITY", nullable = false)
	private String city;
	
	@Column(name = "EMAIL", unique = true, nullable = false)
	private String email;
	
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "profiles")
	private List<Post> posts;

	public Profile() {
		
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public long getPhoneNum() {
		return phoneNum;
	}

	public void setPhoneNum(int phoneNum) {
		this.phoneNum = phoneNum;
	}

	public String getfName() {
		return fName;
	}

	public void setfName(String fName) {
		this.fName = fName;
	}

	public String getlName() {
		return lName;
	}

	public void setlName(String lName) {
		this.lName = lName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getDob() {
		return dob;
	}

	public void setDob(int dob) {
		this.dob = dob;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<Post> getPosts() {
		return posts;
	}

	public void setPosts(List<Post> posts) {
		this.posts = posts;
	}

	@Override
	public String toString() {
		return "Profile [userId=" + userId + ", userName=" + userName + ", userPassword=" + userPassword + ", phoneNum="
				+ phoneNum + ", fName=" + fName + ", lName=" + lName + ", gender=" + gender + ", dob=" + dob + ", city="
				+ city + ", email=" + email + ", posts=" + posts + "]";
	}

	public Profile(int userId, String userName, String userPassword, long phoneNum, String fName, String lName,
			String gender, int dob, String city, String email, List<Post> posts) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userPassword = userPassword;
		this.phoneNum = phoneNum;
		this.fName = fName;
		this.lName = lName;
		this.gender = gender;
		this.dob = dob;
		this.city = city;
		this.email = email;
		this.posts = posts;
	}

	public Profile(int userId, String userName, String userPassword, long phoneNum, String fName, String lName,
			String gender, int dob, String city, String email) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userPassword = userPassword;
		this.phoneNum = phoneNum;
		this.fName = fName;
		this.lName = lName;
		this.gender = gender;
		this.dob = dob;
		this.city = city;
		this.email = email;
	}
	
	
	

	
}
