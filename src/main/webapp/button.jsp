<%-- 
    Document   : button
    Created on : Nov 2, 2022, 2:43:33 AM
    Author     : Priya Yadav
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <button><%=session.getAttribute("name")%></button>
        <a href="Logout"><button>Logout</button></a> 
    </body>
</html>
