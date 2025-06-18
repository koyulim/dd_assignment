<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <form action="/addUserInfo" method="post">
            userId:        <input type="text" name="userId" /><br/>
            userName:      <input type="text" name="userName" /><br/>
            userAge:       <input type="text" name="userAge" /><br/>
            <button type="submit">저장</button>
        </form>
    </body>
</html>