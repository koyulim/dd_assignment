<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <form action="/updateUserInfo" method="post">
            userId: <input type="text" value="${user.userId}" disabled /><br/>
            <input type="hidden" name="userId" value="${user.userId}" />
            userName: <input type="text" name="userName" value="${user.userName}" /><br/>
            userAge: <input type="text" name="userAge" value="${user.userAge}" /><br/>
            <button type="submit">저장</button>
        </form>
    </body>
</html>