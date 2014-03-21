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
        <div id="a-z_wrapper">
    	<div id="a-z_title">
    	Filter Modules:
        </div>
        <div id="a-z_menu">
            <button class="btmenu all_menu" >All</button>
            <button class="btmenu a_menu" >A</button>
            <button class="btmenu b_menu" >B</button>
            <button class="btmenu c_menu" >C</button>
            <button class="btmenu d_menu" >D</button>
            <button class="btmenu e_menu" >E</button>
            <button class="btmenu f_menu" >F</button>
            <button class="btmenu g_menu" >G</button>
            <button class="btmenu h_menu" >H</button>
            <button class="btmenu i_menu" >I</button>
            <button class="btmenu j_menu" >J</button>
            <button class="btmenu k_menu" >K</button>
            <button class="btmenu l_menu" >L</button>
            <button class="btmenu m_menu" >M</button>
            <button class="btmenu n_menu" >N</button>
            <button class="btmenu o_menu" >O</button>
            <button class="btmenu p_menu" >P</button>
            <button class="btmenu q_menu" >Q</button>
            <button class="btmenu r_menu" >R</button>
            <button class="btmenu s_menu" >S</button>
            <button class="btmenu t_menu" >T</button>
            <button class="btmenu u_menu" >U</button>
            <button class="btmenu v_menu" >V</button>
            <button class="btmenu w_menu" >W</button>
            <button class="btmenu x_menu" >X</button>
            <button class="btmenu y_menu" >Y</button>
            <button class="btmenu z_menu" >Z</button>
        </div>
	</div>
        <div id="tree">
    	    <h5>Modules</h5>
		    <ul>
			    <li class="folder">Microsoft Office Suite
				    <ul>
					    <li data="addClass:'custom2'">Microsoft Word
                    	    <ul>
							    <li data="addClass:'custom1'"><a href="Lesson 1 - Word Tutorial.pdf" target="contentFrame">Lesson 1</a></li>
							    <li data="addClass:'custom1'"><a href="Lesson 1 - Excel Tutorial.pdf" target="contentFrame">Lesson 2</a></li>
						    </ul>
                        </li>
					    <li data="addClass:'custom2'">Microsoft Excel
                    	    <ul>
							    <li data="addClass:'custom1'"><a href="Lesson 1 - Excel Tutorial.pdf" target="contentFrame">Lesson 1</a></li>
							    <li data="addClass:'custom1'"><a href="Lesson 2 - Excel Tutorial.pdf" target="contentFrame">Lesson 2</a></li>
						    </ul>
                        </li>
                        <li data="addClass:'custom2'">Microsoft Powerpoint
                    	    <ul>
							    <li data="addClass:'custom1'"><a href="Lesson 1 - Power Point Tutorial.pdf" target="contentFrame">Lesson 1</a></li>
							    <li data="addClass:'custom1'"><a href="Lesson 2 - Power Point Tutorial.pdf" target="contentFrame">Lesson 2</a></li>
						    </ul>
                        </li>
				    </ul>
                 </li>
                 <li class="folder">Microsoft Office Suite
				    <ul>
					    <li data="addClass:'custom2'">Microsoft Word
                    	    <ul>
							    <li data="addClass:'custom1'"><a href="Lesson 1 - Word Tutorial.pdf" target="contentFrame">Lesson 1</a></li>
							    <li data="addClass:'custom1'"><a href="Lesson 2 - Word Tutorial.pdf" target="contentFrame">Lesson 2</a></li>
						    </ul>
                        </li>
					    <li data="addClass:'custom2'">Microsoft Excel
                    	    <ul>
							    <li data="addClass:'custom1'"><a href="Lesson 1 - Excel Tutorial.pdf" target="contentFrame">Lesson 1</a></li>
							    <li data="addClass:'custom1'"><a href="Lesson 2 - Excel Tutorial.pdf" target="contentFrame">Lesson 2</a></li>
						    </ul>
                        </li>
                        <li data="addClass:'custom2'">Microsoft Powerpoint
                    	    <ul>
							    <li data="addClass:'custom1'"><a href="Lesson 1 - Power Point Tutorial.pdf" target="contentFrame">Lesson 1</a></li>
							    <li data="addClass:'custom1'"><a href="Lesson 2 - Power Point Tutorial.pdf" target="contentFrame">Lesson 2</a></li>
						    </ul>
                        </li>
				    </ul>
                 </li>
                 <li class="folder">Microsoft Office Suite
				    <ul>
					    <li data="addClass:'custom2'">Microsoft Word
                    	    <ul>
							    <li data="addClass:'custom1'"><a href="Lesson 1 - Word Tutorial.pdf" target="contentFrame">Lesson 1</a></li>
							    <li data="addClass:'custom1'"><a href="Lesson 2 - Word Tutorial.pdf" target="contentFrame">Lesson 2</a></li>
						    </ul>
                        </li>
					    <li data="addClass:'custom2'">Microsoft Excel
                    	    <ul>
							    <li data="addClass:'custom1'"><a href="Lesson 1 - Excel Tutorial.pdf" target="contentFrame">Lesson 1</a></li>
							    <li data="addClass:'custom1'"><a href="Lesson 2 - Excel Tutorial.pdf" target="contentFrame">Lesson 2</a></li>
						    </ul>
                        </li>
                        <li data="addClass:'custom2'">Microsoft Powerpoint
                    	    <ul>
							    <li data="addClass:'custom1'"><a href="Lesson 1 - Power Point Tutorial.pdf" target="contentFrame">Lesson 1</a></li>
							    <li data="addClass:'custom1'"><a href="Lesson 2 - Power Point Tutorial.pdf" target="contentFrame">Lesson 2</a></li>
						    </ul>
                        </li>
				    </ul>
                 </li>
		    </ul>
	    </div>
        <div id="file_view">
            <!--
            <div id="file_view_title">
                <h6>Microsoft Office Suite / Microsoft Word / Lesson 1</h6>
            </div>
            -->
            <div id="LessonDisplayDiv">
                <p>It appears you don't have a PDF plugin for this browser.
                   No biggie... you can <a href="myfile.pdf">click here to
                   download the PDF file.</a>
                </p>
            </div>
        </div>
    </div>
</asp:Content>
