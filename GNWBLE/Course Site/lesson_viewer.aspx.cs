using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Globalization;
using System.IO;
using System.Text;
using DAL;

namespace Course_Site
{
    public partial class lesson_viewer_text : System.Web.UI.Page
    {
        DataProvider dp = DataProvider.GetInstance();

        course_progress cp = new course_progress();
        static List<lesson> l = new List<lesson>();
        lesson _lesson = new lesson();
        course cs = new course();
        int course_id = 1;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                LoadCourseTitle();
                LoadLessonList();
                GetFirstLesson();
            }
        }

        private void GetFirstLesson()
        {
            //LoadScript();
            
            int i = 0;
            if (l.Count > 0)
            {
                _lesson = l[i];
                txtLessonFileName.Text = _lesson.file_name;

                GetNextLesson(i);
            }
        }

        private void LoadScript()
        {
            // Define the name and type of the client scripts on the page.
            String csname1 = "LoadLessonScript";
            Type cstype = this.GetType();

            // Get a ClientScriptManager reference from the Page class.
            ClientScriptManager cs = Page.ClientScript;

            // Check to see if the startup script is already registered.
            if (!cs.IsStartupScriptRegistered(cstype, csname1))
            {
                StringBuilder cstext1 = new StringBuilder();
                cstext1.Append("<script type=text/javascript> var params; function SetParams(_pdfURL) {params = {url: _pdfURL,pdfOpenParams: {navpanes: 0,toolbar: 0,statusbar: 0,view: 'FitV' }};};window.onload = function () {var x = document.getElementById('main_content_txtLessonFileName');var pdfURL = 'lesson/' + x.value;SetParams(pdfURL);var myPDF = new PDFObject(params).embed('LessonDisplayDiv');};function DisplayPreviousLesson(){var myPDF = new PDFObject(params).embed('LessonDisplayDiv');}function DisplayNextLesson() {var x = document.getElementById('main_content_txtNextLessonFileName');var pdfURL = 'lesson/' + x.value;SetParams(pdfURL);UpdateLessonFileLocationPositions();var myPDF = new PDFObject(params).embed('LessonDisplayDiv');}function UpdateLessonFileLocationPositions() {var _pfl = document.getElementById('main_content_txtPreviousLessonFileName');var _fl = document.getElementById('main_content_txtLessonFileName');var _nfl = document.getElementById('main_content_txtNextLessonFileName');_pfl.value = _fl.value;_fl.value = _nfl.value;document.getElementById('main_content_btnLessonViewChanged').click();} </");
                cstext1.Append("script>");

                cs.RegisterStartupScript(cstype, csname1, cstext1.ToString());
            }
        }

        private void GetPreviousLesson(int lesson_Position)
        {
            _lesson = l[lesson_Position - 1];
            txtPreviousLessonFileName.Text = _lesson.file_name;
        }

        private void GetNextLesson(int lesson_Position)
        {
            _lesson = l[lesson_Position + 1];
            txtNextLessonFileName.Text = _lesson.file_name;
        }

        private void LoadLessonList()
        {
            l = dp.ListLessonsByCourseId(course_id);

            if (l.Count > 0)
            {
                ltrLessonList.Text = BuildHTMLCodeForLessons(l);
            }
        }

        private string BuildHTMLCodeForLessons(List<lesson> listOfLessons)
        {
            // Initialize StringWriter instance.
            StringWriter stringWriter = new StringWriter();

            // Put HtmlTextWriter in using block because it needs to call Dispose.
            using (HtmlTextWriter writer = new HtmlTextWriter(stringWriter))
            {
                // Some strings for the attributes.
                string _li = "lesson_icon";
                string _ti = "test_icon";
                string _lt = "lesson_text";
                string _lc = "lesson_complete";
                string _lc_show = "lesson_complete show";
                string _lb = "line_bottom";
                string _ts = "test_style";

                // Loop over some strings.
                foreach (lesson _lesson in listOfLessons)
                {
                    writer.RenderBeginTag(HtmlTextWriterTag.Li);
                    writer.RenderBeginTag(HtmlTextWriterTag.Ul);

                    writer.AddAttribute(HtmlTextWriterAttribute.Class, _li);
                    writer.RenderBeginTag(HtmlTextWriterTag.Li);
                    writer.RenderEndTag();

                    writer.AddAttribute(HtmlTextWriterAttribute.Class, _lt);
                    writer.RenderBeginTag(HtmlTextWriterTag.Li);

                        writer.RenderBeginTag(HtmlTextWriterTag.H6);
                        writer.Write(_lesson.name);
                        writer.RenderEndTag();

                        writer.RenderBeginTag(HtmlTextWriterTag.P);
                        writer.Write(_lesson.sub_title);
                        writer.RenderEndTag();

                    writer.RenderEndTag();

                    if (IsCompleted(_lesson))
                    {
                        writer.AddAttribute(HtmlTextWriterAttribute.Class, _lc_show);
                        writer.RenderBeginTag(HtmlTextWriterTag.Li);
                        writer.RenderEndTag();
                    }
                    else
                    {
                        writer.AddAttribute(HtmlTextWriterAttribute.Class, _lc);
                        writer.RenderBeginTag(HtmlTextWriterTag.Li);
                        writer.RenderEndTag();
                    }

                    writer.RenderEndTag();
                    writer.RenderEndTag();
                }
                writer.AddAttribute(HtmlTextWriterAttribute.Class, _lb);
                writer.RenderBeginTag(HtmlTextWriterTag.Li);
                writer.RenderEndTag();

                writer.RenderBeginTag(HtmlTextWriterTag.Li);
                writer.AddAttribute(HtmlTextWriterAttribute.Class, _ts);
                writer.RenderBeginTag(HtmlTextWriterTag.Ul);

                writer.AddAttribute(HtmlTextWriterAttribute.Class, _ti);
                writer.RenderBeginTag(HtmlTextWriterTag.Li);
                writer.RenderEndTag();

                writer.AddAttribute(HtmlTextWriterAttribute.Class, _lt);
                writer.RenderBeginTag(HtmlTextWriterTag.Li);

                    writer.RenderBeginTag(HtmlTextWriterTag.H6);
                    writer.Write("Test");
                    writer.RenderEndTag();

                writer.RenderEndTag();

                writer.AddAttribute(HtmlTextWriterAttribute.Class, _lc);
                writer.RenderBeginTag(HtmlTextWriterTag.Li);
                writer.RenderEndTag();

                writer.RenderEndTag();
                writer.RenderEndTag();
            }
            // Return the result.
            return stringWriter.ToString();
	        
        }

        private bool IsCompleted(lesson _l)
        {
            bool _isComplete = false;
            int id = int.Parse(_l.course_id.ToString());
            
            cp = dp.GetCourseProgressByCourseId(id);

            _isComplete = CheckLessonIdByCourseProgress(cp, _l);

            return _isComplete;
        }

        private bool CheckLessonIdByCourseProgress(course_progress cp, lesson _l)
        {
            List<int> list = new List<int>();
            bool _IsPresent = false;

            char[] delimiterChars = {','};

            string text = cp.lessons_completed.ToString();
            string[] words = text.Split(delimiterChars);

            foreach (string s in words)
            {
                if (s == _l.id.ToString())
                    _IsPresent = true;
            }
            return _IsPresent;
        }

        private void LoadCourseTitle()
        {
            TextInfo myTI = new CultureInfo("en-US", false).TextInfo;

            cs = dp.GetCourseTitleById(course_id);

            if (cs != null)
            {
                lblCourseTitle.Text = myTI.ToTitleCase(cs.name);
            }
        }

        protected void btnLessonViewChanged_Click(object sender, EventArgs e)
        {
            /*string current_lesson = "";
            current_lesson = txtLessonFileName.Text;
            
            if (current_lesson != null)
            {
                for (int i = 0; i < l.Count; i++)
                {
                    string ln = "";
                    ln = l[i].name;

                    if (current_lesson == ln)
                    {
                        txtNextLessonFileName.Text = l[i++].name;
                    }
                }
            }*/
            txtButtonClickedMsg.Text = "Button txtButtonClickedMsg!";
        }
    }
}