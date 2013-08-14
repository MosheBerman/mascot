/*****
 *
 *	Created by Moshe Berman on August 11, 2013
 *
 *	This script builds out a navigation component.
 *
 ****/
 
//
//	Shows the modal college menu
//

function showCollegeMenu()
{
	var menu = sharedCollegeMenu();

 	document.body.appendChild(menu);

	return false;
}

//
//	Create the navbar
//	

function sharedNavBar() 
{

 	var navBar = document.createElement("div");
	navBar.setAttribute("id", "students-first-navbar");
	navBar.setAttribute("class", "students-first-round-corner students-first-blue-bar");

	//	Show the StudentsFirst title
	var title = document.createElement("span");
	title.id = "students-first-nav-title";
	title.innerText = nameAndVersion();

	var name = collegeName();
	var changeCollegeButton = document.createElement("span");

	//	Append the college name if we successfully 
	//	retrieved it from local storage.
	if(name) {
		
		title.innerText += ": " + name + " ";	

		var changeCollegeLink = document.createElement("a");
		changeCollegeLink.setAttribute("href", "#");
		changeCollegeLink.innerText = "(Change)";
		changeCollegeLink.setAttribute("id", "students-first-change-college-link");
		changeCollegeLink.setAttribute("class", "underlineButton");
		
		changeCollegeLink.addEventListener("click", showCollegeMenu);		

		changeCollegeButton.appendChild(changeCollegeLink);
	}

	//	Create a logout button
	var logoutButton = document.createElement("a");
	logoutButton.setAttribute("href", logoutURL);
	logoutButton.innerText = "Log Out";
	logoutButton.setAttribute("id", "students-first-logout-link");
	logoutButton.setAttribute("class", "underlineButton right");	

	navBar.appendChild(title);
	navBar.appendChild(changeCollegeButton);	
	navBar.appendChild(logoutButton);

	return navBar;
}