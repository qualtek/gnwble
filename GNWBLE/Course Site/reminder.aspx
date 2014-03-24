<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="reminder.aspx.cs" Inherits="Course_Site.reminder" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Reminder</title>
    <!--Reminder Page-->
      <link rel="stylesheet" href="css/style.css" type="text/css"  />
      <link rel="stylesheet" href="css/jquery-ui.css" />
      <script src="js/jquery-1.8.3.js"></script>
      <script src="js/jquery-ui.js"></script>
      <script src="js/jquery-ui-timepicker-addon.js"></script>
	    <script>
	        $(function () {
	            $("#r_date").datepicker();

	            $('#basic_example_2').timepicker({
	                timeFormat: "hh:mm tt"
	            });
	        });
        </script>
  
      <!-- pop up-->
        <link href="src/facebox.css" media="screen" rel="stylesheet" type="text/css" />
          <script src="src/facebox.js" type="text/javascript"></script>
          <script type="text/javascript">
              jQuery(document).ready(function ($) {
                  $('a[rel*=facebox]').facebox({
                      loadingImage: 'src/loading.gif',
                      closeImage: 'src/closelabel.png'
                  })
              })
          </script>
       <!--End of Pop up-->
     <!--End of Reminder Page-->
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <div id="remind">
	<h3>Reminder</h3>
    <div id="remind_form">
    	<form id="remind_me">
        	<label>Date</label>
            <br />
            <input type="text" name="r_date" required="required" id="r_date" />
            <p />
            <label>Time</label>
            <br />
            <input type="text" name="r_time" required="required" id="basic_example_2" />
            <p />
            <label>To Do</label>
            <br />
            <textarea name="r_todo" required="required" rows="5" cols="33" id="r_todo"></textarea>
            <p />
            <input type="submit" name="r_submit" value="Submit" id="r_submit"  />
        </form>
    </div>
</div>
    </div>
    </form>
</body>
</html>
