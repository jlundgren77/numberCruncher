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
		else if (clickVal == "CE") {
			calculationList = calculationList.slice(0, -1);
			displayNumbers(calculationList);
		}
		else if(clickVal === "Ans") {
			calculationList = $(".textbox").html();
		}
		else {
			calculationList+=clickVal;
			displayNumbers(calculationList);
		}
		
		
		
	});

	function calculate(list) {
		var evalulation = eval(list);
		$(".textbox").html(evalulation);
		calculationList = evalulation;
	}
	function displayNumbers(calculationList) {
		$(".textbox").html(calculationList);
	}	
});