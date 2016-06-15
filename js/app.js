$(document).ready(function() {
	var calculationList= [];
	$(".button").on('click', function(event) {
		var clickVal = $(this).val();
		if (clickVal === "=") {
			calculate(calculationList); 
		}
		console.log(clickVal);
		calculationList.push($(this).val());
		
	});

	function calculate(list) {
		console.log(calculationList)
	}	
});