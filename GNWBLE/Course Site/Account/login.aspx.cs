using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text.RegularExpressions;
using DAL;

namespace Course_Site.Account
{
    public partial class login1 : System.Web.UI.Page
    {
        DataProvider dp = DataProvider.GetInstance();

        List<role> list = new List<role>();
        List<role> r = new List<role>();
        staff s = new staff();

        bool invalid = false;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                LoadRoles();
            }
        }

        private void LoadRoles()
        {
            list = dp.GetUserRoles();

            if (list.Count > 0)
            {
                ListSitesByRole(list);

                ddlRole.DataSource = r;
                ddlRole.DataBind();
            }
            //TODO: else{} An error occured. Must be logged in database
        }

        private void ListSitesByRole(List<role> list)
        {
            foreach (role x in list)
            {
                if (IsSite(x))
                    r.Add(x);
            }
        }

        private bool IsSite(role x)
        {
            invalid = false;
            invalid = Regex.IsMatch(x.ToString(), @"^\w+$");

            return invalid;
        }        

        protected void btnSaveGUserInfo_Click(object sender, EventArgs e)
        {
            Session["name"] = txtGUserProfileName.Text;
            Session["email"] = txtGUserEmail.Text;
            Session["imgURL"] = txtGUserImgUrl.Text;
            Session["profileURL"] = txtGUserProfileUrl.Text;

            /*s = dp.GetUserRoleByEmailAddress(txtGUserEmail.Text);

            int role_id = int.Parse(s.role_id.ToString());
            RedirectUserAccordingToRole(role_id);*/
        }

        private void RedirectUserAccordingToRole(int r_id)
        {
            switch (r_id)
            {
                case 1:
                    Response.Redirect("default.aspx");
                    break;
                case 2:

                    break;
            }
        }
    }
}