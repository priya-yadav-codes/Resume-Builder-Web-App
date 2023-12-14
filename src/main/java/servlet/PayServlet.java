/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package servlet;


import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/PayServlet")
public class PayServlet extends HttpServlet{
	
	//create the query
	private static final String INSERT_QUERY ="INSERT INTO pay(cno,cname,expirem,expirey,cvv,amount) VALUES(?,?,?,?,?,?)";
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		//get PrintWriter
		PrintWriter pw = res.getWriter();
		//set Content type
		res.setContentType("text/hmtl");
		//read the form values
		String cno = req.getParameter("cno");
		String cname = req.getParameter("cname");
		String expirem = req.getParameter("expirem");
		String expirey = req.getParameter("expirey");
                String cvv = req.getParameter("cvv");
                String amount = req.getParameter("amt");
                
               
		
		//load the jdbc driver
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace(); 
		}
		//create the connection
		try(Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/resumebuilder","root","MySQL@priya123");
				PreparedStatement ps = con.prepareStatement(INSERT_QUERY);){
			//set the values
			ps.setString(1, cno);
			ps.setString(2, cname);
			ps.setString(3,expirem );
			ps.setString(4, expirey);
                        ps.setString(5, cvv);
                        ps.setString(6, amount);
			
			//execute the query
			int count = ps.executeUpdate();
			
			if(count==0) { 
				pw.println("Record not stored into database");
			}else {
				  res.sendRedirect("thanks.html"); 
			}
		}catch(SQLException se) {
			pw.println(se.getMessage());
			se.printStackTrace();
		}catch(Exception e) {
			pw.println(e.getMessage());
			e.printStackTrace();
		}
		
		//close the stream
		pw.close();
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(req, resp);
	}
}