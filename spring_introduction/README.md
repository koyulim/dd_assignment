# dd_assignment
KAKAO X GOORM DEEP DIVE_ASSIGNMENT

### 프로젝트 구조
src/main/java/introduction/spring_introduction/
- aop : AOP 테스트
- hello : RestController 테스트("Hello, World" 반환)
- user : 회원정보 관리

src/main/webapp/WEB-INF/views/
- user : 회원정보 리스트 & 회원정보 삭제
- new-form : 회원정보 생성
- udp-form : 회원정보 수정

### RestController 테스트
- Hello, World 테스트
- helloController.java

![hello.png](img/hello.png)

### 회원 정보 관리 디렉토리 구조
- controller : 컨트롤러
  - UserController.java
- entity : 회원정보
  - User.java
- repository : JPA 연결
  - UserRepository.java
- service : 비즈니스 로직
  - UserService.java
  - UserServiceImpl.java

[회원 정보 조회]  
![get.png](img/get.png)  
![get2.png](img/get2.png)  

[회원 정보 저장]  
![add.png](img/add.png)  
![add2.png](img/add2.png)  
![add3.png](img/add3.png)  

[회원 정보 수정]  
![udt.png](img/udt.png)  
![udt2.png](img/udt2.png)  
![udt3.png](img/udt3.png)  

[회원 정보 삭제]  
![get.png](img/get.png)  
![get2.png](img/get2.png)  

### AOP 테스트
![aop.png](img/aop.png)




