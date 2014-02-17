﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Net;
using System.Linq;
using System.Text;
using System.Data;
using System.Configuration;


namespace LoginWithGoogle
{
    public partial class LoginWithGoogle : System.Web.UI.Page
    {
      public  string Email_address = "";
      public string Google_ID = "";
      public string firstName = "";
      public string LastName = "";
      public string Client_ID = "";
      public string Return_url = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!this.IsPostBack)
            {

                Client_ID = ConfigurationSettings.AppSettings["google_clientId"].ToString();
                Return_url = ConfigurationSettings.AppSettings["google_RedirectUrl"].ToString();

            }
            if (Request.QueryString["access_token"] != null)
            {

                String URI = "https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + Request.QueryString["access_token"].ToString();

                WebClient webClient = new WebClient();
                Stream stream = webClient.OpenRead(URI);
                string  b;

                /*I have not used any JSON parser because I do not want to use any extra dll/3rd party dll*/
                using (StreamReader br = new StreamReader(stream))
                {
                    b = br.ReadToEnd();
                }
                
                b = b.Replace("id", "").Replace("email", "");
                b = b.Replace("given_name", "");
                b = b.Replace("family_name", "").Replace("link", "").Replace("picture", "");
                b = b.Replace("gender", "").Replace("locale", "").Replace(":", "");
                b = b.Replace("\"", "").Replace("name", "").Replace("{", "").Replace("}", "");

                /*
                 
                "id": "109124950535374******"
                  "email": "usernamil@gmail.com"
                  "verified_email": true
                  "name": "firstname lastname"
                  "given_name": "firstname"
                  "family_name": "lastname"
                  "link": "https://plus.google.com/10912495053537********"
                  "picture": "https://lh3.googleusercontent.com/......./photo.jpg"
                  "gender": "male"
                  "locale": "en" } 
               */

                Array ar = b.Split(",".ToCharArray());
                for (int p = 0; p < ar.Length; p++)
                {
                    ar.SetValue(ar.GetValue(p).ToString().Trim(), p);

                }
                Email_address = ar.GetValue(1).ToString();
                Google_ID = ar.GetValue(0).ToString();
                firstName = ar.GetValue(4).ToString();
                LastName = ar.GetValue(5).ToString();               

              


            }



        }
       
    }
   
}