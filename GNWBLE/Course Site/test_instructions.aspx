<%@ Page Title="" Language="C#" MasterPageFile="~/Template.Master" AutoEventWireup="true" CodeBehind="test_instructions.aspx.cs" Inherits="Course_Site.test_instructions" %>
<asp:Content ID="Content1" ContentPlaceHolderID="title" runat="server">
    Test/Course Title | GNWBLE
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
        <h4>
            <asp:Literal ID="ltlCourseTitle" runat="server"></asp:Literal>
        </h4>
        <div class="instruct_wrapper">
            <div class="instruct">
                <h3><u>INSTRUCTIONS</u></h3>
                <ul class="intruct_list">
                	<li>1. This test will last for 20 minutes.</li>
                    <li>2. You have 20 seconds to answer each question.</li>
                    <li>3. You cannot go back to answer a question once it times out.</li>
                    <li>4. Read each question carefully before answering.</li>
                </ul>
            </div>
            <a href="">
                <asp:Button ID="btnStartTest" CssClass="test_start" runat="server" Text="Start Test" />
            </a>
        </div>
    </div>
</asp:Content>
