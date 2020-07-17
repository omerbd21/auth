function ShowPass() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
	

function validateForm() {
  var uname = document.forms["myForm"]["uname"].value;
  var email = document.forms["myForm"]["email"].value;
  var pass = document.forms["myForm"]["pass"].value;
  if (uname == ""|| email== "") {
    alert("Username and mail must be filled out");
    return false;
  }
  if (pass == "")
  {
	  alert("You have to have a password.");
	  return false;
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value))
	{return true;	}
	else
	{alert("Not a valid mail");
	return false;
	}
	
}