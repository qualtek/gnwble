<%@ Page Title="" Language="C#" MasterPageFile="~/Template.Master" AutoEventWireup="true" CodeBehind="test.aspx.cs" Inherits="Course_Site.test" %>
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
    <li><a href="default.aspx">Dashboard</a></li>
	<li class="active"><a href="course_list.aspx">Courses</a></li>
	<li><a href="library.aspx">Library</a></li>
	<li><a href="results.aspx">Achievements</a></li>
	<li><a href="reminder.aspx">Reminders</a></li>
	<li><div id='cse' style='width: 100%;'>Loading...</div></li>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="main_content" runat="server">
    <div id="mainContent">
        <div class="instruct_tab">
            	Instructions <img src="images/drop.png" >
            </div>
            <div class="instruct_2">
                <ul class="intruct_list">
                	<li><h3><u>INSTRUCTIONS</u></h3></li>
                	<li>1. This test will last for 20 minutes.</li>
                    <li>2. You have 20 seconds to answer each question.</li>
                    <li>3. You cannot go back to answer a question once it times out.</li>
                    <li>4. Read each question carefully before answering.</li>
                </ul>
            <!--
                <a href="">
            		<button class="instruct_hider">Hide</button>
            	</a>
            -->    
            </div>
    </div>
</asp:Content>
