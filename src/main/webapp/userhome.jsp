<%-- 
    Document   : userhome
    Created on : Oct 10, 2022, 2:22:38 AM
    Author     : Priya Yadav
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
   
<!DOCTYPE html>
<html>
    
<head>

    <title>User home</title>
    
    <meta charset="utf-8" />

    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/sidebar.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
	
	<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,700' rel='stylesheet' type='text/css'>
	
	<link rel='shortcut icon' type='image/x-icon' href='favicon.ico' />
	
    <script src="js/jquery-1.11.3.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jPushMenu.js"></script>
    <script src="js/counter.js"></script>
    <script src="js/jquery.scrollUp.min.js"></script>
    
    <script type="text/javascript">
		$(window).load(function() {
			$(".loader").fadeOut("slow");
		})
	</script>
    
    <meta name="viewport" content="width=device-width, initial-scale=1">

</head>

<body>

	<div class="loader"></div>
	
	<style>
	
	.loader {
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 9999;
	background: url('images/page-loader.gif') 50% 50% no-repeat rgb(249,249,249);
	}
	
	</style>
	
	<header>
	
		<div class="top-heading">
			<div class="container">
				<div class="contact-info pull-left">
					<a href="#"><span class="fa fa-phone"></span>+91 0731 1234 1234</a>
				</div>
				<ul class="social-icons pull-right">
					<li><a href="#" class="icon fa fa-facebook"></a></li>
					<li><a href="#" class="icon fa fa-twitter"></a></li>
					<li><a href="#" class="icon fa fa-pinterest-p"></a></li>
					<li><a href="#" class="icon fa fa fa-google-plus"></a></li>
				</ul>
			</div>
		</div>

        <nav class="navbar-default navbar-static-top" id="navbar-default" style="border-radius:0;">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle toggle-menu menu-left push-body" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                        <a class="navbar-brand" href=""></a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left" id="bs-example-navbar-collapse-1">
                    <!-----<ul class="nav navbar-nav">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="contact.html">Contact</a></li>
						<li><a href="clients.html">Sign-Up</a></li>
                    </ul>--->

                   <ul class="nav navbar-nav">
                         <li><a href="index.html"><span>Home</span></a></li>
                        <li><a href="pricingplan.html">Plans</a></li>
                        <li><a href="contact.html">Feedback</a></li>
			 <li><a href="clients.html">Sign-In</a></li>
                           
                    </ul>
                </div>
            </div>
        </nav>
        
        <style>
        
        	.navbar-default {
        		background: #f5f5f5;
        	}
        
        	.navbar-default .navbar-nav li a {
        		color: rgb(0, 0, 0);
        	}
        	
        	.navbar-default .navbar-toggle .icon-bar {
				background: #000;
			}
			
			.navbar-nav {
				float: right;
			}
			
			@media screen and (max-width: 768px) {
			.navbar-nav {
				float: left;
			}
			}
			
        
        </style>

        
    </header>
    
    
    <!---<div class="banner">
    	<div class="opacity_overlay">
    		<div class="info">
    			<h2>Welcome</h2>
                <hr>
                <div class="Get Started"></div>
    			<h3>We believe everyone deserves</h3>
    			<h3>The best resume</h3>
    		</div>
        </div>
    </div>--->
    
    <div class="container" id="div1">
        <h1 class="text-center "></h1>
    </div>
    <br>
    <div class="conatainer" id="div4">
        <h2 class="text-center"><b> Welcome<br><%=session.getAttribute("name")%></b></h2>
    </div>
    <div class="container" id="div2">
        <h1 class="text-center "></h1>
    </div>
    <center>
    <div class="container">
        <div class="button">
        </div>
    </div>
    <div class="container" id="div3">
        <h1 class="text-center "></h1>
    </div>
    <div class="container">
        <a href="services.html">
            <button class="btn btn-primary btn-lg">+ Create Now</button>
        </a>
    </div>

    </center>

    <style>

        body{
            background-image: url("images/img1.jpeg");
            background-repeat: no-repeat;
            background-size: 1600px 800px;
        }

        #div1{
            width: 300px;
            height: 160px;
        }
        #div2{
            width: 300px;
            height: 40px;
        }
        #div3{
            width: 300px;
            height: 35px;
        }
        #div4{
            background-size: 10px;
            color:#3E0C01;
        }

        
        .button
        {
            width: 500px;
            height: 100px;
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items:center;
            box-shadow: 10px 10px 15px rgba(0,0,0,0.3);
        }

        .button:before
        {
            content:"";
            width: 550px;
            height: 60px;
            background-image: linear-gradient(to left,rgb(0,0,0),rgb(255,255,255) );
            position: absolute;
            animation: rotate 4s infinite;
        }
        .button:after
        {
            content: "Create My Resume";
            width: 490px;
            height: 90px;
            background-color: #007497 ;
            position: absolute;
            font-size: 30px;
            color:white;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        @keyframes rotate{
            0%{
                transform: rotate(0deg);
            }
            100%{
                transform: rotate(360deg);
            }
        }

    </style>

    
    
    <script type="text/javascript">
    
    $(function () {
  		$.scrollUp({
    		scrollName: 'scrollUp', // Element ID
    		topDistance: '300', // Distance from top before showing element (px)
    		topSpeed: 600, // Speed back to top (ms)
    		animation: 'fade', // Fade, slide, none
    		animationInSpeed: 200, // Animation in speed (ms)
    		animationOutSpeed: 200, // Animation out speed (ms)
    		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    		scrollImg: true,
  		});
	});
    
    </script>
</body>  
    
</html>
