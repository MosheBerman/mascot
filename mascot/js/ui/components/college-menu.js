/* 
 *	college-menu.js
 *
 *	Created by Moshe Berman on August 12, 2013
 *
 *	College menu is a component that allows 
 *	users to choose their college.
 *
 */

//
//	Keep the collegeID around in case the user cancels
//

var oldCollegeID = savedCollegeID();

 //
 //	Generate an option for a select
 //

 function optionForCollegeID(collegeID)
 {

 	var collegeName = collegeNameFromStorageID(collegeID);

 	var option = document.createElement("option");
 	option.setAttribute("class", "students-first-college-option");
 	option.setAttribute("value", collegeID);
 	option.innerText = collegeName;

 	return option;
 }

 //
 //	Build out the select
 //

 function collegeSelect ()
 {

 	var selectMenu = document.createElement("select");
 	selectMenu.id = "students-first-college-menu";
 	selectMenu.setAttribute("multiple", false);

 	for (var i = 0; i < collegeIDs.length; i++) {
 		var option = optionForCollegeID(collegeIDs[i]);

		if (collegeIDs[i] == savedCollegeID()) {
			option.selected = true;
		};

 		selectMenu.appendChild(option);
 	};

 	selectMenu.addEventListener('change', function(){

		var selectedCollege = selectMenu.options[selectMenu.selectedIndex];
		saveCollegeIDToLocalStorage(selectedCollege.value);

		var oldNavBar = document.getElementById("students-first-navbar");
		var newNavBar = sharedNavBar();

		var parent = oldNavBar.parentNode;

		parent.replaceChild(newNavBar, oldNavBar);

 	});

 	return selectMenu;
 }


 //
 //	Here's where we build out the actual menu
 //

 function sharedCollegeMenu() 
 {

 	var menu = document.createElement("div");
 	menu.id = "students-first-college-menu-wrapper";
 	menu.setAttribute("class", "students-first-modal-window");

	var overlayWrapper = document.createElement("div");
 	overlayWrapper.id = "students-first-modal-overlay";

 	var overlay = document.createElement("div");
	overlay.id = "students-first-modal-color";
 	
 	overlay.addEventListener('click',function () {
 		overlayWrapper.parentNode.removeChild(overlayWrapper);
 	}); 

 	//	A title for the overlay
 	var menuTitle = document.createElement("div");
 	menuTitle.id = "students-first-college-menu-title";

 	//	Save the current college in memory so we can restore it if the user cancels
 	oldCollegeID = savedCollegeID();

 	//	A cancel button
 	var cancelButton = document.createElement("span");
 	cancelButton.setAttribute("class", "left navButton");
 	cancelButton.innerText = "Cancel";
 	cancelButton.addEventListener("click", function () {
 		saveCollegeIDToLocalStorage(oldCollegeID);

		var oldNavBar = document.getElementById("students-first-navbar");
		var newNavBar = sharedNavBar();

		var parent = oldNavBar.parentNode;

		parent.replaceChild(newNavBar, oldNavBar);

 		overlayWrapper.parentNode.removeChild(overlayWrapper);
 	});


 	//	A close button
 	var closeButton = document.createElement("span");
 	closeButton.setAttribute("class", "right navButton");
 	closeButton.innerText = "Close";
 	closeButton.addEventListener("click", function () {
		var oldNavBar = document.getElementById("students-first-navbar");
		var newNavBar = sharedNavBar();

		var parent = oldNavBar.parentNode;
		
		parent.replaceChild(newNavBar, oldNavBar);	
 		overlayWrapper.parentNode.removeChild(overlayWrapper);
 	});

 	//	Title
 	var menuTitleText = document.createElement("span");
 	menuTitleText.innerText = "Change Your College";

	menuTitle.appendChild(cancelButton); 	
 	menuTitle.appendChild(menuTitleText);
 	menuTitle.appendChild(closeButton);

	//	Add the title and the select to the menus
 	menu.appendChild(menuTitle);
 	menu.appendChild(collegeSelect());

 	//	Add the overlay and the menu to the wrapper
 	overlayWrapper.appendChild(overlay);
	overlayWrapper.appendChild(menu); 	

 	return overlayWrapper;
 }