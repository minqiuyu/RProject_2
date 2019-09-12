package test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import model.Profile;
import repo.ProfileDao;

public class Test {

	public static ApplicationContext appContext = new ClassPathXmlApplicationContext("applicationContext.xml");
	public static ProfileDao pd = appContext.getBean("profileRepo", ProfileDao.class);
	// public static PostDao pod = appContext.getBean("postRepo", PostDao.class);
	//public static ProfileDao pd = appContext.getBean
	
	public static void main(String[] args) {

		
		Profile pro1 = new Profile(2,"man3","pass",754555,"test4","test","male",7151994,"city","test@test.com");
		Profile pro2 = new Profile(3,"man4","pass1",954555,"test5","test","male",9151996,"city1","test1@test.com");
		Profile pro3 = new Profile(4,"man5","pass2",555555,"test6","test","female",112284,"city2","test2@test.com");
		
		System.out.println("Before");
		pd.insert(pro1);
		pd.insert(pro2);
		pd.insert(pro3);
		System.out.println(pd.selectAll());
		System.out.println("Done");

	}

	
}
