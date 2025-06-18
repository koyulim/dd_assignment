package introduction.spring_introduction;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class SpringIntroductionApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringIntroductionApplication.class, args);
	}

}
