$(document).ready(function() {
	var calculationList= "";
	$(".button").on('click', function(event) {
		var clickVal = $(this).val();
		if (clickVal === "=") {
			calculate(calculationList); 
		}
		else if (clickVal === "AC") {
			calculationList = "";
			displayNumbers(calculationList);
		}
		else {
			calculationList+=clickVal;
			displayNumbers(calculationList);
		}
		
		
		
	});

	function calculate(list) {
		console.log(eval(calculationList));
		$(".textbox").html(eval(calculationList));
	}
	function displayNumbers(calculationList) {
		$(".textbox").html(calculationList);
	}	
});