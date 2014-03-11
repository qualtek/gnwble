using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Course_Site
{
    public partial class _default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Session.Count > 0)
                {
                    google_user gu = new google_user();

                    gu.displayName = Session["name"].ToString();
                    gu.emailAddress = Session["email"].ToString();
                    gu.image_url = Session["imgURL"].ToString();
                    gu.profile_url = Session["profileURL"].ToString();
                }
                else
                {
                    //Response.Redirect("Account/login.aspx");
                }
            }
        }

        private class google_user
        {
            public string id { get; set; }

            public string displayName { get; set; }

            public string emailAddress { get; set; }

            public string image_url { get; set; }

            public string profile_url { get; set; }
        }
    }
}