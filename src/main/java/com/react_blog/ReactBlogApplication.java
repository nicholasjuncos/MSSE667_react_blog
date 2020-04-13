package com.react_blog;

import com.react_blog.models.ERole;
import com.react_blog.models.Post;
import com.react_blog.models.Role;
import com.react_blog.models.User;
import com.react_blog.repositories.PostRepository;
import com.react_blog.repositories.RoleRepository;
import com.react_blog.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.*;

@SpringBootApplication
public class ReactBlogApplication implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PostRepository postRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	public static void main(String[] args) {
		SpringApplication.run(ReactBlogApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		postRepository.deleteAll();
		userRepository.deleteAll();
		roleRepository.deleteAll();
		if(roleRepository.count() != 3) {
			roleRepository.deleteAll();
			roleRepository.save(new Role(ERole.ROLE_USER));
			roleRepository.save(new Role(ERole.ROLE_MODERATOR));
			roleRepository.save(new Role(ERole.ROLE_ADMIN));
		}
		if(!userRepository.existsByUsername("Testman")) {
			Set<Role> roles = new HashSet<>();
			Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(adminRole);
			Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(modRole);
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
			User testman = new User("Test", "Man", "Testman", "Testman@test.com", encoder.encode("Testman1234"));
			testman.setRoles(roles);
			userRepository.save(testman);
			createPosts(testman);
		} else {
			if(postRepository.count() == 0) {
				User testman = userRepository.findByUsername("Testman").orElseThrow(() -> new RuntimeException("Error: User is not found."));
				createPosts(testman);
			}
		}

	}

	public void createPosts(User user) {
		String largeTestDescription = "This is a large test description. This is a large test description. This is a large test description. This is a large test description. This is a large test description. This is a large test description. \n This is a large test description. This is a large test description. This is a large test description. This is a large test description. This is a large test description. This is a large test description.";
		String slightlyLargishTestQuote = "This is a slightly largish test description. Will need to span a little longer for test purposes.";
		String testQuoter = "Test Quoter";
		Date date1 = new GregorianCalendar(2020, Calendar.FEBRUARY, 14).getTime();
//		Post post1 = new Post(user, true, date1, "This is the first Post", "", "This is a test post.", largeTestDescription, "", "", "", "", "", "", "", "", "", 0);
		Post post1 = new Post(user, true, date1, "This is the first Post", "This is a test post.", largeTestDescription, "", "", "", 0);
		postRepository.save(post1);
		Date date2 = new GregorianCalendar(2020, Calendar.FEBRUARY, 26).getTime();
//		Post post2 = new Post(user, false, date2, "This is the second Post", "", "This is a test post.", largeTestDescription, "", "", "", "", slightlyLargishTestQuote, testQuoter, "", "", "", 0);
		Post post2 = new Post(user, false, date2, "This is the second Post", "This is a test post.", largeTestDescription, slightlyLargishTestQuote, testQuoter, "", 0);
		postRepository.save(post2);
		Date date3 = new GregorianCalendar(2020, Calendar.MARCH, 29).getTime();
//		Post post3 = new Post(user, true, date3, "This is the third Post", "", "This is a test post.", largeTestDescription, "Testing it out", largeTestDescription+largeTestDescription, "", "", "", "", "", "", "", 0);
		Post post3 = new Post(user, true, date3, "This is the third Post", "This is a test post.", largeTestDescription+largeTestDescription, "", "", "", 0);
		postRepository.save(post3);
		Date date4 = new GregorianCalendar(2020, Calendar.JUNE, 30).getTime();
		Post post4 = new Post(user, true, date4, "This is the fourth Post", "This is a test post.", largeTestDescription+largeTestDescription, "", "", "",  0);
		postRepository.save(post4);
		Date date5 = new GregorianCalendar(2019, Calendar.DECEMBER, 7).getTime();
//		Post post5 = new Post(user, true, date5, "This is the fifth Post", "", "This is a test post.", largeTestDescription, "Testing it out", largeTestDescription+largeTestDescription, "Testing it out again", largeTestDescription, slightlyLargishTestQuote, testQuoter, slightlyLargishTestQuote, testQuoter, "", 0);
		Post post5 = new Post(user, true, date5, "This is the fifth Post", "This is a test post.",largeTestDescription+largeTestDescription, slightlyLargishTestQuote, testQuoter, "", 0);
		postRepository.save(post5);
	}

}
