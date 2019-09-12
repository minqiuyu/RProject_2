package Test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import Controller.ProfileController;
import Model.Profile;
import Repo.ProfileDao;
import Service.ProfileServ;

public class Test {

	public static ApplicationContext appContext = new ClassPathXmlApplicationContext("ApplicationContext.xml");
	public static ProfileDao pd = appContext.getBean("profileDao", ProfileDao.class);
	
	public static void main(String[] args) {
		
	
		//ProfileServ ps = new ProfileServ();
//		ProfileDao pd = new ProfileDao();
		System.out.println(pd.selectAll());
		
		System.out.println("Done");

	}

	
}
