package kr.haveyoueverbeento.repository;

import kr.haveyoueverbeento.web.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long>{
	User findByUserIp(String userIp);
}
