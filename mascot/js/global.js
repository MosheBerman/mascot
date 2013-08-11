console.log("Loaded global JS file.");

//
//	define a jQuery-like query object
//

var $ = document.querySelectorAll;

window.onload = function(){
	main();
}

//
//
//

function main() 
{
	wrapBodyWithWrapper();
	renderNav();
}

//
//	Wrap the body of the page in a
//	special div which we'll use for 
//	our own purposes.
//

function wrapBodyWithWrapper() 
{
	var div = document.createElement("div");
	div.id = "students-first-wrapper";

	// Move the body's children into this wrapper
	while (document.body.firstChild)
	{
	   	div.appendChild(document.body.firstChild);
	}

	// Append the wrapper to the body
	document.body.appendChild(div);
			
}