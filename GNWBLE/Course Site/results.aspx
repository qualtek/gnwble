<%@ Page Title="" Language="C#" MasterPageFile="~/Template.Master" AutoEventWireup="true" CodeBehind="results.aspx.cs" Inherits="Course_Site.results" %>
<asp:Content ID="Content1" ContentPlaceHolderID="title" runat="server">
    Results Analytics | GNWBLE
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="scripts" runat="server">
    <link type="text/css" rel="stylesheet" href="css/result_page.css" />
    <!--For Pie Chart-->
    <script type="text/javascript" src="js/jquery.min.js"></script>
	<script> var jQ = jQuery.noConflict();</script>

    <script type="text/javascript">
        jQ(function () {
            var chart;

            jQ(document).ready(function () {

                // Build the chart
                jQ('#pieChart').highcharts({
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false
                    },
                    title: {
                        text: 'Course Statistics'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false
                            },
                            showInLegend: true
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Percentage',
                        data: [
		                    ['Incomplete', 35.0],
		                    {
		                        name: 'Failed',
		                        y: 10.0,
		                        sliced: true,
		                        selected: true
		                    },
		                    ['Passed', 55.0]
                        ]
                    }]
                });
            });

        });
	</script>
        
    <script src="js/highcharts.js"></script>
	<script src="js/modules/exporting.js"></script>
    
    <!--For Performance Chart-->
    <script type="text/javascript">
        jQ(function () {
            jQ('#container2').highcharts({
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
                    spacingTop: 15,
                    spacingBottom: 15,
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
                    categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'],
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
                    data: [7.0, 16.9, 3, 5, 2, 21.5, 7.0, 16.9, 3, 5, 2, 21.5]
                }],
                plotBands: [{
                    label: { style: { color: '#eee' } }
                }]
            });
        });
	</script>
    
    <!--Data Table-->
    <style type="text/css" title="currentStyle">
		@import "css/datatable/demo_page.css";
		@import "css/datatable/demo_table_jui.css";
		@import "css/datatable/jquery-ui-1.8.4.custom.css";
	</style>
	<script type="text/javascript" language="javascript" src="js/datatable/jquery.js"></script>
	<script type="text/javascript" language="javascript" src="js/datatable/jquery.dataTables.js"></script>
	<script type="text/javascript" charset="utf-8">
	    $(document).ready(function () {
	        $('#example').dataTable({
	            "bJQueryUI": true,
	            "sPaginationType": "full_numbers"
	        });
	    });
	</script>
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
	<li class="active"><a href="results.aspx">Achievements</a></li>
	<li><a href="reminder.aspx">Reminders</a></li>
	<li><div id='cse' style='width: 100%;'>Loading...</div></li>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="main_content" runat="server">
    <div id="mainContent">
        <div id="buttonContainer">
            <div class="btn btn_courses completed"><h4>50</h4> Courses Completed</div>
            <div class="btn btn_courses assigned"><h4>10</h4> Courses Assigned</div>
        </div>
        <div class="bar2 right">
            <div id="container2">
                <!--Performance Graph-->
            </div>
        </div>
        <div id="best_worst_course">
        	<div class="best course">
            	<h4>Best Course Results</h4>
                <asp:GridView ID="GridView1" runat="server"></asp:GridView>
                <table class="course_tbl" cellpadding="3" cellspacing="1" >
                	<tr>
                    	<th>Course</th>
                        <th>Result</th>
                    </tr>
                    <tr>
                    	<td>Microsoft Office</td>
                        <td>70%</td>
                    </tr>
                    <tr>
                    	<td>Microsoft Office</td>
                        <td>70%</td>
                    </tr>
                    <tr>
                    	<td>Microsoft Office</td>
                        <td>70%</td>
                    </tr>
                    <tr>
                    	<td>Microsoft Office</td>
                        <td>70%</td>
                    </tr>
                    <tr>
                    	<td>Microsoft Office</td>
                        <td>70%</td>
                    </tr>
                </table>
            </div>
            <div class="worst course">
            	<h4>Worst Course Results</h4>
                <table class="course_tbl" cellpadding="3" cellspacing="1" >
                	<tr>
                    	<th>Course</th>
                        <th>Result</th>
                    </tr>
                    <tr>
                    	<td>Microsoft Office</td>
                        <td>70%</td>
                    </tr>
                    <tr>
                    	<td>Microsoft Office</td>
                        <td>70%</td>
                    </tr>
                    <tr>
                    	<td>Microsoft Office</td>
                        <td>70%</td>
                    </tr>
                    <tr>
                    	<td>Microsoft Office</td>
                        <td>70%</td>
                    </tr>
                    <tr>
                    	<td>Microsoft Office</td>
                        <td>70%</td>
                    </tr>
                </table>
            </div>
        </div>
		<div id="pieChart" >
		</div>
        <div id="demo">
          <table cellpadding="0" cellspacing="0" border="0" class="display" id="example">
              <thead>
                  <tr>
                      <th>Rendering engine</th>
                      <th>Browser</th>
                      <th>Platform(s)</th>
                      <th>Engine version</th>
                      <th width="12%">CSS grade</th>
                  </tr>
              </thead>
              <tfoot>
                  <tr>
                      <th>Rendering engine</th>
                      <th>Browser</th>
                      <th>Platform(s)</th>
                      <th>Engine version</th>
                      <th>CSS grade</th>
                  </tr>
              </tfoot>
              <tbody>
                  <tr class="odd gradeX">
                      <td>Trident</td>
                      <td>Internet
                           Explorer 4.0</td>
                      <td>Win 95+</td>
                      <td class="center">4</td>
                      <td class="center">X</td>
                  </tr>
                  <tr class="odd gradeC">
                      <td>Trident</td>
                      <td>Internet
                           Explorer 5.0</td>
                      <td>Win 95+</td>
                      <td class="center">5</td>
                      <td class="center">C</td>
                  </tr>
                  <tr class="odd gradeA">
                      <td>Trident</td>
                      <td>Internet
                           Explorer 5.5</td>
                      <td>Win 95+</td>
                      <td class="center">5.5</td>
                      <td class="center">A</td>
                  </tr>
                  <tr class="odd gradeA">
                      <td>Trident</td>
                      <td>Internet
                           Explorer 6</td>
                      <td>Win 98+</td>
                      <td class="center">6</td>
                      <td class="center">A</td>
                  </tr>
                  <tr class="odd gradeA">
                      <td>Trident</td>
                      <td>Internet Explorer 7</td>
                      <td>Win XP SP2+</td>
                      <td class="center">7</td>
                      <td class="center">A</td>
                  </tr>
              </tbody>
          </table>
		</div>
    </div>
</asp:Content>
