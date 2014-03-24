<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="Course_Site.default_1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="utf-8" />
	<link type="text/css" rel="stylesheet" href="css/style.css" />
	<link type="text/css" rel="stylesheet" href="css/typography.css" />
	<link type="text/css" rel="stylesheet" href="css/SearchBoxTins.css" />
	<link rel="stylesheet" href="css/calendarview.css" />
	<script src="js/argiepolicarpio.js" type="text/javascript" charset="utf-8"></script>
	<script src="js/application.js" type="text/javascript" charset="utf-8"></script>
        
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300,600' rel='stylesheet' type='text/css' />
	<title>Dashboard || GNWBLE</title>
    
	
	<!--For PCalendar-->
    <script src="js/prototype.js"></script>
    <script src="js/calendarview.js"></script>
    <script type="text/javascript">
        function setupCalendars() {
            // Embedded Calendar
            Calendar.setup(
              {
                  dateField: 'embeddedDateField',
                  parentElement: 'embeddedCalendar'
              }
            )
        }

        Event.observe(window, 'load', function () { setupCalendars() })
    </script>
    <script type="text/javascript">
        (function () {
            var po = document.createElement('script');
            po.type = 'text/javascript'; po.async = true;
            po.src = 'https://apis.google.com/js/client:plusone.js?onload=render';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(po, s);
        })();

        function sign_out() {
            gapi.auth.signOut();
            window.location.replace("http://localhost:4643/Account/login.aspx");
        }
    </script>
    <!--For Progress Circle--> 
    <script src="js/jquery.min.js"></script>
    <script src="js/jquery.mambo.js"></script>
    <script src="js/jquery.mambo.min.js"></script>
    <script> var jQ = jQuery.noConflict();</script>
    
    <!--For Line Grap-->
    <script src="js/highcharts.js"></script>
	<script src="js/modules/exporting.js"></script>
    <script type="text/javascript">
        jQ(function () {
            jQ('#container').highcharts({
                title: {
                    text: 'PERFORMANCE TO DATE',
                    align: 'center',
                    style: {
                        color: '#eee'
                    },
                    margin: 50

                },
                chart: {
                    backgroundColor: '#007070',
                    borderRadius: 0,
                    borderWidth: 0,
                    spacingLeft: 25,
                    spacingRight: 25,
                    spacingTop: 30,
                    spacingBottom: 30,
                    style: { color: '#eee' }
                },
                subtitle: {
                    text: '',
                    x: -20
                },
                colors: [
                    '#eee'
                ],
                xAxis: {
                    gridLineColor: '#16a693',
                    gridLineDashStyle: 'dash',
                    categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
                    labels: {
                        style: {
                            color: '#eee'
                        }
                    }
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    labels: {
                        style: {
                            color: '#eee'
                        }
                    },
                    gridLineDashStyle: 'dash',
                    gridLineColor: '#16a693',
                },
                tooltip: {
                    valueSuffix: '%'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    showInLegend: false,
                    name: 'overall performance',
                    data: [7.0, 6.9, 3, 5, 2, 21.5]
                }],
                plotBands: [{
                    label: { style: { color: '#eee' } }
                }]
            });
        });
	</script>
	<script type="text/javascript">
	    jQ(function () {
	        jQ('#bar_chart2').highcharts({
	            chart: {
	                type: 'column',
	                backgroundColor: '#005555',
	            },
	            colors: [
                    '#eee',
                    '#1fbba6'
	            ],
	            title: {
	                text: 'Results by score ',
	                align: 'left',
	                x: 5,
	                margin: 20,
	                style: {
	                    color: '#eee'
	                }
	            },
	            xAxis: {
	                categories: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
	                labels: {
	                    style: {
	                        color: '#eee'
	                    }
	                }
	            },
	            yAxis: {
	                min: 0,
	                gridLineColor: '',
	                title: {
	                    text: ''
	                },
	                labels: { enabled: false }
	            },
	            tooltip: {
	                pointFormat: '{series.name}: <b>{point.y}</b><br/>',
	                valueSuffix: '%',
	                shared: true
	            },
	            plotOptions: {
	                column: {
	                    stacking: 'percent'
	                }
	            },
	            series: [{
	                showInLegend: false,
	                name: 'Fails',
	                data: [5, 3, 4, 7, 2, 5, 7, 8, 2, 9, 5, 6]
	            }, {
	                showInLegend: false,
	                name: 'Passes',
	                data: [2, 2, 3, 2, 1, 2, 3, 4, 1, 1, 3, 4]
	            }]
	        })

	    });
    </script>
</head>
<body>
    <!--For Search-->
	<script src="/../../../../../../http:/www.google.com/jsapi" type='text/javascript'></script>
	<script type='text/javascript'>
	    google.load('search', '1', { language: 'en', style: google.loader.themes.V2_DEFAULT });
	    google.setOnLoadCallback(function () {
	        var customSearchOptions = {};
	        var orderByOptions = {};
	        orderByOptions['keys'] = [{ label: 'Relevance', key: '' }, { label: 'Date', key: 'date' }];
	        customSearchOptions['enableOrderBy'] = true;
	        customSearchOptions['orderByOptions'] = orderByOptions;
	        customSearchOptions['overlayResults'] = true;
	        var customSearchControl = new google.search.CustomSearchControl('015662392703032799914:8ew4iphao1q', customSearchOptions);
	        customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
	        var options = new google.search.DrawOptions();
	        options.setAutoComplete(true);
	        customSearchControl.draw('cse', options);
	    }, true);
	</script>

    <form id="Form1" runat="server">
	    <div id="top_bg">
            <span id="signinButton" style="display:none;">
              <span class="g-signin"
                data-callback="loginFinishedCallback"
                data-clientid="764368009982-jn348rmjcj2qvsfrmf7jm0223kq6ilih.apps.googleusercontent.com"
                data-scope="https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read"
                data-height="tall"
                data-cookiepolicy="single_host_origin">
              </span>
            </span>
            <script type="text/javascript">
                function sign_out() {
                    /*
                    * Triggered when the user accepts the sign in, cancels, or closes the
                    * authorization dialog.
                    */
                    function loginFinishedCallback(authResult) {
                        alert(authResult);

                        if (authResult) {
                            if (authResult['error'] == user_signed_out) {
                                gapi.auth.signOut();
                            } else {
                                alert("An error occurred: " + authResult['error']);
                                console.log('An error occurred');
                            }
                        } else {
                            alert("Empty authResult: " + authResult['error']);
                            console.log('Empty authResult');  // Something went wrong
                        }
                    }
                }
            </script>
		    <div id="header" class="dashboard_dimensions">
			    <div id="logo">
				    <img alt="GN Logo" src="images/logo.png" />
				    <p>Web based learning<br/><span>environment</span></p>
			    </div>
			    <ul id="top_nav">
				    <li><a href="#">Account Settings</a></li>
				    <li><asp:LinkButton ID="btnSignout" runat="server" OnClientClick="sign_out(); return false;">Sign out</asp:LinkButton></li>
				    <li><a href="help.aspx">Help</a></li>
			    </ul>
			    <h2>my workstation</h2>
			    <div id="calendar">
				    <div class="nb">GN Notice Board</div>
	                <ul class="nb_board">
		                <li>No posts.</li>
	                </ul>
			    </div>
                <nav>
				    <ul id="navBar">
					    <li class="active"><a href="default.aspx">Dashboard</a></li>
	                    <li><a href="course_list.aspx">Courses</a></li>
	                    <li><a href="library.aspx">Library</a></li>
	                    <li><a href="results.aspx">Achievements</a></li>
	                    <li><a href="reminder.aspx">Reminders</a></li>
	                    <li><div id='cse' style='width: 100%;'>Loading...</div></li>
				    </ul>
			    </nav>
		    </div>
	    </div>
 	    <center><img src="images/shadow.png" alt="shadow" /></center>
        <div id="mainContent" class="dashboard_dimensions"> 
            <div class="bar box left">
			    <div id="container">
			    </div>
		    </div>
		    <!--For Progress Circle-->
		    <div id="pie_chart" class="box">
			    <canvas class="tasks_completed" width="250" height="250"></canvas>
			    <div id="pie_chart_label">
				    <h4>79<span>%</span></h4>
				    <p>Courses Completed</p>
			    </div>
		    </div>
		    <script>
		        jQ(".tasks_completed").mambo({
		            image: "",
		            percentage: 79,
		            circleColor: '#005555',
		            circleBorder: '#005555',
		            ringStyle: "percentage",
		            ringColor: "#338d8d"
		        });
		    </script>
		    <div id="calendar_note" class="right">
			    <div id="embeddedExample">
				    <div id="embeddedCalendar"></div>
			    </div>
		    </div>
		    <div class="bar box left">
			    <div id="bar_chart2">
			    </div>
			    <div class="b1">
				    <h4>-32%</h4>
				    <p>from last year</p>
			    </div>
			    <div class="lineBreak"></div>
			    <div class="b2">
				    <p>Completed Courses</p>
				    <h4>14</h4>
			    </div>
			    <div class="b3">
				    <p>Total Assigned Courses</p>
				    <h4>35</h4>
			    </div>
		    </div>
		    <div id="mailbox" class="box">
        	    <!-- Google Badge. -->
                <div id="badge" class="g-community" data-href="https://plus.google.com/communities/112739682321271978802" data-width="180" ></div>
                <script type="text/javascript">
                    (function () {
                        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
                        po.src = 'js/platform.js';
                        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
                    })();
                </script>
                <a href="https://plus.google.com/hangouts" target="_blank">
            	    <button type="button" class="btn1 btn_connect hangout">Connect to Hangout</button>
                </a>
		    </div>
		    <div id="my_tools" class="right">
			    <div class="widget_heading mt"><span class="img mti"></span><p>My Tools</p></div>
			    <ul id="tool_list">
				    <li id="c"><a href="#"><span class="blt"></span>Courses<span class="stg"></span></a></li>
				    <li id="l"><a href="#"><span class="blt"></span>Latest assigned courses<span class="stg"></span></a></li>
				    <li id="g"><a href="#"><span class="blt"></span>GN Library<span class="stg"></span></a></li>
				    <li id="res"><a href="#"><span class="blt"></span>Results<span class="stg"></span></a></li>
				    <li id="rem"><a href="#"><span class="blt"></span>Reminders<span class="stg"></span></a></li>
			    </ul>
		    </div>
 		    <table cellpadding="1" cellspacing="0" id="resultTable" class="left dashboard">
	    	    <thead>
	    		    <tr id="table_header1">
	            	    <th> <img src="images/menu-icon.png" alt="" /> </th>
	            	    <th><h1>ASSIGNED COURSES</h1></th>
	            	    <th><label for="filter"></label> <input type="text" name="filter" value="" id="filter" placeholder="search..." /></th>
	           	    </tr>
	            </thead>
	            <thead>
	                <tr id="table_header2">
	                    <th> Date Due </th>
	                    <th> Percent completed </th>
	                    <th> Course </th>
	                </tr>
	      	    </thead>
	              <tbody>
				    <tr class="record" id="">
	            	    <td>17/3/2014</td>
	            	    <td>23%</td>
	                    <td>Microsoft Word Office Suite</td>
	  			    </tr>
	                <tr class="record" id="Tr1">
	            	    <td>30/4/2014</td>
	            	    <td>5%</td>
	                    <td>How to save in Stratus X-50</td>
	  			    </tr>
	                <tr class="record" id="Tr2">
	            	    <td>7/5/2014</td>
	            	    <td>76%</td>
	                    <td>How to add a video to ATV website</td>
	  			    </tr>
	              </tbody>
	        </table>
	        <div id="reminder" class="right">
	    	    <div class="widget_heading r"><span class="img ri"></span><p>January 27, 2014</p></div>
                    <ul id="r_list">
	                    <ul id="overdue">
	                        <li class="title">Overdue</li>
	                        <li><div class="gmt"><span class="date">17/2</span></div>Finish Microsoft Word Course
		                        <ul class="tools">
		    	                    <li class="edit"></li>
		    	                    <li class="view"></li>
		    	                    <li class="done"></li>
		                        </ul>
		                    </li>
	                    </ul>
	    		        <li><div class="gmt"><span class="time">8:00am</span></div>Finish Microsoft Word Course
	    			        <ul class="tools">
	    				        <li class="edit"></li>
	    				        <li class="view"></li>
	    				        <li class="done"></li>
	    			        </ul>
	    		        </li>
	    		        <li><div class="gmt"><span class="time">9:00am</span></div>Finish Microsoft Word Course
	    			        <ul class="tools">
	    				        <a href=""><li class="edit"></li></a>
	    				        <li class="view"></li>
	    				        <li class="done"></li>
	    			        </ul>
	    		        </li>
				        <li><div class="gmt"><span class="time">10:00am</span></div>Finish Microsoft Word Course
					        <ul class="tools">
	    				        <li class="edit"></li>
	    				        <li class="view"></li>
	    				        <li class="done"></li>
	    			        </ul>
				        </li>
	    		        <li id="add_new"><span id="new"></span></li>
	    	    </ul>
	        </div>
        </div>
        <div id="footer">
 		    <div class="divider"></div>
    	    <ul id="footer_links">
            </ul>
	        <div id="footer_copyright">
			    <span id="c1">&copy; 2014 GROUPE NDUOM WEB BASED LEARNING ENVIRONMENT. ALL RIGHTS RESERVED.</span>
	            <span id="c2">DESIGNED AND DEVELOPED BY QUALTEK GHANA.</span>
	        </div>
 	    </div>
    </form>
</body>

</html>