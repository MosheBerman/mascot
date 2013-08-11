console.log("Loaded global JS file.");

var $ = document.querySelectorAll;

window.onload = function(){

	function wrapBodyWithWrapper() 
	{
		var div = document.createElement("div");
		div.id = "wrapper";

		// Move the body's children into this wrapper
		while (document.body.firstChild)
		{
	    	div.appendChild(document.body.firstChild);
		}

		// Append the wrapper to the body
		document.body.appendChild(div);

		console.log("Wrapped body up.");			
	}

	wrapBodyWithWrapper();
}