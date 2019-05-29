(calculator => {

	let topNo = "";
	let bottomNo = "";
	let solution = "";

	$("button").click(addToBottomOrTop);
	$("#equalButton").click(equalize);
	$("#ac").click(resetAll);
	$("#ce").click(resetBottom);

	function addToBottomOrTop(){
		let buttonValue = $(this).val();
		if (!isNaN(buttonValue) || buttonValue === '.'){
			addToBottom(buttonValue);		
		} else if (buttonValue != "=") {
			addToRunningTotal(buttonValue);
			addToTop(buttonValue);
		}
	}
	function addToBottom(buttonValue){
		bottomNo += buttonValue;
		$('#bottom').html(bottomNo);	
	}	
	function addToRunningTotal(buttonValue){
		solution += bottomNo;
		solution = Math.floor(eval(solution) * 100) / 100;
		$('#bottom').html(solution);		
		solution += buttonValue;
	}
	function addToTop(buttonValue){
		topNo += bottomNo += buttonValue;		
		$('#top').html(topNo);
		bottomNo = "";
	}
	function equalize(){
		solution += bottomNo;
		solution = Math.floor(eval(solution) * 100) / 100;
		$('#bottom').html(solution);	
		$('#top').html("&nbsp");	
		topNo = solution;
		bottomNo = "";
	}
	function resetAll(){
		$('#top').html("&nbsp");
		$('#bottom').html(0);
		solution = topNo = bottomNo = "";		
	}
	function resetBottom(){
		$('#bottom').html(0);
		bottomNo = "";	
	}

})();