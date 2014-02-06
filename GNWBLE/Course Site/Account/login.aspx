<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="Course_Site.Account.login" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<link type="text/css" rel="stylesheet" href="../css/style.css" />
<link type="text/css" rel="stylesheet" href="../css/login.css" />
<link type="text/css" rel="stylesheet" href="../css/typography.css" />

<link href='http://fonts.googleapis.com/css?family=Open+Sans:300,600' rel='stylesheet' type='text/css' />
<title>GNWBLE</title>
</head>

<body>
    <form runat="server">
	<div id="logo" class="login_logo">
		<img alt="GN Logo" src="../images/gnlogo.jpg" />
		<p>Web based learning<br/><span>environment</span></p>
	</div>
	<div id="login">
		<h5>Login</h5>
		<label>username</label><asp:TextBox ID="txtUsername" runat="server"></asp:TextBox>
		<label>password</label><asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox>
		<asp:Button ID="btnSignIn" runat="server" Text="Sign In" CssClass="button" />
		<div id="login_footer">
			<a href="#" class="left">You don't have an account? Click here to register.</a>
			<a href="#" class="right">Forgot your password?</a>
		</div>
	</div>
    </form>
</body>

</html>

