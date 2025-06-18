package introduction.spring_introduction.user.controller;

import introduction.spring_introduction.user.entity.User;
import introduction.spring_introduction.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    /**
     * 설명 : 유저 리스트 정보 조회
     * @param model
     * @return "users"
     */
    @RequestMapping("/users")
    public String getUserList(Model model) {
        List<User> userList = userService.getUserList();
        model.addAttribute("userList", userList);
        return "users";
    }

    /**
     * 설명 : 유저 정보 입력폼
     * @return "new-form"
     */
    @RequestMapping("/new-form")
    public String newForm() {
        return "new-form";
    }

    /**
     * 설명 : 유저 정보 수정폼
     * @param user
     * @param model
     * @return "udp-form"
     */
    @RequestMapping("/udp-form")
    public String udpForm(User user, Model model) {
        model.addAttribute("user", user);
        return "udp-form";
    }

    /**
     * 설명 : 유저 정보 저장
     * @param userInfo
     * @return "users"
     */
    @PostMapping("/addUserInfo")
    public String addUserInfo(User userInfo) {
        userService.addUserInfo(userInfo);
        return "redirect:users";
    }

    /**
     * 설명 : 유저 정보 수정
     * @param userInfo
     * @return "users"
     */
    @PostMapping("/updateUserInfo")
    public String updateUserInfo(User userInfo) {
        userService.updateUserInfo(userInfo);
        return "redirect:users";
    }

    /**
     * 설명 : 유저 정보 삭제
     * @param userId
     * @return "users"
     */
    @PostMapping("deleteUserInfo")
    public String deleteUserInfo(@RequestParam("userId") String userId) {
        userService.deleteUserInfo(userId);
        return "redirect:users";
    }
}
