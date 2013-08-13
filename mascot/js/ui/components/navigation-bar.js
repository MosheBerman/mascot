/*****
 *
 *	Created by Moshe Berman on August 11, 2013
 *
 *	This script builds out a navigation component.
 *
 ****/

/*
 *	URLs 
 */

var logoutURL = "https://home.cunyfirst.cuny.edu/psp/cnyepprd/EMPLOYEE/EMPL/?cmd=logout";

var loginURL = "https://home.cunyfirst.cuny.edu/oam/Portal_Login1.html";

//
//
//

function showCollegeMenu()
{
	var menu = sharedCollegeMenu();

 	document.body.appendChild(menu);

	return false;
}

function hideCollegeMenu() 
{
	return false;
}

//
//	Create the navbar
//	

function sharedNavBar() 
{

 	var navBar = document.createElement("div");
	navBar.id = "students-first-navbar";
	navBar.setAttribute("class", "students-first-round-corner");

	var title = document.createElement("span");
	title.id = "students-first-nav-title";
	title.innerText = "StudentsFirst";

	var name = collegeName();
	var changeCollegeButton = document.createElement("span");

	if(name) {
		
		title.innerText += ": " + name + " ";	

		var changeCollegeLink = document.createElement("a");
		changeCollegeLink.setAttribute("href", "#");
		changeCollegeLink.innerText = "(Change)";
		changeCollegeLink.setAttribute("id", "students-first-change-college-link");
		
		changeCollegeLink.addEventListener("click", showCollegeMenu);		

		changeCollegeButton.appendChild(changeCollegeLink);
	}

	navBar.appendChild(title);
	navBar.appendChild(changeCollegeButton);	

	return navBar;
}