function confirmJoin(){
	var answer = confirm("Are you ready to become a Hawk?");
	if (answer == true) {
		alert("Thanks for sharing!");
	}
	else{
		alert("Come back soon.");
	}
}
	
function validationEvent() {
	var a = document.forms["signup"]["bday"].value;
	var b = document.forms["signup"]["mail"].value;
	var c = document.forms["signup"]["phone"].value;
	if (a == "" || b == "" || c == ""){
		alert("Please fill out all fields")
	}
	else{
		confirmJoin();
	}
}

	var q1 = document.getElementById('submit-button');
	q1.addEventListener('click',validationEvent)