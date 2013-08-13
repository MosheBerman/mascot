//
//	define a jQuery-like query object
//

var $ = document.querySelectorAll;

//	Store Extension ID
//var extensionID = "agcpnlpfdfbcimknkpnclcicmcomklpo";

//	Sandbox ID
var extensionID = "agcpnlpfdfbcimknkpnclcicmcomklpo";

//
//	Enter the script
//

window.onload = function(){
	main();
	top.document.title = "StudentsFirst";	
}

//
//
//

function main() 
{	
	wrapBodyWithWrapper();

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