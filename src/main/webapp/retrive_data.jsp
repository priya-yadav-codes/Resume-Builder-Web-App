<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<html>
    <head>
        <title>retrive </title>
          <link rel="stylesheet" href="data_retrive.css">
    </head>
    <body> 
<div class="container" id="divtab">
    
<%
String id = request.getParameter("id");
String driver = "com.mysql.jdbc.Driver";
String Url = "jdbc:mysql://localhost:3306/resumeBuilder";
String user = "root";
String password = "MySQL@priya123";

try {
Class.forName(driver);
} catch (ClassNotFoundException e) {
e.printStackTrace();
}

Connection connection = null;
Statement statement = null;
ResultSet resultSet = null;
%>
<center> 
    <h1><b><i>Data of all the users</i></b></h1><br><br>
</center>
<table align="center" border="1">
<tr>

</tr>
<tr bgcolor="white">
<center> 
    <td><b>Id</b></td>
    <td><b>Name</b></td>
    <td><b>Email</b></td> 
    <td><b>Password</b></td> 
    <td><b>Username</b></td>
    <td><b>Mobile</b></td>
            <td><b>Type</b></td>
    </center>
</tr>
<%
try{ 
connection = DriverManager.getConnection(Url, user, password);
statement=connection.createStatement();
String sql ="SELECT * FROM user";

resultSet = statement.executeQuery(sql);
while(resultSet.next()){
%>
<tr bgcolor="white">

 <td><%= resultSet.getInt("id")%></td>
 <td><%= resultSet.getString("name")%></td>
 <td><%= resultSet.getString("email")%></td>
 <td><%= resultSet.getString("password")%></td>
 <td><%= resultSet.getString("username")%></td>
 <td><%= resultSet.getString("mobile")%></td>
 <td><%= resultSet.getInt("type")%></td>
</tr>

<% 
}

} catch (Exception e) {
e.printStackTrace();
}
%>

</div>
</table>
</body>
</html>