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

function sharedNavBar() 
{

 	var navBar = document.createElement("div");
	navBar.id = "students-first-navbar";
	navBar.setAttribute("class", "students-first-round-corner");

	var title = document.createElement("span");
	title.innerText = "StudentsFirst";

	title.innerText += ": " + collegeName();

	navBar.appendChild(title);

	return navBar;
}