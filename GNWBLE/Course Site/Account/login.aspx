<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="Course_Site.Account.login1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <link type="text/css" rel="stylesheet" href="../css/style.css" />
    <link type="text/css" rel="stylesheet" href="../css/login.css" />
    <link type="text/css" rel="stylesheet" href="../css/typography.css" />

    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,600' rel='stylesheet' type='text/css' />
    <title>Login | GNWBLE</title>
</head>
<body>
    <form id="form1" runat="server">
    <div id="logo" class="login_logo">
		<img alt="GN Logo" src="../images/gnlogo.jpg" />
		<p>Web based learning<br/><span>environment</span></p>
	</div>
    <div id="login_header">
        <h6>Sign in with Google+</h6>
        <p>Welcome to the Groupe Nduom Web based learning environment.</p>
    </div>
    <div id="login_container">
        <div class="login left small_text">
            To sign in, click on the button to the right and enter the username and password you use to login to your Groupe Nduom email account.
            <br /><br /> By logging in with Google, you are giving us access to your Google profile. This helps us create a customized environment for you.
        </div>
        <img class="login_divider" src="../images/login_divider.png" alt="divider" />
	    <div class="login right">
            <img src="" alt="Google Login image" />
		    <div id="gSignInWrapper">
                <div id="customBtn" class="customGPlusSignIn">
                    <span class="icon"></span>
                    <span class="buttonText">Sign in with Google</span>
                </div>
            </div>
	    </div>
    </div>
    </form>
    <link href="http://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
    <script type="text/javascript">
        (function () {
            var po = document.createElement('script');
            po.type = 'text/javascript'; po.async = true;
            po.src = 'https://apis.google.com/js/client:plusone.js?onload=render';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(po, s);
        })();

        function render() {
            gapi.signin.render('customBtn', {
                //'callback': 'signinCallback',
                'clientid': '764368009982-jn348rmjcj2qvsfrmf7jm0223kq6ilih.apps.googleusercontent.com',
                'cookiepolicy': 'single_host_origin',
                'requestvisibleactions': 'http://schemas.google.com/AddActivity',
                'scope': 'https://www.googleapis.com/auth/plus.login'
            });
        }
    </script>
</body>
</html>
