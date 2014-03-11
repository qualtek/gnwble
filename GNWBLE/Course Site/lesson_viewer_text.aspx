<%@ Page Title="" Language="C#" MasterPageFile="~/Template.Master" AutoEventWireup="true" CodeBehind="lesson_viewer_text.aspx.cs" Inherits="Course_Site.lesson_viewer_text" %>
<asp:Content ID="Content4" ContentPlaceHolderID="title" runat="server">
    Lesson | GNWBLE
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="scripts" runat="server">
    <link type="text/css" rel="stylesheet" href="css/calendarview.css" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="calendar_noticeBoard_container" runat="server">
    <div id="embeddedExample">
	    <div id="embeddedCalendar"></div>
    </div>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="main_nav_bar" runat="server">
    <li><a href="default.html">Dashboard</a></li>
	<li class="active"><a href="course.aspx">Courses</a></li>
	<li><a href="library.aspx">Library</a></li>
	<li><a href="results.aspx">Achievements</a></li>
	<li><a href="reminder.aspx">Reminders</a></li>
	<li><div id='cse' style='width: 100%;'>Loading...</div></li>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="main_content" runat="server">
    <div id="mainContent" class="float_tag">
        <div class="left" id="lessons_list">
 		    <ul>
 			    <li id="course_title">Microsoft Office 2007 Suite</li>
 			    <li>Lesson One</li>
 			    <li>Lesson Two</li>
 			    <li>Lesson Three</li>
 			    <li>Lesson Four</li>
 			    <li>Lesson Five</li>
 			    <li>Lesson Six</li>
 			    <li>Lesson Seven</li>
 			    <li>Lesson Eight</li>
 		    </ul>
            <asp:GridView ID="GridView1" runat="server"></asp:GridView>
 	    </div>
 	    <div class="right" id="lesson_view">
            <object data="lesson/Lesson 1 - Word Turorial.pdf" TYPE="application/x-pdf" TITLE="Lesson - 1 Word Turorial" WIDTH=930 HEIGHT=600></object>
        </div>
    </div>
</asp:Content>
