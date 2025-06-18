package introduction.spring_introduction.user.service;

import introduction.spring_introduction.user.entity.User;
import introduction.spring_introduction.user.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    /**
     * 설명 : 유저 리스트 정보 조회
     * @return List<User>
     */
    @Override
    public List<User> getUserList() {
        return userRepository.findAll();
    }

    /**
     * 설명 : 유저 정보 추가
     * @param userInfo
     */
    @Override
    @Transactional
    public void addUserInfo(User userInfo) {
        userRepository.save(userInfo);
    }

    /**
     * 설명 : 유저 정보 수정
     * @param userInfo
     */
    @Override
    @Transactional
    public void updateUserInfo(User userInfo) {
        User user = userRepository.findById(userInfo.getUserId()).orElse(null);
        user.setUserName(userInfo.getUserName());
        user.setUserAge(userInfo.getUserAge());
        userRepository.save(user);
    }

    /**
     * 설명 : 유저 정보 삭제
     * @param userId
     */
    @Override
    @Transactional
    public void deleteUserInfo(String userId) {
        userRepository.deleteById(userId);
    }
}
