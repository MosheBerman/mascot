//
//	define a jQuery-like query object
//

var $ = document.querySelectorAll;

//	Store Extension ID
//var extensionID = "agcpnlpfdfbcimknkpnclcicmcomklpo";

//	Sandbox ID
var extensionID = "bmoppdfdfmodkmpfjfodmeicmdnhnolb";

//
//	Get the name and version from the manifest
//	and return them as a single string.
//

function nameAndVersion()
 {
	
	var retVal = "StudentsFirst 1.0";

	if (typeof(chrome.runtime.getManifest) == 'function') {
		var manifest = chrome.runtime.getManifest();

		if(manifest) {
			retVal = manifest.name + " " + manifest.version;
		};

	};
	return retVal;
}

//
//	Enter the script
//

window.onload = function(){
	
	//	Log out the version of the script	
	log("Running " + " " + nameAndVersion() + ".");

	setTitle();

	//	Run main
	main();			

/*
 *	At this point, other scripts will
 *	pick up where main.js leaves off.
 *	
 *	Scripts are run in order that they are declared
 * 	in the manifest.json file. Each set of scripts
 *	that matches will be applied, set by set,
 *	in chronological order. 
 *	
 *	For each set, chronology  is followed as well. 
 *	Subsequent scripts will be able to access variables 
 *	and functions defined in the scripts that ran before them.
 *
 */

}


//
//
//

function main() 
{	

	//	If we're on the login page, tweak it a bit
	try
	{
		loginMain();
	}
	catch (e)
	{
		console.log("Cannot run login main, as we're not on the login page.");
	}

}

//
//	As it says on the tin,
//	this method prevents pages from
//	hijacking the title to show something
//	stupid like "Employee facing knicknacks."
//

function preventPagesFromHijackingTheTitle() 
{
    var titleEl = document.getElementsByTagName("title")[0];
    var docEl = document.documentElement;

    if (docEl && docEl.addEventListener) {
        docEl.addEventListener("DOMSubtreeModified", function(evt) {
            var t = evt.target;
            if (t === titleEl || (t.parentNode && t.parentNode === titleEl)) {
                setTitle();
            }
        }, false);
    } else {
        document.onpropertychange = function() {
            if (window.event.propertyName == "title") {
                setTitle();
            }
        };
    }
};

//
//
//

function setTitle() 
{
	//	Change the name of the title
	window.document.title = nameAndVersion();	
	document.title = nameAndVersion();
}
