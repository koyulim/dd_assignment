package introduction.spring_introduction.user.service;

import introduction.spring_introduction.user.entity.User;

import java.util.List;

public interface UserService {

    /**
     * 설명 : 유저 리스트 정보 조회
     * @return List<User>
     */
    List<User> getUserList();

    /**
     * 설명 : 유저 정보 저장
     * @param userInfo
     */
    void addUserInfo(User userInfo);

    /**
     * 설명 : 유저 정보 수정
     * @param userInfo
     */
    void updateUserInfo(User userInfo);

    /**
     * 설명 : 유저 정보 삭제
     * @param userId
     */
    void deleteUserInfo(String userId);
}
