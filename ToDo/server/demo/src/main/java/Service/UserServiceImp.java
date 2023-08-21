package Service;

import Entity.Users;
import Model.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service("UserService")
@Lazy
public class UserServiceImp implements IUserService {
    @Autowired
    private UserDao userDao;


    @Override
    public Optional<Users> queryUser(Integer id) {
        Optional <Users> user = Optional.of(userDao.getReferenceById(id));
        return user;
    }

    @Override
    public Optional<List<Users>> queryAllUsers() {
        Optional<List<Users>> usersList = Optional.of(userDao.findAll());
        return usersList;
    }

    @Override
    public Optional<Integer> insertUser(Users user) {
        userDao.saveAndFlush(user);
        Users userInserted = userDao.getReferenceById(user.getUser_id());
        return Optional.of(userInserted.getUser_id());
    }
}
