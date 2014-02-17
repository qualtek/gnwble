using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.ComponentModel;
using DAL;

namespace Course_Site
{
    public partial class course : System.Web.UI.Page
    {
        DataProvider dp = DataProvider.GetInstance();
        BindingList<CourseList> list = new BindingList<CourseList>();

        int staff_id = 0;

        protected void Page_Load(object sender, EventArgs e)
        {
            //staff_id = int.Parse(Session["user_id"].ToString());
            staff_id = 2;

            if (!IsPostBack)
            {
                ListAssignedCourses();
            }
        }

        private void ListAssignedCourses()
        {
            list = dp.ListAssignedCoursesByUser(staff_id);
            
            resultTable.DataSource = null;
            resultTable.DataSource = list;

            resultTable.DataBind();            
        }
    }
}