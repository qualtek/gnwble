<%@ Page Title="" Language="C#" MasterPageFile="~/Template.Master" AutoEventWireup="true" CodeBehind="course.aspx.cs" Inherits="Course_Site.course" %>
<asp:Content ID="Content1" ContentPlaceHolderID="scripts" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="calendar_noticeBoard_container" runat="server">
    <div id="embeddedExample">
	    <div id="embeddedCalendar"></div>
    </div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="main_content" runat="server">
    <div id="mainContent">
 		<div id="stats">
 			<h6>My statistics</h6>
 			<ul class="left">
 				<li>Name: Jemyma Randy-Cofie</li>
 				<li>Company: Qualtek Ghana</li>
 				<li>Title: Manager</li>
 			</ul>
 			<ul class="right">
 				<li>Overall performance: 90% passed</li>
 			</ul>
 		</div>
 		<div id="course_list">
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
            <asp:GridView ID="resultTable" runat="server" CssClass="course_list">
                <Columns>
                    <asp:TemplateField HeaderText="Chat with the instructor">
                        <ItemTemplate>
                            <script src="https://apis.google.com/js/platform.js"></script>
                            <div id="placeholder-div2"></div>
                            <script>
							    gapi.hangout.render('placeholder-div1', {
							        'render': 'createhangout',
							        'initial_apps': [{ 'app_id': '184219133185', 'start_data': 'dQw4w9WgXcQ', 'app_type': 'ROOM_APP' }]
							    });
							</script>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
            </asp:GridView>
 			<table id="resultTa1ble" class="course_list">
 				<thead>
 					<tr id="table_header2">
 						<th class="set_width">Training modules</th>
 						<th>Internal trainer name</th>
 						<th>Chat</th>
 						<th>Lesson type</th>
 						<th>Completion Status</th>
 						<th>Completion date</th>
 					</tr>
 				</thead>
 				<tbody>
 					<tr class="record">
 						<td>
 							<div class="acdn">
  								<h3><a href="lesson_viewer_text.aspx"><span class="ui-icon ui-icon-newwin"></span> Microsoft Office 2007 Suite</a></h3>
  								<div>
    								<p>Mauris mauris ante, blandit et, ultrices a, susceros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.</p>
  								</div>
  							</div>
  						</td>
 						<td><asp:TextBox ID="TextBox1" runat="server" Text="Philip Sowah" Enabled="false"></asp:TextBox></td>
 						<td>
 							<script src="https://apis.google.com/js/platform.js"></script>
							<div id="placeholder-div1"></div>
							<script>
							    gapi.hangout.render('placeholder-div1', {
							        'render': 'createhangout',
							        'initial_apps': [{ 'app_id': '184219133185', 'start_data': 'dQw4w9WgXcQ', 'app_type': 'ROOM_APP' }]
							    });
							</script>
 						</td>
 						<td>
 							<asp:DropDownList runat="server" ID="txtCourseType" Enabled="false">
 								<asp:ListItem Selected="True" Text="Video" Value="Video">Video</asp:ListItem>
 								<asp:ListItem Text="Slideshow" Value="Slideshow">Slideshow</asp:ListItem>
 								<asp:ListItem Text="Text" Value="Text">Text</asp:ListItem>
 							</asp:DropDownList>
 						</td>
 						<td>
 							<asp:DropDownList runat="server" ID="txtCourseStatus">
 								<asp:ListItem Selected="True" Text="Register" Value="Register">Register</asp:ListItem>
 								<asp:ListItem Text="Course on-going" Value="Course on-going">Course on-going</asp:ListItem>
 								<asp:ListItem Text="Take Test" Value="Take Test">Take Test</asp:ListItem>
 								<asp:ListItem Text="Completed" Value="Completed">Completed</asp:ListItem>
 							</asp:DropDownList>
 						</td>
 						<td><asp:TextBox ID="TextBox2" Text="31/03/2014" runat="server" Enabled="false"></asp:TextBox></td>
 					</tr>
 					<tr class="record">
 						<td>
 							<div class="acdn">
  								<h3><a href="lesson_view_text.html">Financial Management</a></h3>
  								<div>
    								<p>Mauris mauris ante, blandit et, ultrices a, susceros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.</p>
  								</div>
  							</div>
  						</td>
 						<td><asp:TextBox ID="TextBox3" runat="server" Text="Philip Sowah" Enabled="false"></asp:TextBox></td>
 						<td></td>
 						<td>
 							<asp:DropDownList ID="DropDownList1" runat="server">
 								<asp:ListItem Selected="True" Text="Video" Value="Video">Video</asp:ListItem>
 								<asp:ListItem Text="Slideshow" Value="Slideshow">Slideshow</asp:ListItem>
 								<asp:ListItem Text="Text" Value="Text">Text</asp:ListItem>
 							</asp:DropDownList>
 						</td>
 						<td>
 							<asp:DropDownList ID="DropDownList2" runat="server">
 								<asp:ListItem Selected="True" Text="Register" Value="Register">Register</asp:ListItem>
 								<asp:ListItem Text="Course on-going" Value="Course on-going">Course on-going</asp:ListItem>
 								<asp:ListItem Text="Take Test" Value="Take Test">Take Test</asp:ListItem>
 								<asp:ListItem Text="Completed" Value="Completed">Completed</asp:ListItem>
 							</asp:DropDownList>
 						</td>
 						<td><asp:TextBox ID="TextBox4" Text="31/03/2014" runat="server" Enabled="false"></asp:TextBox></td>
 					</tr>
 					<tr class="record">
 						<td>
 							<div class="acdn">
  								<h3><a href="lesson_view_text.html">Risk Management</a></h3>
  								<div>
    								<p>Mauris mauris ante, blandit et, ultrices a, susceros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.</p>
  								</div>
  							</div>
  						</td>
 						<td><asp:TextBox ID="TextBox5" runat="server" Text="Philip Sowah" Enabled="false"></asp:TextBox></td>
 						<td>
 							<script src="https://apis.google.com/js/platform.js"></script>
							<div id="Div3"></div>
							<script>
							    gapi.hangout.render('placeholder-div1', {
							        'render': 'createhangout',
							        'initial_apps': [{ 'app_id': '184219133185', 'start_data': 'dQw4w9WgXcQ', 'app_type': 'ROOM_APP' }]
							    });
							</script>
 						</td>
 						<td>
 							<asp:DropDownList ID="DropDownList3" runat="server">
 								<asp:ListItem Selected="True" Text="Video" Value="Video">Video</asp:ListItem>
 								<asp:ListItem Text="Slideshow" Value="Slideshow">Slideshow</asp:ListItem>
 								<asp:ListItem Text="Text" Value="Text">Text</asp:ListItem>
 							</asp:DropDownList>
 						</td>
 						<td>
 							<asp:DropDownList ID="DropDownList4" runat="server">
 								<asp:ListItem Selected="True" Text="Register" Value="Register">Register</asp:ListItem>
 								<asp:ListItem Text="Course on-going" Value="Course on-going">Course on-going</asp:ListItem>
 								<asp:ListItem Text="Take Test" Value="Take Test">Take Test</asp:ListItem>
 								<asp:ListItem Text="Completed" Value="Completed">Completed</asp:ListItem>
 							</asp:DropDownList>
 						</td>
 						<td><asp:TextBox ID="TextBox6" Text="31/03/2014" runat="server" Enabled="false"></asp:TextBox></td>
 					</tr>
 					<tr class="record">
 						<td>
 							<div class="acdn">
  								<h3><a href="lesson_view_text.html">Tax Reliefs, Accessibility, Frequency and Application</a></h3>
  								<div>
    								<p>Mauris mauris ante, blandit et, ultrices a, susceros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.</p>
  								</div>
  							</div>
  						</td>
 						<td><asp:TextBox ID="TextBox7" runat="server" Text="Philip Sowah" Enabled="false"></asp:TextBox></td>
 						<td>
 							<script src="https://apis.google.com/js/platform.js"></script>
							<div id="Div5"></div>
							<script>
							    gapi.hangout.render('placeholder-div1', {
							        'render': 'createhangout',
							        'initial_apps': [{ 'app_id': '184219133185', 'start_data': 'dQw4w9WgXcQ', 'app_type': 'ROOM_APP' }]
							    });
							</script>
 						</td>
 						<td>
 							<asp:DropDownList ID="DropDownList5" runat="server">
 								<asp:ListItem Selected="True" Text="Video" Value="Video">Video</asp:ListItem>
 								<asp:ListItem Text="Slideshow" Value="Slideshow">Slideshow</asp:ListItem>
 								<asp:ListItem Text="Text" Value="Text">Text</asp:ListItem>
 							</asp:DropDownList>
 						</td>
 						<td>
 							<asp:DropDownList ID="DropDownList6" runat="server">
 								<asp:ListItem Selected="True" Text="Register" Value="Register">Register</asp:ListItem>
 								<asp:ListItem Text="Course on-going" Value="Course on-going">Course on-going</asp:ListItem>
 								<asp:ListItem Text="Take Test" Value="Take Test">Take Test</asp:ListItem>
 								<asp:ListItem Text="Completed" Value="Completed">Completed</asp:ListItem>
 							</asp:DropDownList>
 						</td>
 						<td><asp:TextBox ID="TextBox8" Text="31/03/2014" runat="server" Enabled="false"></asp:TextBox></td>
 					</tr>
					<tr class="record">
 						<td>
 							<div class="acdn">
  								<h3><a href="lesson_view_text.html">Insurance</a></h3>
  								<div>
    								<p>Mauris mauris ante, blandit et, ultrices a, susceros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.</p>
  								</div>
  							</div>
  						</td>
 						<td><asp:TextBox ID="TextBox9" runat="server" Text="Philip Sowah" Enabled="false"></asp:TextBox></td>
 						<td>
 							<script src="https://apis.google.com/js/platform.js"></script>
							<div id="Div7"></div>
							<script>
							    gapi.hangout.render('placeholder-div1', {
							        'render': 'createhangout',
							        'initial_apps': [{ 'app_id': '184219133185', 'start_data': 'dQw4w9WgXcQ', 'app_type': 'ROOM_APP' }]
							    });
							</script>
 						</td>
 						<td>
 							<asp:DropDownList ID="DropDownList7" runat="server">
 								<asp:ListItem Selected="True" Text="Video" Value="Video">Video</asp:ListItem>
 								<asp:ListItem Text="Slideshow" Value="Slideshow">Slideshow</asp:ListItem>
 								<asp:ListItem Text="Text" Value="Text">Text</asp:ListItem>
 							</asp:DropDownList>
 						</td>
 						<td>
 							<asp:DropDownList ID="DropDownList8" runat="server">
 								<asp:ListItem Selected="True" Text="Register" Value="Register">Register</asp:ListItem>
 								<asp:ListItem Text="Course on-going" Value="Course on-going">Course on-going</asp:ListItem>
 								<asp:ListItem Text="Take Test" Value="Take Test">Take Test</asp:ListItem>
 								<asp:ListItem Text="Completed" Value="Completed">Completed</asp:ListItem>
 							</asp:DropDownList>
 						</td>
 						<td><asp:TextBox ID="TextBox10" Text="31/03/2014" runat="server" Enabled="false"></asp:TextBox></td>
 					</tr>
					<tr class="record">
 						<td>
 							<div class="acdn">
  								<h3><a href="lesson_view_text.html">Media(Radio and TV)</a></h3>
  								<div>
    								<p>Mauris mauris ante, blandit et, ultrices a, susceros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.</p>
  								</div>
  							</div>
  						</td>
 						<td><asp:TextBox ID="TextBox11" runat="server" Text="Philip Sowah" Enabled="false"></asp:TextBox></td>
 						<td>
 							<script src="https://apis.google.com/js/platform.js"></script>
							<div id="Div9"></div>
							<script>
							    gapi.hangout.render('placeholder-div1', {
							        'render': 'createhangout',
							        'initial_apps': [{ 'app_id': '184219133185', 'start_data': 'dQw4w9WgXcQ', 'app_type': 'ROOM_APP' }]
							    });
							</script>
 						</td>
 						<td>
 							<asp:DropDownList ID="DropDownList9" runat="server">
 								<asp:ListItem Selected="True" Text="Video" Value="Video">Video</asp:ListItem>
 								<asp:ListItem Text="Slideshow" Value="Slideshow">Slideshow</asp:ListItem>
 								<asp:ListItem Text="Text" Value="Text">Text</asp:ListItem>
 							</asp:DropDownList>
 						</td>
 						<td>
 							<asp:DropDownList ID="DropDownList10" runat="server">
 								<asp:ListItem Selected="True" Text="Register" Value="Register">Register</asp:ListItem>
 								<asp:ListItem Text="Course on-going" Value="Course on-going">Course on-going</asp:ListItem>
 								<asp:ListItem Text="Take Test" Value="Take Test">Take Test</asp:ListItem>
 								<asp:ListItem Text="Completed" Value="Completed">Completed</asp:ListItem>
 							</asp:DropDownList>
 						</td>
 						<td><asp:TextBox ID="TextBox12" Text="31/03/2014" runat="server" Enabled="false"></asp:TextBox></td>
 					</tr>
					<tr class="record">
 						<td>
 							<div class="acdn">
  								<h3><a href="lesson_view_text.html">Real Estate/Maintenace/facility Management</a></h3>
  								<div>
    								<p>Mauris mauris ante, blandit et, ultrices a, susceros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.</p>
  								</div>
  							</div>
  						</td>
 						<td><asp:TextBox ID="TextBox13" runat="server" Text="Philip Sowah" Enabled="false"></asp:TextBox></td>
 						<td>
 							<script src="https://apis.google.com/js/platform.js"></script>
							<div id="Div11"></div>
							<script>
							    gapi.hangout.render('placeholder-div1', {
							        'render': 'createhangout',
							        'initial_apps': [{ 'app_id': '184219133185', 'start_data': 'dQw4w9WgXcQ', 'app_type': 'ROOM_APP' }]
							    });
							</script>
 						</td>
 						<td>
 							<asp:DropDownList ID="DropDownList11" runat="server">
 								<asp:ListItem Selected="True" Text="Video" Value="Video">Video</asp:ListItem>
 								<asp:ListItem Text="Slideshow" Value="Slideshow">Slideshow</asp:ListItem>
 								<asp:ListItem Text="Text" Value="Text">Text</asp:ListItem>
 							</asp:DropDownList>
 						</td>
 						<td>
 							<asp:DropDownList ID="DropDownList12" runat="server">
 								<asp:ListItem Selected="True" Text="Register" Value="Register">Register</asp:ListItem>
 								<asp:ListItem Text="Course on-going" Value="Course on-going">Course on-going</asp:ListItem>
 								<asp:ListItem Text="Take Test" Value="Take Test">Take Test</asp:ListItem>
 								<asp:ListItem Text="Completed" Value="Completed">Completed</asp:ListItem>
 							</asp:DropDownList>
 						</td>
 						<td><asp:TextBox ID="TextBox14" Text="31/03/2014" runat="server" Enabled="false"></asp:TextBox></td>
 					</tr>
					<tr class="record">
 						<td>
 							<div class="acdn">
  								<h3><a href="lesson_view_text.html">Hospitality Management</a></h3>
  								<div>
    								<p>Mauris mauris ante, blandit et, ultrices a, susceros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.</p>
  								</div>
  							</div>
  						</td>
 						<td><asp:TextBox ID="TextBox15" runat="server" Text="Philip Sowah" Enabled="false"></asp:TextBox></td>
 						<td>
 							<script src="https://apis.google.com/js/platform.js"></script>
							<div id="Div13"></div>
							<script>
							    gapi.hangout.render('placeholder-div1', {
							        'render': 'createhangout',
							        'initial_apps': [{ 'app_id': '184219133185', 'start_data': 'dQw4w9WgXcQ', 'app_type': 'ROOM_APP' }]
							    });
							</script>
 						</td>
 						<td>
 							<asp:DropDownList ID="DropDownList13" runat="server">
 								<asp:ListItem Selected="True" Text="Video" Value="Video">Video</asp:ListItem>
 								<asp:ListItem Text="Slideshow" Value="Slideshow">Slideshow</asp:ListItem>
 								<asp:ListItem Text="Text" Value="Text">Text</asp:ListItem>
 							</asp:DropDownList>
 						</td>
 						<td>
 							<asp:DropDownList ID="DropDownList14" runat="server">
 								<asp:ListItem Selected="True" Text="Register" Value="Register">Register</asp:ListItem>
 								<asp:ListItem Text="Course on-going" Value="Course on-going">Course on-going</asp:ListItem>
 								<asp:ListItem Text="Take Test" Value="Take Test">Take Test</asp:ListItem>
 								<asp:ListItem Text="Completed" Value="Completed">Completed</asp:ListItem>
 							</asp:DropDownList>
 						</td>
 						<td><asp:TextBox ID="TextBox16" Text="31/03/2014" runat="server" Enabled="false"></asp:TextBox></td>
 					</tr>
 				</tbody>
 			</table>
 		</div>
	</div>
</asp:Content>
