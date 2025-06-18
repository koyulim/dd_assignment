package introduction.spring_introduction.user.repository;

import introduction.spring_introduction.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
