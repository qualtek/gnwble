﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LoginWithGoogle
{
    public partial class LoginWithGoogle1 : System.Web.UI.Page
    {
        public string sCall = "var kk;";
        public string sToken = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.QueryString["access_token"] != null)
            {
                sCall = "callUserInfor();";
                sToken = Request.QueryString["access_token"].ToString();
            }

        }
    }
}