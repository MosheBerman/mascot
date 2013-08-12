/*
 *	colleges.js
 *	
 *	Created by Moshe Berman on August 12, 2013
 *
 *	Colleges.js provides an easy way to convert between 
 *	college names and college abbreviations.
 *
 *	It also provides an interface to save 
 *	the user's college in localStorage.
 *
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

/* 
 *	Get stored college name.
 */

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
