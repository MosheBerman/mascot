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

/*
 *	Colleges
 */

var collegeIDs = ["BAR", "BMC", "BCC", "BKL", "LAW", "CTY", "CSI", "HOS", "HTR", "JJC", "KCC", "LAG", "LEH", "MEC", "NYT", "QNS", "QCC", "NCC", "GRD", "YRK"];

var collegeNames = ["Baruch College", "Borough of Manhattan Community College", "Bronx Community College", "Brooklyn College", "CUNY School of Law", "City College", "College of Staten Island", "Hostos Community College", "Hunter College", "John Jay College", "Kingsborough Community College", "LaGuardia Community College", "Lehman College", "Medgar Evers College", "NYC College of Technology", "Queens College", "Queensborough Community College", "Stella and Charles Guttman Community College", "The Graduate Center", "York College"];

/*
 *	Convert a storage identifier into a display name
 */

function collegeNameFromStorageID (storageID) 
{

	var nameIndex = 0;
	for (var i = 0; i < collegeIDs.length; i++) {
		if (collegeIDs[i] == storageID) 
		{
			nameIndex = i;
			break;
		}
	}

	var name = "CUNY";

	if(i < collegeNames.length && i > -1) 
	{
		name = collegeNames[i];
	}

	return name;
}

function collegeName () 
{

	var storageID = "CUNY";

	if(typeof(Storage)!=="undefined")
  	{
  	// Yes! localStorage and sessionStorage support!

  		if (!localStorage["college"]) 
  		{
  			localStorage["college"] = "BKL";
  		};

  		storageID = localStorage["college"];
  	}
	else
  	{
  	// Sorry! No web storage support..

  	}

  	return collegeNameFromStorageID(storageID);
}


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