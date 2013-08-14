/* 
 *	login.js
 *
 *	Created by Moshe Berman on August 10, 2013
 *
 *	This script replaces the 
 *
 */

function replaceBannerWithNewOne() 
{
	var newBannerURL = "chrome-extension://" + extensionID + "/img/studentsfirst-banner.png";

	document.getElementById("banner").getElementsByTagName("img")[0].src = newBannerURL;
}

/*
 *	A convenience method for the input.
 */

 function input(idAttr, nameAttr, classAttr, type)
{

	type = typeof type != 'undefined' ? type : "text";

	var inputNode = document.createElement("input");
	inputNode.setAttribute("id", idAttr);
	inputNode.setAttribute("name", nameAttr);
	inputNode.setAttribute("type", type);
	inputNode.setAttribute("class", classAttr);
	return inputNode;
}

/*
 *  Creates the login form proper 
 */

function loginForm()
{
	var formNode = document.createElement("form");
	formNode.setAttribute("name", "loginform");	
	formNode.setAttribute("id", "students-first-login-form");
	formNode.setAttribute("class", "students-first-round-corner students-first-blue-bar");
	formNode.setAttribute("action", "/bookmark/hsitas.html");
	formNode.setAttribute("method", "post");

	var loginHeader = document.createElement("h3");
	loginHeader.innerText =  "Log in with StudentsFirst: ";
	loginHeader.setAttribute("id", "students-first-login-header");

	var nameInput = input("login", "login", "username students-first-input-text");
	nameInput.setAttribute("placeholder", "Username");

	var passwordInput = input("password", "password", "password students-first-input-text", "password");
	passwordInput.setAttribute("placeholder", "Password");

	var submitInput = input("submit", "submit", "", "submit");
	submitInput.value = "Log In";

	formNode.appendChild(loginHeader);
	formNode.appendChild(nameInput);
	formNode.appendChild(passwordInput);	
	formNode.appendChild(submitInput);

	return formNode;
}

/*
 *	A button for forgot password - requires EMPLID
 */

function forgotPasswordButton ()
{
	/* Reset password button */

	var title = "Forgot Password";
	var subtitle = "Click here if you don't remember your password.";
	var link = forgotPasswordURL;

	var button = bigGreenButton(title, subtitle, link);

	return button;
}

/*
 *	A button for changing password 
 */

function changePasswordButton ()
{
	/* Reset password button */

	var title = "Change Password";
	var subtitle = "Click here to change your password, if you do remember it.";
	var link = changePasswordURL;

	var button = bigGreenButton(title, subtitle, link);

	return button;
}

/*
 *	A button for new users
 */

function newAccountButton ()
{
	/* Reset password button */

	var title = "First Time Users";
	var subtitle = "Click here to claim or reclaim your account.";
	var link = firstTimeUsersURL;

	var button = bigGreenButton(title, subtitle, link);

	return button;
}

/*
 *	The entry point for the login script.
 */

 function loginMain()
{
	//	Get a fully configured login form
	var form = loginForm();

	//	Buttons
	var forgottenPasswordButton = forgotPasswordButton();
	var changeMyPasswordButton = changePasswordButton();
	var claimAccountButton = newAccountButton();

	//	A wrapper for the entire page
	var wrapper = document.createElement("div");
	wrapper.id = "students-first-wrapper";

	//	Remove child nodes
	while(document.body.childNodes.length > 0) {
		document.body.removeChild(document.body.childNodes[0]);
	}

	//	Install the students-first wrapper in the main form
	wrapper.appendChild(form);
	wrapper.appendChild(forgottenPasswordButton);
	wrapper.appendChild(changeMyPasswordButton);
	wrapper.appendChild(claimAccountButton);
	document.body.appendChild(wrapper);	
}

loginMain();
