using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DAL;

namespace Course_Site
{
    public partial class library : System.Web.UI.Page
    {
        DataProvider dp = DataProvider.GetInstance();
        BindingList<libraryDictionary> ld = new BindingList<libraryDictionary>();


        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                LoadLibrary();
            }
        }

        private void LoadLibrary()
        {
            ld = dp.GetListOfAllModulesCoursesAndLessons();
            ltrLibraryList.Text = CreateTreeBody(); 
        }

        private string CreateTreeBody()
        {
            return "";
        }
    }

    /*public class libraryDictionary
    {
        private int id { get; set; }

        private string module_name { get; set; }

        private string course_name { get; set; }

        private List<lesson> listOfLessons { get; set; }
    }*/
}