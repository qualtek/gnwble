// JavaScript Document
$(document).ready(function(){
    $('#checkbox1').click(function(){
    if (this.checked) {
    $('#mytextbox1').removeAttr("disabled");
    $('#mytbox1').removeAttr("disabled");
	$('#mytboxs1').removeAttr("disabled");
	$('#mytboxb1').removeAttr("disabled");
	document.getElementById("checkbox2").checked = false;
	$("#mytextbox2,#mytbox2,#mytboxs2,#mytboxb2").attr("disabled", true);
	document.getElementById("checkbox3").checked = false;
	$("#mytextbox3,#mytbox3,#mytboxs3,#mytboxb3").attr("disabled", true);
	document.getElementById("checkbox4").checked = false;
	$("#mytextbox4,#mytbox4,#mytboxs4,#mytboxb4").attr("disabled", true);
	document.getElementById("checkbox5").checked = false;
	$("#mytextbox5,#mytbox5,#mytboxs5,#mytboxb5").attr("disabled", true);
	document.getElementById("checkbox6").checked = false;
	$("#mytextbox6,#mytbox6,#mytboxs6,#mytboxb6").attr("disabled", true);
    }
    else {
    $("#mytextbox1").attr("disabled", true);
    $("#mytbox1").attr("disabled", true);
	$("#mytboxs1").attr("disabled", true);
	$("#mytboxb1").attr("disabled", true);
    }
	
    });
	$('#checkbox2').click(function(){
    if (this.checked) {
    $('#mytextbox2').removeAttr("disabled");
    $('#mytbox2').removeAttr("disabled");
	$('#mytboxs2').removeAttr("disabled");
	$('#mytboxb2').removeAttr("disabled");
	document.getElementById("checkbox1").checked = false;
	$("#mytextbox1,#mytbox1,#mytboxs1,#mytboxb1").attr("disabled", true);
	document.getElementById("checkbox3").checked = false;
	$("#mytextbox3,#mytbox3,#mytboxs3,#mytboxb3").attr("disabled", true);
	document.getElementById("checkbox4").checked = false;
	$("#mytextbox4,#mytbox4,#mytboxs4,#mytboxb4").attr("disabled", true);
	document.getElementById("checkbox5").checked = false;
	$("#mytextbox5,#mytbox5,#mytboxs5,#mytboxb5").attr("disabled", true);
	document.getElementById("checkbox6").checked = false;
	$("#mytextbox6,#mytbox6,#mytboxs6,#mytboxb6").attr("disabled", true);	
    }
    else {
    $("#mytextbox2").attr("disabled", true);
    $("#mytbox2").attr("disabled", true);
	$("#mytboxs2").attr("disabled", true);
	$("#mytboxb2").attr("disabled", true);
    }
	
    });
	$('#checkbox3').click(function(){
    if (this.checked) {
    $('#mytextbox3').removeAttr("disabled");
    $('#mytbox3').removeAttr("disabled");
	$('#mytboxs3').removeAttr("disabled");
	$('#mytboxb3').removeAttr("disabled");
	document.getElementById("checkbox1").checked = false;
	$("#mytextbox1,#mytbox1,#mytboxs1,#mytboxb1").attr("disabled", true);
	document.getElementById("checkbox2").checked = false;
	$("#mytextbox2,#mytbox2,#mytboxs2,#mytboxb2").attr("disabled", true);
	document.getElementById("checkbox4").checked = false;
	$("#mytextbox4,#mytbox4,#mytboxs4,#mytboxb4").attr("disabled", true);
	document.getElementById("checkbox5").checked = false;
	$("#mytextbox5,#mytbox5,#mytboxs5,#mytboxb5").attr("disabled", true);
	document.getElementById("checkbox6").checked = false;
	$("#mytextbox6,#mytbox6,#mytboxs6,#mytboxb6").attr("disabled", true);
    }
    else {
    $("#mytextbox3").attr("disabled", true);
    $("#mytbox3").attr("disabled", true);
	$("#mytboxs3").attr("disabled", true);
	$("#mytboxb3").attr("disabled", true);
    }
	
    });
	$('#checkbox4').click(function(){
    if (this.checked) {
    $('#mytextbox4').removeAttr("disabled");
    $('#mytbox4').removeAttr("disabled");
	$('#mytboxs4').removeAttr("disabled");
	$('#mytboxb4').removeAttr("disabled");
	document.getElementById("checkbox1").checked = false;
	$("#mytextbox1,#mytbox1,#mytboxs1,#mytboxb1").attr("disabled", true);
	document.getElementById("checkbox2").checked = false;
	$("#mytextbox2,#mytbox2,#mytboxs2,#mytboxb2").attr("disabled", true);
	document.getElementById("checkbox3").checked = false;
	$("#mytextbox3,#mytbox3,#mytboxs3,#mytboxb3").attr("disabled", true);
	document.getElementById("checkbox5").checked = false;
	$("#mytextbox5,#mytbox5,#mytboxs5,#mytboxb5").attr("disabled", true);
	document.getElementById("checkbox6").checked = false;
	$("#mytextbox6,#mytbox6,#mytboxs6,#mytboxb6").attr("disabled", true);
	
    }
    else {
    $("#mytextbox4").attr("disabled", true);
    $("#mytbox4").attr("disabled", true);
	$("#mytboxs4").attr("disabled", true);
	$("#mytboxb4").attr("disabled", true);
    }
	
    });
	$('#checkbox5').click(function(){
    if (this.checked) {
    $('#mytextbox5').removeAttr("disabled");
    $('#mytbox5').removeAttr("disabled");
	$('#mytboxs5').removeAttr("disabled");
	$('#mytboxb5').removeAttr("disabled");
	document.getElementById("checkbox1").checked = false;
	$("#mytextbox1,#mytbox1,#mytboxs1,#mytboxb1").attr("disabled", true);
	document.getElementById("checkbox2").checked = false;
	$("#mytextbox2,#mytbox2,#mytboxs2,#mytboxb2").attr("disabled", true);
	document.getElementById("checkbox3").checked = false;
	$("#mytextbox3,#mytbox3,#mytboxs3,#mytboxb3").attr("disabled", true);
	document.getElementById("checkbox4").checked = false;
	$("#mytextbox4,#mytbox4,#mytboxs4,#mytboxb4").attr("disabled", true);
	document.getElementById("checkbox6").checked = false;
	$("#mytextbox6,#mytbox6,#mytboxs6,#mytboxb6").attr("disabled", true);
    }
    else {
    $("#mytextbox5").attr("disabled", true);
    $("#mytbox5").attr("disabled", true);
	$("#mytboxs5").attr("disabled", true);
	$("#mytboxb5").attr("disabled", true);
    }
	
    });
	$('#checkbox6').click(function(){
    if (this.checked) {
    $('#mytextbox6').removeAttr("disabled");
    $('#mytbox6').removeAttr("disabled");
	$('#mytboxs6').removeAttr("disabled");
	$('#mytboxb6').removeAttr("disabled");
	$("#checkbox1,#checkbox2").removeAttr("checked");
	$("#mytextbox1,#mytbox1,#mytboxs1,#mytboxb1").attr("disabled", true);
	//document.getElementById("checkbox2").checked = false;
	$("#mytextbox2,#mytbox2,#mytboxs2,#mytboxb2").attr("disabled", true);
	document.getElementById("checkbox3").checked = false;
	$("#mytextbox3,#mytbox3,#mytboxs3,#mytboxb3").attr("disabled", true);
	document.getElementById("checkbox4").checked = false;
	$("#mytextbox4,#mytbox4,#mytboxs4,#mytboxb4").attr("disabled", true);
	document.getElementById("checkbox5").checked = false;
	$("#mytextbox5,#mytbox5,#mytboxs5,#mytboxb5").attr("disabled", true);
    }
    else {
    $("#mytextbox6").attr("disabled", true);
    $("#mytbox6").attr("disabled", true);
	$("#mytboxs6").attr("disabled", true);
	$("#mytboxb6").attr("disabled", true);
    }
	
    });
	$('#checkbox7').click(function(){
    if (this.checked) {
    $('#mytextbox7').removeAttr("disabled");
    $('#mytbox7').removeAttr("disabled");
	$('#mytboxs7').removeAttr("disabled");
	$('#mytboxb7').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox7").attr("disabled", true);
    $("#mytbox7").attr("disabled", true);
	$("#mytboxs7").attr("disabled", true);
	$("#mytboxb7").attr("disabled", true);
    }
	
    });
	$('#checkbox8').click(function(){
    if (this.checked) {
    $('#mytextbox8').removeAttr("disabled");
    $('#mytbox8').removeAttr("disabled");
	$('#mytboxs8').removeAttr("disabled");
	$('#mytboxb8').removeAttr("disabled");
	$("#checkbox7,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox8").attr("disabled", true);
    $("#mytbox8").attr("disabled", true);
	$("#mytboxs8").attr("disabled", true);
	$("#mytboxb8").attr("disabled", true);
    }
	
    });
	$('#checkbox9').click(function(){
    if (this.checked) {
    $('#mytextbox9').removeAttr("disabled");
    $('#mytbox9').removeAttr("disabled");
	$('#mytboxs9').removeAttr("disabled");
	$('#mytboxb9').removeAttr("disabled");
	$("#checkbox8,#checkbox7,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox9").attr("disabled", true);
    $("#mytbox9").attr("disabled", true);
	$("#mytboxs9").attr("disabled", true);
	$("#mytboxb9").attr("disabled", true);
    }
	
    });
	$('#checkbox10').click(function(){
    if (this.checked) {
    $('#mytextbox10').removeAttr("disabled");
    $('#mytbox10').removeAttr("disabled");
	$('#mytboxs10').removeAttr("disabled");
	$('#mytboxb10').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox7,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox10").attr("disabled", true);
    $("#mytbox10").attr("disabled", true);
	$("#mytboxs10").attr("disabled", true);
	$("#mytboxb10").attr("disabled", true);
    }
	
    });
	$('#checkbox11').click(function(){
    if (this.checked) {
    $('#mytextbox11').removeAttr("disabled");
	$('#mytbox11').removeAttr("disabled");
	$('#mytboxs11').removeAttr("disabled");
	$('#mytboxb11').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox7,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox11").attr("disabled", true);
	$("#mytbox11").attr("disabled", true);
	$("#mytboxs11").attr("disabled", true);
	$("#mytboxb11").attr("disabled", true);
    }
	
    });
	$('#checkbox12').click(function(){
    if (this.checked) {
    $('#mytextbox12').removeAttr("disabled");
	$('#mytbox12').removeAttr("disabled");
	$('#mytboxs12').removeAttr("disabled");
	$('#mytboxb12').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox7,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox12").attr("disabled", true);
	$("#mytbox12").attr("disabled", true);
	$("#mytboxs12").attr("disabled", true);
	$("#mytboxb12").attr("disabled", true);
    }
	
    });
	$('#checkbox13').click(function(){
    if (this.checked) {
    $('#mytextbox13').removeAttr("disabled");
	$('#mytbox13').removeAttr("disabled");
	$('#mytboxs13').removeAttr("disabled");
	$('#mytboxb13').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox7,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox13").attr("disabled", true);
	$("#mytbox13").attr("disabled", true);
	$("#mytboxs13").attr("disabled", true);
	$("#mytboxb13").attr("disabled", true);
    }
	
    });
	$('#checkbox14').click(function(){
    if (this.checked) {
    $('#mytextbox14').removeAttr("disabled");
	$('#mytbox14').removeAttr("disabled");
	$('#mytboxs14').removeAttr("disabled");
	$('#mytboxb14').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox7,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox14").attr("disabled", true);
	$("#mytbox14").attr("disabled", true);
	$("#mytboxs14").attr("disabled", true);
	$("#mytboxb14").attr("disabled", true);
    }
	
    });
	$('#checkbox15').click(function(){
    if (this.checked) {
    $('#mytextbox15').removeAttr("disabled");
	$('#mytbox15').removeAttr("disabled");
	$('#mytboxs15').removeAttr("disabled");
	$('#mytboxb15').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox7,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox15").attr("disabled", true);
	$("#mytbox15").attr("disabled", true);
	$("#mytboxs15").attr("disabled", true);
	$("#mytboxb15").attr("disabled", true);
    }
	
    });
	$('#checkbox16').click(function(){
    if (this.checked) {
    $('#mytextbox16').removeAttr("disabled");
	$('#mytbox16').removeAttr("disabled");
	$('#mytboxs16').removeAttr("disabled");
	$('#mytboxb16').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox7,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox16").attr("disabled", true);
	$("#mytbox16").attr("disabled", true);
	$("#mytboxs16").attr("disabled", true);
	$("#mytboxb16").attr("disabled", true);
    }
	
    });
	$('#checkbox17').click(function(){
    if (this.checked) {
    $('#mytextbox17').removeAttr("disabled");
	$('#mytbox17').removeAttr("disabled");
	$('#mytboxs17').removeAttr("disabled");
	$('#mytboxb17').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox7,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox17").attr("disabled", true);
	$("#mytbox17").attr("disabled", true);
	$("#mytboxs17").attr("disabled", true);
	$("#mytboxb17").attr("disabled", true);
    }
	
    });
	$('#checkbox18').click(function(){
    if (this.checked) {
    $('#mytextbox18').removeAttr("disabled");
	$('#mytbox18').removeAttr("disabled");
	$('#mytboxs18').removeAttr("disabled");
	$('#mytboxb18').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox7,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox18").attr("disabled", true);
	$("#mytbox18").attr("disabled", true);
	$("#mytboxs18").attr("disabled", true);
	$("#mytboxb18").attr("disabled", true);
    }
	
    });
	$('#checkbox19').click(function(){
    if (this.checked) {
    $('#mytextbox19').removeAttr("disabled");
	$('#mytbox19').removeAttr("disabled");
	$('#mytboxs19').removeAttr("disabled");
	$('#mytboxb19').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox7,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox19").attr("disabled", true);
	$("#mytbox19").attr("disabled", true);
	$("#mytboxs19").attr("disabled", true);
	$("#mytboxb19").attr("disabled", true);
    }
	
    });
	$('#checkbox20').click(function(){
    if (this.checked) {
    $('#mytextbox20').removeAttr("disabled");
	$('#mytbox20').removeAttr("disabled");
	$('#mytboxs20').removeAttr("disabled");
	$('#mytboxb20').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox7,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox20").attr("disabled", true);
	$("#mytbox20").attr("disabled", true);
	$("#mytboxs20").attr("disabled", true);
	$("#mytboxb20").attr("disabled", true);
    }
	
    });
	$('#checkbox21').click(function(){
    if (this.checked) {
    $('#mytextbox21').removeAttr("disabled");
	$('#mytbox21').removeAttr("disabled");
	$('#mytboxs21').removeAttr("disabled");
	$('#mytboxb21').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox7,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox21").attr("disabled", true);
	$("#mytbox21").attr("disabled", true);
	$("#mytboxs21").attr("disabled", true);
	$("#mytboxb21").attr("disabled", true);
    }
	
    });
	$('#checkbox22').click(function(){
    if (this.checked) {
    $('#mytextbox22').removeAttr("disabled");
	$('#mytbox22').removeAttr("disabled");
	$('#mytboxs22').removeAttr("disabled");
	$('#mytboxb22').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox7,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox22").attr("disabled", true);
	$("#mytbox22").attr("disabled", true);
	$("#mytboxs22").attr("disabled", true);
	$("#mytboxb22").attr("disabled", true);
    }
	
    });
	$('#checkbox23').click(function(){
    if (this.checked) {
    $('#mytextbox23').removeAttr("disabled");
	$('#mytbox23').removeAttr("disabled");
	$('#mytboxs23').removeAttr("disabled");
	$('#mytboxb23').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox7,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox23").attr("disabled", true);
	$("#mytbox23").attr("disabled", true);
	$("#mytboxs23").attr("disabled", true);
	$("#mytboxb23").attr("disabled", true);
    }
	
   });
	$('#checkbox24').click(function(){
    if (this.checked) {
    $('#mytextbox24').removeAttr("disabled");
	$('#mytbox24').removeAttr("disabled");
	$('#mytboxs24').removeAttr("disabled");
	$('#mytboxb24').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox7,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox24").attr("disabled", true);
	$("#mytbox24").attr("disabled", true);
	$("#mytboxs24").attr("disabled", true);
	$("#mytboxb24").attr("disabled", true);
    }
	
    });
	$('#checkbox25').click(function(){
    if (this.checked) {
    $('#mytextbox25').removeAttr("disabled");
	$('#mytbox25').removeAttr("disabled");
	$('#mytboxs25').removeAttr("disabled");
	$('#mytboxb25').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox7,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox25").attr("disabled", true);
	$("#mytbox25").attr("disabled", true);
	$("#mytboxs25").attr("disabled", true);
	$("#mytboxb25").attr("disabled", true);
    }
	
    });
	$('#checkbox26').click(function(){
    if (this.checked) {
    $('#mytextbox26').removeAttr("disabled");
	$('#mytbox26').removeAttr("disabled");
	$('#mytboxs26').removeAttr("disabled");
	$('#mytboxb26').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox7,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox26").attr("disabled", true);
	$("#mytbox26").attr("disabled", true);
	$("#mytboxs26").attr("disabled", true);
	$("#mytboxb26").attr("disabled", true);
    }
	
    });
	$('#checkbox27').click(function(){
    if (this.checked) {
    $('#mytextbox27').removeAttr("disabled");
	$('#mytbox27').removeAttr("disabled");
	$('#mytboxs27').removeAttr("disabled");
	$('#mytboxb27').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox7,#checkbox28,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox27").attr("disabled", true);
	$("#mytbox27").attr("disabled", true);
	$("#mytboxs27").attr("disabled", true);
	$("#mytboxb27").attr("disabled", true);
    }
	
    });
	$('#checkbox28').click(function(){
    if (this.checked) {
    $('#mytextbox28').removeAttr("disabled");
	$('#mytbox28').removeAttr("disabled");
	$('#mytboxs28').removeAttr("disabled");
	$('#mytboxb28').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox7,#checkbox29,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox28").attr("disabled", true);
	$("#mytbox28").attr("disabled", true);
	$("#mytboxs28").attr("disabled", true);
	$("#mytboxb28").attr("disabled", true);
    }
	
    });
	$('#checkbox29').click(function(){
    if (this.checked) {
    $('#mytextbox29').removeAttr("disabled");
	$('#mytbox29').removeAttr("disabled");
	$('#mytboxs29').removeAttr("disabled");
	$('#mytboxb29').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox7,#checkbox30,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox29").attr("disabled", true);
	$("#mytbox29").attr("disabled", true);
	$("#mytboxs29").attr("disabled", true);
	$("#mytboxb29").attr("disabled", true);
    }
	
    });
	$('#checkbox30').click(function(){
    if (this.checked) {
    $('#mytextbox30').removeAttr("disabled");
	$('#mytbox30').removeAttr("disabled");
	$('#mytboxs30').removeAttr("disabled");
	$('#mytboxb30').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox7,#checkbox31,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox30").attr("disabled", true);
	$("#mytbox30").attr("disabled", true);
	$("#mytboxs30").attr("disabled", true);
	$("#mytboxb30").attr("disabled", true);
    }
	
    });
	$('#checkbox31').click(function(){
    if (this.checked) {
    $('#mytextbox31').removeAttr("disabled");
	$('#mytbox31').removeAttr("disabled");
	$('#mytboxs31').removeAttr("disabled");
	$('#mytboxb31').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox31").attr("disabled", true);
	$("#mytbox31").attr("disabled", true);
	$("#mytboxs31").attr("disabled", true);
	$("#mytboxb31").attr("disabled", true);
    }
	
    });
	//fhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
	$('#checkbox32').click(function(){
    if (this.checked) {
    $('#mytextbox32').removeAttr("disabled");
	$('#mytbox32').removeAttr("disabled");
	$('#mytboxs32').removeAttr("disabled");
	$('#mytboxb32').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox31,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox32").attr("disabled", true);
	$("#mytbox32").attr("disabled", true);
	$("#mytboxs32").attr("disabled", true);
	$("#mytboxb32").attr("disabled", true);
    }
	
    });
	$('#checkbox33').click(function(){
    if (this.checked) {
    $('#mytextbox33').removeAttr("disabled");
	$('#mytbox33').removeAttr("disabled");
	$('#mytboxs33').removeAttr("disabled");
	$('#mytboxb33').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox31,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox33").attr("disabled", true);
	$("#mytbox33").attr("disabled", true);
	$("#mytboxs33").attr("disabled", true);
	$("#mytboxb33").attr("disabled", true);
    }
	
    });
	$('#checkbox34').click(function(){
    if (this.checked) {
    $('#mytextbox34').removeAttr("disabled");
	$('#mytbox34').removeAttr("disabled");
	$('#mytboxs34').removeAttr("disabled");
	$('#mytboxb34').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox31,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox34").attr("disabled", true);
	$("#mytbox34").attr("disabled", true);
	$("#mytboxs34").attr("disabled", true);
	$("#mytboxb34").attr("disabled", true);
    }
	
    });
	$('#checkbox35').click(function(){
    if (this.checked) {
    $('#mytextbox35').removeAttr("disabled");
	$('#mytbox35').removeAttr("disabled");
	$('#mytboxs35').removeAttr("disabled");
	$('#mytboxb35').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox31,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox35").attr("disabled", true);
	$("#mytbox35").attr("disabled", true);
	$("#mytboxs35").attr("disabled", true);
	$("#mytboxb35").attr("disabled", true);
    }
	
    });
	$('#checkbox36').click(function(){
    if (this.checked) {
    $('#mytextbox36').removeAttr("disabled");
	$('#mytbox36').removeAttr("disabled");
	$('#mytboxs36').removeAttr("disabled");
	$('#mytboxb36').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox31,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox36").attr("disabled", true);
	$("#mytbox36").attr("disabled", true);
	$("#mytboxs36").attr("disabled", true);
	$("#mytboxb36").attr("disabled", true);
    }
	
    });
	$('#checkbox37').click(function(){
    if (this.checked) {
    $('#mytextbox37').removeAttr("disabled");
	$('#mytbox37').removeAttr("disabled");
	$('#mytboxs37').removeAttr("disabled");
	$('#mytboxb37').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox31,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox37").attr("disabled", true);
	$("#mytbox37").attr("disabled", true);
	$("#mytboxs37").attr("disabled", true);
	$("#mytboxb37").attr("disabled", true);
    }
	
    });
	$('#checkbox38').click(function(){
    if (this.checked) {
    $('#mytextbox38').removeAttr("disabled");
	$('#mytbox38').removeAttr("disabled");
	$('#mytboxs38').removeAttr("disabled");
	$('#mytboxb38').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox31,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox38").attr("disabled", true);
	$("#mytbox38").attr("disabled", true);
	$("#mytboxs38").attr("disabled", true);
	$("#mytboxb38").attr("disabled", true);
    }
	
    });
	$('#checkbox39').click(function(){
    if (this.checked) {
    $('#mytextbox39').removeAttr("disabled");
	$('#mytbox39').removeAttr("disabled");
	$('#mytboxs39').removeAttr("disabled");
	$('#mytboxb39').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox31,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox39").attr("disabled", true);
	$("#mytbox39").attr("disabled", true);
	$("#mytboxs39").attr("disabled", true);
	$("#mytboxb39").attr("disabled", true);
    }
	
    });
	$('#checkbox40').click(function(){
    if (this.checked) {
    $('#mytextbox40').removeAttr("disabled");
	$('#mytbox40').removeAttr("disabled");
	$('#mytboxs40').removeAttr("disabled");
	$('#mytboxb40').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox31,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox40").attr("disabled", true);
	$("#mytbox40").attr("disabled", true);
	$("#mytboxs40").attr("disabled", true);
	$("#mytboxb40").attr("disabled", true);
    }
	
    });
	$('#checkbox41').click(function(){
    if (this.checked) {
    $('#mytextbox41').removeAttr("disabled");
	$('#mytbox41').removeAttr("disabled");
	$('#mytboxs41').removeAttr("disabled");
	$('#mytboxb41').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox31,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox41").attr("disabled", true);
	$("#mytbox41").attr("disabled", true);
	$("#mytboxs41").attr("disabled", true);
	$("#mytboxb41").attr("disabled", true);
    }
	
    });
	$('#checkbox42').click(function(){
    if (this.checked) {
    $('#mytextbox42').removeAttr("disabled");
	$('#mytbox42').removeAttr("disabled");
	$('#mytboxs42').removeAttr("disabled");
	$('#mytboxb42').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox31,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox42").attr("disabled", true);
	$("#mytbox42").attr("disabled", true);
	$("#mytboxs42").attr("disabled", true);
	$("#mytboxb42").attr("disabled", true);
    }
	
    });
	$('#checkbox43').click(function(){
    if (this.checked) {
    $('#mytextbox43').removeAttr("disabled");
	$('#mytbox43').removeAttr("disabled");
	$('#mytboxs43').removeAttr("disabled");
	$('#mytboxb43').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox31,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox43").attr("disabled", true);
	$("#mytbox43").attr("disabled", true);
	$("#mytboxs43").attr("disabled", true);
	$("#mytboxb43").attr("disabled", true);
    }
	
    });
	$('#checkbox44').click(function(){
    if (this.checked) {
    $('#mytextbox44').removeAttr("disabled");
	$('#mytbox44').removeAttr("disabled");
	$('#mytboxs44').removeAttr("disabled");
	$('#mytboxb44').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox31,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox44").attr("disabled", true);
	$("#mytbox44").attr("disabled", true);
	$("#mytboxs44").attr("disabled", true);
	$("#mytboxb44").attr("disabled", true);
    }
	
    });
	$('#checkbox45').click(function(){
    if (this.checked) {
    $('#mytextbox45').removeAttr("disabled");
	$('#mytbox45').removeAttr("disabled");
	$('#mytboxs45').removeAttr("disabled");
	$('#mytboxb45').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox31,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox45").attr("disabled", true);
	$("#mytbox45").attr("disabled", true);
	$("#mytboxs45").attr("disabled", true);
	$("#mytboxb45").attr("disabled", true);
    }
	
    });
	$('#checkbox46').click(function(){
    if (this.checked) {
    $('#mytextbox46').removeAttr("disabled");
	$('#mytbox46').removeAttr("disabled");
	$('#mytboxs46').removeAttr("disabled");
	$('#mytboxb46').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox31,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox46").attr("disabled", true);
	$("#mytbox46").attr("disabled", true);
	$("#mytboxs46").attr("disabled", true);
	$("#mytboxb46").attr("disabled", true);
    }
	
    });
	$('#checkbox47').click(function(){
    if (this.checked) {
    $('#mytextbox47').removeAttr("disabled");
	$('#mytbox47').removeAttr("disabled");
	$('#mytboxs47').removeAttr("disabled");
	$('#mytboxb47').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox31,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox47").attr("disabled", true);
	$("#mytbox47").attr("disabled", true);
	$("#mytboxs47").attr("disabled", true);
	$("#mytboxb47").attr("disabled", true);
    }
	
    });
	$('#checkbox48').click(function(){
    if (this.checked) {
    $('#mytextbox48').removeAttr("disabled");
	$('#mytbox48').removeAttr("disabled");
	$('#mytboxs48').removeAttr("disabled");
	$('#mytboxb48').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox31,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox48").attr("disabled", true);
	$("#mytbox48").attr("disabled", true);
	$("#mytboxs48").attr("disabled", true);
	$("#mytboxb48").attr("disabled", true);
    }
	
    });
	$('#checkbox49').click(function(){
    if (this.checked) {
    $('#mytextbox49').removeAttr("disabled");
	$('#mytbox49').removeAttr("disabled");
	$('#mytboxs49').removeAttr("disabled");
	$('#mytboxb49').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox31,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox49").attr("disabled", true);
	$("#mytbox49").attr("disabled", true);
	$("#mytboxs49").attr("disabled", true);
	$("#mytboxb49").attr("disabled", true);
    }
	
    });
	$('#checkbox50').click(function(){
    if (this.checked) {
    $('#mytextbox50').removeAttr("disabled");
	$('#mytbox50').removeAttr("disabled");
	$('#mytboxs50').removeAttr("disabled");
	$('#mytboxb50').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox31,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox50").attr("disabled", true);
	$("#mytbox50").attr("disabled", true);
	$("#mytboxs50").attr("disabled", true);
	$("#mytboxb50").attr("disabled", true);
    }
	
    });
	$('#checkbox51').click(function(){
    if (this.checked) {
    $('#mytextbox51').removeAttr("disabled");
	$('#mytbox51').removeAttr("disabled");
	$('#mytboxs51').removeAttr("disabled");
	$('#mytboxb51').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox31,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox51").attr("disabled", true);
	$("#mytbox51").attr("disabled", true);
	$("#mytboxs51").attr("disabled", true);
	$("#mytboxb51").attr("disabled", true);
    }
	
    });
	$('#checkbox52').click(function(){
    if (this.checked) {
    $('#mytextbox52').removeAttr("disabled");
	$('#mytbox52').removeAttr("disabled");
	$('#mytboxs52').removeAttr("disabled");
	$('#mytboxb52').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox31,#checkbox53,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox52").attr("disabled", true);
	$("#mytbox52").attr("disabled", true);
	$("#mytboxs52").attr("disabled", true);
	$("#mytboxb52").attr("disabled", true);
    }
	
    });
	$('#checkbox53').click(function(){
    if (this.checked) {
    $('#mytextbox53').removeAttr("disabled");
	$('#mytbox53').removeAttr("disabled");
	$('#mytboxs53').removeAttr("disabled");
	$('#mytboxb53').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox31,#checkbox54,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox53").attr("disabled", true);
	$("#mytbox53").attr("disabled", true);
	$("#mytboxs53").attr("disabled", true);
	$("#mytboxb53").attr("disabled", true);
    }
	
    });
	$('#checkbox54').click(function(){
    if (this.checked) {
    $('#mytextbox54').removeAttr("disabled");
	$('#mytbox54').removeAttr("disabled");
	$('#mytboxs54').removeAttr("disabled");
	$('#mytboxb54').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox31,#checkbox55,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox54").attr("disabled", true);
	$("#mytbox54").attr("disabled", true);
	$("#mytboxs54").attr("disabled", true);
	$("#mytboxb54").attr("disabled", true);
    }
	
    });
	$('#checkbox55').click(function(){
    if (this.checked) {
    $('#mytextbox55').removeAttr("disabled");
	$('#mytbox55').removeAttr("disabled");
	$('#mytboxs55').removeAttr("disabled");
	$('#mytboxb55').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox31,#checkbox56").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31,#mytextbox56,#mytbox56,#mytboxs56,#mytboxb56").attr("disabled", true);
    }
    else {
    $("#mytextbox55").attr("disabled", true);
	$("#mytbox55").attr("disabled", true);
	$("#mytboxs55").attr("disabled", true);
	$("#mytboxb55").attr("disabled", true);
    }
	
    });
	$('#checkbox56').click(function(){
    if (this.checked) {
    $('#mytextbox56').removeAttr("disabled");
	$('#mytbox56').removeAttr("disabled");
	$('#mytboxs56').removeAttr("disabled");
	$('#mytboxb56').removeAttr("disabled");
	$("#checkbox8,#checkbox9,#checkbox10,#checkbox11,#checkbox12,#checkbox13,#checkbox14,#checkbox15,#checkbox16,#checkbox17,#checkbox18,#checkbox19,#checkbox20,#checkbox21,#checkbox22,#checkbox23,#checkbox24,#checkbox25,#checkbox26,#checkbox27,#checkbox28,#checkbox29,#checkbox30,#checkbox7,#checkbox32,#checkbox33,#checkbox34,#checkbox35,#checkbox36,#checkbox37,#checkbox38,#checkbox39,#checkbox40,#checkbox41,#checkbox42,#checkbox43,#checkbox44,#checkbox45,#checkbox46,#checkbox47,#checkbox48,#checkbox49,#checkbox50,#checkbox51,#checkbox52,#checkbox53,#checkbox54,#checkbox55,#checkbox31").removeAttr("checked");
	$("#mytextbox8,#mytbox8,#mytboxs8,#mytboxb8,#mytextbox9,#mytbox9,#mytboxs9,#mytboxb9,#mytextbox10,#mytbox10,#mytboxs10,#mytboxb10,#mytextbox11,#mytbox11,#mytboxs11,#mytboxb11,#mytextbox12,#mytbox12,#mytboxs12,#mytboxb12,#mytextbox13,#mytbox13,#mytboxs13,#mytboxb13,#mytextbox14,#mytbox14,#mytboxs14,#mytboxb14,#mytextbox15,#mytbox15,#mytboxs15,#mytboxb15,#mytextbox16,#mytbox16,#mytboxs16,#mytboxb16,#mytextbox17,#mytbox17,#mytboxs17,#mytboxb17,#mytextbox18,#mytbox18,#mytboxs18,#mytboxb18,#mytextbox19,#mytbox19,#mytboxs19,#mytboxb19,#mytextbox20,#mytbox20,#mytboxs20,#mytboxb20,#mytextbox21,#mytbox21,#mytboxs21,#mytboxb21,#mytextbox22,#mytbox22,#mytboxs22,#mytboxb22,#mytextbox23,#mytbox23,#mytboxs23,#mytboxb23,#mytextbox24,#mytbox24,#mytboxs24,#mytboxb24,#mytextbox25,#mytbox25,#mytboxs25,#mytboxb25,#mytextbox26,#mytbox26,#mytboxs26,#mytboxb26,#mytextbox27,#mytbox27,#mytboxs27,#mytboxb27,#mytextbox28,#mytbox28,#mytboxs28,#mytboxb28,#mytextbox29,#mytbox29,#mytboxs29,#mytboxb29,#mytextbox30,#mytbox30,#mytboxs30,#mytboxb30,#mytextbox7,#mytbox7,#mytboxs7,#mytboxb7,#mytextbox32,#mytbox32,#mytboxs32,#mytboxb32,#mytextbox33,#mytbox33,#mytboxs33,#mytboxb33,#mytextbox34,#mytbox34,#mytboxs34,#mytboxb34,#mytextbox35,#mytbox35,#mytboxs35,#mytboxb35,#mytextbox36,#mytbox36,#mytboxs36,#mytboxb36,#mytextbox37,#mytbox37,#mytboxs37,#mytboxb37,#mytextbox38,#mytbox38,#mytboxs38,#mytboxb38,#mytextbox39,#mytbox39,#mytboxs39,#mytboxb39,#mytextbox40,#mytbox40,#mytboxs40,#mytboxb40,#mytextbox41,#mytbox41,#mytboxs41,#mytboxb41,#mytextbox42,#mytbox42,#mytboxs42,#mytboxb42,#mytextbox43,#mytbox43,#mytboxs43,#mytboxb43,#mytextbox44,#mytbox44,#mytboxs44,#mytboxb44,#mytextbox45,#mytbox45,#mytboxs45,#mytboxb45,#mytextbox46,#mytbox46,#mytboxs46,#mytboxb46,#mytextbox47,#mytbox47,#mytboxs47,#mytboxb47,#mytextbox48,#mytbox48,#mytboxs48,#mytboxb48,#mytextbox49,#mytbox49,#mytboxs49,#mytboxb49,#mytextbox50,#mytbox50,#mytboxs50,#mytboxb50,#mytextbox51,#mytbox51,#mytboxs51,#mytboxb51,#mytextbox52,#mytbox52,#mytboxs52,#mytboxb52,#mytextbox53,#mytbox53,#mytboxs53,#mytboxb53,#mytextbox54,#mytbox54,#mytboxs54,#mytboxb54,#mytextbox55,#mytbox55,#mytboxs55,#mytboxb55,#mytextbox31,#mytbox31,#mytboxs31,#mytboxb31").attr("disabled", true);
    }
    else {
    $("#mytextbox56").attr("disabled", true);
	$("#mytbox56").attr("disabled", true);
	$("#mytboxs56").attr("disabled", true);
	$("#mytboxb56").attr("disabled", true);
    }
	
    });
	$('#checkbox100').click(function(){
    if (this.checked) {
    $('#mytextbox100').removeAttr("disabled");
	$('#mytbox100').removeAttr("disabled");
	$('#mytboxs100').removeAttr("disabled");
	$('#mytboxb100').removeAttr("disabled");
    }
    else {
    $("#mytextbox100").attr("disabled", true);
	$("#mytbox100").attr("disabled", true);
	$("#mytboxs100").attr("disabled", true);
	$("#mytboxb100").attr("disabled", true);
    }
	
    });
});
