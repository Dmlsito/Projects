package Service;

import Entity.Users;

import java.util.List;
import java.util.Optional;

public interface IUserService {

    Optional<Users> queryUser (Integer id);
    Optional<List<Users>> queryAllUsers();
    Optional<Integer>insertUser(Users user);
}
