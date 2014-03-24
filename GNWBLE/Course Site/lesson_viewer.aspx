<%@ Page Title="" Language="C#" MasterPageFile="~/Template.Master" AutoEventWireup="true" CodeBehind="lesson_viewer.aspx.cs" Inherits="Course_Site.lesson_viewer_text" %>
<asp:Content ID="Content4" ContentPlaceHolderID="title" runat="server">
    Lesson | GNWBLE
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="scripts" runat="server">
    <link type="text/css" rel="stylesheet" href="css/calendarview.css" />
    <script type="text/javascript" src="js/pdfObject.js"></script>
    <script type="text/javascript">
        var params;

        function SetParams(_pdfURL) {
            params = {
                url: _pdfURL,

                pdfOpenParams: {
                    navpanes: 0,
                    toolbar: 0,
                    statusbar: 0,
                    view: "FitV"
                }
            };
        };

        window.onload = function () {
            var x = document.getElementById("main_content_txtLessonFileName");
            var pdfURL = "lesson/" + x.value;

            SetParams(pdfURL);

            var myPDF = new PDFObject(params).embed("LessonDisplayDiv");
        };

        function DisplayPreviousLesson() {


            var myPDF = new PDFObject(params).embed("LessonDisplayDiv");
        }

        function DisplayNextLesson() {
            //btnLessonViewChanged
            var x = document.getElementById("main_content_txtNextLessonFileName");
            var pdfURL = "lesson/" + x.value;

            SetParams(pdfURL);
            UpdateLessonFileLocationPositions();

            var myPDF = new PDFObject(params).embed("LessonDisplayDiv");
        }

        function UpdateLessonFileLocationPositions() {
            var _pfl = document.getElementById("main_content_txtPreviousLessonFileName");
            var _fl = document.getElementById("main_content_txtLessonFileName");
            var _nfl = document.getElementById("main_content_txtNextLessonFileName");

            _pfl.value = _fl.value;
            _fl.value = _nfl.value;
            _nfl.value = "works to this point";

            document.getElementById("main_content_btnLessonViewChanged").click();
        }
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="calendar_noticeBoard_container" runat="server">
    <div id="embeddedExample">
	    <div id="embeddedCalendar"></div>
    </div>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="main_nav_bar" runat="server">
    <li><a href="default.aspx">Dashboard</a></li>
	<li class="active"><a href="course_list.aspx">Courses</a></li>
	<li><a href="library.aspx">Library</a></li>
	<li><a href="results.aspx">Achievements</a></li>
	<li><a href="reminder.aspx">Reminders</a></li>
	<li><div id='cse' style='width: 100%;'>Loading...</div></li>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="main_content" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <div id="mainContent">
        <div class="left" id="lessons_list">
 		    <ul>
 			    <li id="course_title">
                     <asp:Label ID="lblCourseTitle" runat="server" Text="Label"></asp:Label>
 			    </li>
                <li class="line"></li>
            </ul>
            <ul id="lessons_item_list">
                <asp:Literal ID="ltrLessonList" runat="server"></asp:Literal>
 		    </ul>
            <asp:GridView ID="GridView1" runat="server"></asp:GridView>
 	    </div>
 	    <div class="right" id="lesson_view">
            <asp:UpdatePanel ID="UpdatePanel2" runat="server" >
                <ContentTemplate>
                     <ul class="top">
                        <li class="left">
                            <asp:HyperLink ID="hl1" runat="server" onclick="GetPreviousLesson();"><span class="lesson_nav nleft"></span></asp:HyperLink>
                            <asp:HyperLink ID="hl2" runat="server" onclick="GetPreviousLesson();">previous lesson</asp:HyperLink>
                        </li>
                        <li class="right">
                            <a href="" onclick="GetNextLesson();"><span class="lesson_nav nright"></span></a>
                            <a href="" onclick="GetNextLesson();">next lesson</a>
                        </li>
                    </ul>
                    <div id="LessonDisplayDiv">
                        <p>It appears you don't have a PDF plugin for this browser.
                            No biggie... you can <a href="myfile.pdf">click here to
                            download the PDF file.</a>
                        </p>
                    </div> 
                    <ul class="bottom">
                        <li class="left"><a href="#"><span class="lesson_nav nleft" onclick="GetPreviousLesson();"></span>previous lesson</a></li>
                        <li class="right"><a href="#"><span class="lesson_nav nright" onclick="GetNextLesson();"></span>next lesson</a></li>
                    </ul>
                </ContentTemplate>
            </asp:UpdatePanel>
        </div>
    </div>
    <asp:TextBox ID="txtPreviousLessonFileName" runat="server" CssClass="hi-de"></asp:TextBox>
    <asp:TextBox ID="txtLessonFileName" runat="server" CssClass="hi-de"></asp:TextBox>
    <asp:TextBox ID="txtNextLessonFileName" runat="server" CssClass="hi-de"></asp:TextBox>
    <asp:TextBox ID="txtButtonClickedMsg" runat="server"></asp:TextBox>
    <asp:Button ID="btnLessonViewChanged" runat="server" Text="Button" OnClick="btnLessonViewChanged_Click" CssClass="hi-de" />
</asp:Content>
