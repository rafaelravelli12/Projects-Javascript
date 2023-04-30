function validateForm() {
	var name = document.forms["contact-form"]["name"].value;
	var email = document.forms["contact-form"]["email"].value;
	var message = document.forms["contact-form"]["message"].value;

	if (name == "") {
		alert("Name must be filled out");
		return false;
	}

	if (email == "") {
		alert("Email must be filled out");
		return false;
	}

	if (message == "") {
		alert("Message must be filled out");
		return false;
	}
}