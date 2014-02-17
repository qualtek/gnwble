<%@ Page Title="" Language="C#" MasterPageFile="~/Template.Master" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="Course_Site._default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="scripts" runat="server">
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
                title: {                text: 'PERFORMANCE TO DATE',
                    align: 'center',
                    style: {
                        color:'#eee'
                    },
                    margin:50

                },
                chart: {
                    backgroundColor: '#007070',
                    borderRadius: 0,
                    borderWidth: 0,
                    spacingLeft: 25,
                    spacingRight: 25,
                    spacingTop: 30,
                    spacingBottom: 30,
                    style: {color:'#eee'}
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
                    label: {style: {color: '#eee'}}
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
	                align:'left',
	                x:5,
	                margin:20,
	                style:{
	                    color: '#eee'
	                }
	            },
	            xAxis: {
	                categories: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D' ],
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
	                labels:{ enabled: false}
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
	                data: [5, 3, 4, 7, 2,5,7,8,2,9,5,6]
	            }, {
	                showInLegend: false,
	                name: 'Passes',
	                data: [2, 2, 3, 2, 1,2,3,4,1,1,3,4]
	            }]
	        })
        
	    });
        </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="calendar_noticeBoard_container" runat="server">
    <div class="nb">GN Notice Board</div>
	<ul class="nb_board">
		<li>No posts.</li>
	</ul>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="main_content" runat="server">
    <div id="mainContent"> 
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
            <div class="g-person" data-href="//plus.google.com/116758256878037763445" data-rel="author" data-width="180" ></div>
            <script type="text/javascript">
                (function () {
                    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
                    po.src = 'platform.js';
                    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
                })();
            </script>
            <a href="https://plus.google.com/hangouts" target="_blank">
            	<button type="button" class="btn btn_connect hangout">Connect to Hangout</button>
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
</asp:Content>