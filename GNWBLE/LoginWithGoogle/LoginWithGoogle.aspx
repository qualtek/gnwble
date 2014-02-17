<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="LoginWithGoogle.aspx.cs" Inherits="LoginWithGoogle.LoginWithGoogle" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Login With google using asp.net application</title>
   
</head>
<body>
    <form id="form1" runat="server">
        <div>
            
            <h1>Login With google using asp.net application</h1>
                <br />
                    <a href="#" class="button"  id="A1"
                                      onclick="OpenGoogleLoginPopup();" name="butrequest"> <span>Login with google</span></a>
            <br />
            <table>
                <tr>
                    <td>Google ID</td>
                    <td><%=Google_ID%></td>
                 </tr>
                 <tr>
                    <td>Email/user name</td>
                    <td><%=Email_address%></td>
                 </tr>
                 <tr>
                    <td>first name</td>
                    <td><%=firstName%></td>
                 </tr>
                 <tr>
                    <td>Last name</td>
                    <td><%=LastName%></td>
                 </tr>
            </table>
        </div>
    </form>
    <script type="text/javascript" language="javascript">


        function OpenGoogleLoginPopup() {

            var url = "https://accounts.google.com/o/oauth2/auth?";
            url += "scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&";
            url += "state=%2Fprofile&"
            url += "redirect_uri=<%=Return_url %>&"
            url += "response_type=token&"
            url += "client_id=<%=Client_ID %>";

            window.location = url;
        }


    </script>
</body>
    
</html>

