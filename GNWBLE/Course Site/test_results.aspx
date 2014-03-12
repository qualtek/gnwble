<%@ Page Title="" Language="C#" MasterPageFile="~/Template.Master" AutoEventWireup="true" CodeBehind="test_results.aspx.cs" Inherits="Course_Site.test_results" %>
<asp:Content ID="Content1" ContentPlaceHolderID="title" runat="server">
    Test/Course Title Results | GNWBLE
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="scripts" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="calendar_noticeBoard_container" runat="server">
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
<asp:Content ID="Content4" ContentPlaceHolderID="main_content" runat="server">
    <div id="mainContent">
        <div id="placeholder" align="center" style=" z-index:5500; position:absolute; background-color:#005555; width:1050px; height:230px; bottom:0px;  left:120px; overflow:hidden; visibility:visible;" >          
            TEST COMPLETE......<br/>
            You answered 14 out of 15 questions correctly and your grade is 93.3%<br/>
            You Passed<br/>
            Well Done<br/>
        </div>
    </div>
</asp:Content>
