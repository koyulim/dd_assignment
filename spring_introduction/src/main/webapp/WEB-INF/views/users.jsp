<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <a href="/index.html">메인</a>
        <table>
            <thead>
                <th>userId</th>
                <th>userName</th>
                <th>userAge</th>
            </thead>
            <tbody>
                <c:forEach var="item" items="${userList}">
                    <tr>
                        <td>${item.userId}</td>
                        <td>${item.userName}</td>
                        <td>${item.userAge}</td>
                        <td>
                            <form action="/udp-form" method="post">
                                <input type="hidden" name="userId" value="${item.userId}"/>
                                <input type="hidden" name="userName" value="${item.userName}"/>
                                <input type="hidden" name="userAge" value="${item.userAge}"/>
                                <button type="submit">수정</button>
                            </form>
                        </td>
                        <td>
                            <form action="/deleteUserInfo" method="post">
                                <input type="hidden" name="userId" value="${item.userId}"/>
                                <button type="submit">삭제</button>
                            </form>
                        </td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
        <a href="/new-form">
            <button type="button">회원가입</button>
        </a>
    </body>
</html>