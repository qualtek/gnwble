using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Course_Site
{
    public partial class course : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                ListAssignedCourses();
            }
        }

        private void ListAssignedCourses()
        {
            
            
            resultTable.DataSource = null;
            //resultTable.DataSource = ListAssignedCoursesByUser();
        }
    }
}