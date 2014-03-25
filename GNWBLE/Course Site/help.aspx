<%@ Page Title="" Language="C#" MasterPageFile="~/Template.Master" AutoEventWireup="true" CodeBehind="help.aspx.cs" Inherits="Course_Site.help" %>
<asp:Content ID="Content1" ContentPlaceHolderID="title" runat="server">
    Help | GNWBLE
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
	<li><a href="course.aspx">Courses</a></li>
	<li><a href="library.aspx">Library</a></li>
	<li><a href="results.aspx">Achievements</a></li>
	<li><a href="reminder.aspx">Reminders</a></li>
	<li><div id='cse' style='width: 100%;'>Loading...</div></li>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="main_content" runat="server">
    <div id="mainContent">
        <div id="top_faq_wrapper">
            <div id="top_faq_left">
                <div id="tfl_text">
                    <h3>Get answers</h3>
                    <p>We've got lots of resources to help you find what you are looking for</p>
                </div>
            </div>
            <div id="top_faq_right">
                <img src="images/spanner.png" width="160" />
            </div>
        </div>
        <div id="faq_content">
            <h3>Choose a category</h3>
            <asp:DropDownList ID="faqDropDownList1" runat="server" BackColor="#338D8D" ForeColor="Black">
                <asp:ListItem Text="GNWBLE Community" Value="1" />
                <asp:ListItem Text="How to add a reminder" Value="2" />
                <asp:ListItem Text="How to logout" Value="3" />
            </asp:DropDownList>
            <ul class="faq_list">
                <li class="blue">How do I enter the GNWBLE Community?</li>
                <li class="blue">How do I add a new post?</li>
            </ul>
            <h3>Community posts</h3>
            <ul class="faq_list">
                <li class="blue">Look for answers from your peers in the GNWBLE COmmunity</li>
            </ul>
            <h3>Still have questions?</h3>
            <asp:Button ID="faqButton1" runat="server" Text="Contact us" BackColor="#333333" Height="35px" Width="110px" ToolTip="Contact us" />
        </div>
    </div>
</asp:Content>
