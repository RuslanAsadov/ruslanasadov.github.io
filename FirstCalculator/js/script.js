jQuery(document).ready(function($) {
	$("#plus").on('click', function(){
		var val1, val2;
		val1 = $("#v1").val();
		val2 = $("#v2").val();
		val1 = parseInt(val1);
		val2 = parseInt(val2);
		if (isNaN(val1) && isNaN(val2) || isNaN(val1) || isNaN(val2)) {
		$("#result").html("Вы не ввели число");
		}else {
		val3= val1+val2;
		$("#result").html("Ваш ответ = "+val3);
		}
	});
	$("#minus").on("click",function() {
		var val1, val2;
		val1 = $("#v1").val();
		val2 = $("#v2").val();
		val1 = parseInt(val1);
		val2 = parseInt(val2);
		if (isNaN(val1) && isNaN(val2) || isNaN(val1) || isNaN(val2)) {
		$("#result").html("Вы не ввели число");
		}else {
		val3= val1-val2;
		$("#result").html("Ваш ответ = "+val3);
		}
	});
	$("#umnozh").on("click",function() {
		var val1, val2;
		val1 = $("#v1").val();
		val2 = $("#v2").val();
		val1 = parseInt(val1);
		val2 = parseInt(val2);
		if (isNaN(val1) && isNaN(val2) || isNaN(val1) || isNaN(val2)) {
		$("#result").html("Вы не ввели число");
		}else {
		val3= val1*val2;
		$("#result").html("Ваш ответ = "+val3);
		}
	});
	$("#delenie").on("click",function() {
		var val1, val2;
		val1 = $("#v1").val();
		val2 = $("#v2").val();
		val1 = parseInt(val1);
		val2 = parseInt(val2);
		if (isNaN(val1) && isNaN(val2) || isNaN(val1) || isNaN(val2)) {
		$("#result").html("Вы не ввели число");
		}else {
		val3= val1/val2;
		$("#result").html("Ваш ответ = "+val3);
		}
	});	
});