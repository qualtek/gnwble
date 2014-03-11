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
        <asp:ScriptManager EnablePageMethods="true" ID="ScriptManager1" runat="server" ScriptMode="Release" LoadScriptsBeforeUI="true"></asp:ScriptManager>
    <div id="logo" class="login_logo">
		<img alt="GN Logo" src="../images/gnlogo.jpg" />
		<p>Web based learning<br/><span>environment</span></p>
	</div>
    <div id="login_header">
        <div class="error_msg">
            <p>You have either been denied access to GNWBLE or you could not be automatically logged in at this time. Please contact your system administrator for assistance.</p>
        </div>
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
            <img src="#" alt="Google Login image" />
		    <span id="signinButton">
              <span class="g-signin"
					data-callback="signinCallback"
					data-clientid="764368009982-jn348rmjcj2qvsfrmf7jm0223kq6ilih.apps.googleusercontent.com"
					data-cookiepolicy="single_host_origin"
					data-scope="https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email"
                  'hd=domain.com'
					data-theme="light"
                    data-height="standard"
					data-width="wide">
              </span>
            </span>
            <asp:DropDownList ID="ddlRole" runat="server" DataTextField="name" DataValueField="id"></asp:DropDownList>
	    </div>
        <asp:TextBox ID="txtGUserProfileName" runat="server" CssClass="hid.den"></asp:TextBox>
        <asp:TextBox ID="txtGUserEmail" runat="server" CssClass="hid.den"></asp:TextBox>
        <asp:TextBox ID="txtGUserImgUrl" runat="server" CssClass="hid.den"></asp:TextBox>
        <asp:TextBox ID="txtGUserProfileUrl" runat="server" CssClass="hid.den"></asp:TextBox>
        <asp:Button ID="btnSaveGUserInfo" runat="server" Text="Button" CssClass="hid.den" OnClick="btnSaveGUserInfo_Click" />
    </div>
    </form>
    <link href="http://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
    <script type="text/javascript">
        var profile, email;

        (function () {
            var po = document.createElement('script');
            po.type = 'text/javascript'; po.async = true;
            po.src = 'https://apis.google.com/js/client:plusone.js?onload=render';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(po, s);
        })();

        /*
        * Triggered when the user accepts the sign in, cancels, or closes the
        * authorization dialog.
        */
        function signinCallback(authResult) {
            if (authResult) {
                if (authResult['code']) {
                    gapi.client.load('plus', 'v1', loadProfile);  // Trigger request to get the email address.
                    //window.location.replace("http://localhost:4643/default.aspx");

                    //else condition: document.getElementById('errorMsg').setAttribute('style', 'display: block');
                } else if (authResult['error']) {
                    alert("An error occurred: " + authResult['error']);

                }
            } else {
                alert("Empty authResult: " + authResult['error']); // Something went wrong

            }
        }

        /*
        * Uses the JavaScript API to request the user's profile, which includes
        * their basic information. When the plus.profile.emails.read scope is
        * requested, the response will also include the user's primary email address
        * and any other email addresses that the user made public.
        */
        function loadProfile() {
            var request = gapi.client.plus.people.get({ 'userId': 'me' });
            if (request) {
                request.execute(loadProfileCallback);
            }
            else
                alert("User profile was not retrieved");
        }

        /*
        * Callback for the asynchronous request to the people.get method. The profile
        * and email are set to global variables. Triggers the user's basic profile
        * to display when called.
        */
        function loadProfileCallback(obj) {
            profile = obj;
            clearTimeout()
            // Filter the emails object to find the user's primary account, which might
            // not always be the first in the array. The filter() method supports IE9+.
            email = obj['emails'].filter(function (v) {
                return v.type === 'account'; // Filter out the primary email
            })[0].value; // get the email from the filtered results, should always be defined.

            document.getElementById('txtGUserProfileName').value = profile['displayName'].toString();

            document.getElementById('txtGUserEmail').value = email;

            document.getElementById('txtGUserImgUrl').value = profile['image']['url'].toString();

            document.getElementById('txtGUserProfileUrl').value = profile['url'].toString();

            //setTimeout(document.getElementById('btnSaveGUserInfo').click(), 3000);
            document.getElementById('btnSaveGUserInfo').click();
            clearTimeout()
            //storeProfile(profile, email);
        }

        /*function storeProfile(profile, email) {
            alert(profile.length);
            if (profile != null) {
                request.execute(function (profile) {
                    request.session().attribute('name', profile['displayName']);
                    alert('Session contains ' + request.session('name'));
                    request.session().attribute("email", email);
                    request.session().attribute("imgURL", profile['image']['url']);
                    request.session().attribute("profileURL", profile['url']);
                    alert('Session contains ' + request.session.length + 'items');
                });
            }
            else
                alert('Profile.client == null' + profile.displayName.toString());
        }*/
    </script>
</body>
</html>
