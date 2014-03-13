<%@ Page Title="" Language="C#" MasterPageFile="~/Template.Master" AutoEventWireup="true" CodeBehind="library.aspx.cs" Inherits="Course_Site.library" %>
<asp:Content ID="Content1" ContentPlaceHolderID="title" runat="server">
    GN Library | GNWBLE
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
	<li class="active"><a href="library.aspx">Library</a></li>
	<li><a href="results.aspx">Achievements</a></li>
	<li><a href="reminder.aspx">Reminders</a></li>
	<li><div id='cse' style='width: 100%;'>Loading...</div></li>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="main_content" runat="server">
    <div id="mainContent">
        <div id="tree">
    	    <h5>Modules</h5>
		    <ul>
			    <li class="folder">Microsoft Office Suite
				    <ul>
					    <li data="addClass:'custom2'">Microsoft Word
                    	    <ul>
							    <li data="addClass:'custom1'">Lesson 1</li>
							    <li data="addClass:'custom1'">Lesson 2</li>
						    </ul>
                        </li>
					    <li data="addClass:'custom2'">Microsoft Excel
                    	    <ul>
							    <li data="addClass:'custom1'">Lesson 1</li>
							    <li data="addClass:'custom1'">Lesson 2</li>
						    </ul>
                        </li>
                        <li data="addClass:'custom2'">Microsoft Powerpoint
                    	    <ul>
							    <li data="addClass:'custom1'">Lesson 1</li>
							    <li data="addClass:'custom1'">Lesson 2</li>
						    </ul>
                        </li>
				    </ul>
                 </li>
                 <li class="folder">Microsoft Office Suite
				    <ul>
					    <li data="addClass:'custom2'">Microsoft Word
                    	    <ul>
							    <li data="addClass:'custom1'">Lesson 1</li>
							    <li data="addClass:'custom1'">Lesson 2</li>
						    </ul>
                        </li>
					    <li data="addClass:'custom2'">Microsoft Excel
                    	    <ul>
							    <li data="addClass:'custom1'">Lesson 1</li>
							    <li data="addClass:'custom1'">Lesson 2</li>
						    </ul>
                        </li>
                        <li data="addClass:'custom2'">Microsoft Powerpoint
                    	    <ul>
							    <li data="addClass:'custom1'">Lesson 1</li>
							    <li data="addClass:'custom1'">Lesson 2</li>
						    </ul>
                        </li>
				    </ul>
                 </li>
                 <li class="folder">Microsoft Office Suite
				    <ul>
					    <li data="addClass:'custom2'">Microsoft Word
                    	    <ul>
							    <li data="addClass:'custom1'">Lesson 1</li>
							    <li data="addClass:'custom1'">Lesson 2</li>
						    </ul>
                        </li>
					    <li data="addClass:'custom2'">Microsoft Excel
                    	    <ul>
							    <li data="addClass:'custom1'">Lesson 1</li>
							    <li data="addClass:'custom1'">Lesson 2</li>
						    </ul>
                        </li>
                        <li data="addClass:'custom2'">Microsoft Powerpoint
                    	    <ul>
							    <li data="addClass:'custom1'">Lesson 1</li>
							    <li data="addClass:'custom1'">Lesson 2</li>
						    </ul>
                        </li>
				    </ul>
                 </li>
		    </ul>
	    </div>
        <div id="file_view">
            <div id="file_view_title">
                <h6>Microsoft Office Suite / Microsoft Word / Lesson 1</h6>
            </div>
        </div>
    </div>
</asp:Content>
