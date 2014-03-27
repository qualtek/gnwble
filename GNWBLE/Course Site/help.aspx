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

            <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
			<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
			<script>
			    $(function () {
			        $(".acdn").accordion({
			            heightStyle: "content",
			            collapsible: true,
			            active: false,
			            activate: "refresh",
			            animate: true
			        });
			    });
			</script>
            <div class="acdn">
                <h3 class="blue">How do I enter the GNWBLE Community?</h3>
                <div>
                <p>Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.</p>
                </div>
                <h3  class="blue">How do I add a new post?</h3>
                <div>
                <p>Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna. </p>
                </div>
            </div>
            <h3>Community posts</h3>
            <ul class="faq_list">
                <li><a class="blue" href="https://plus.google.com/communities/112739682321271978802" target="_blank">Look for answers from your peers in the GNWBLE Community</a></li>
            </ul>
            <h3>Still have questions?</h3>
            <asp:Button ID="faqButton1" runat="server" Text="Contact us" BackColor="#333333" Height="35px" Width="110px" ToolTip="Contact us" />
        </div>
    </div>
</asp:Content>
