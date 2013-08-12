
//
//	Some globals
//

var notifications = [];

//
//	The entry point for our script
//

function main() 
{

	console.log("Loaded the landing UI module."); 	

	pullContentFromPanels();
	renderNewPanels();
}

//
//	Pulls out the content from the old panels
//

function pullContentFromPanels()
{

	var messages = document.getElementsByClassName('MsoNormal');

	for (var j = 0; j < messages.length; j++) {

		var text = (messages[j].innerText).trim();

		if (text === "") {
			continue;
		}

		notifications.push(text);		
	};
}

//	Renders the logo

function renderLogo() 
{
	document.getElementsByClassName('FIRSTLOGO')[0].src = "chrome-extension://" + extensionID + "/img/logo_wide_small.png";
}



//
//	Render the panels as we want them to be
//

function renderNewPanels() 
{

	//	A wrapper
	var wrapper = document.createElement("div");
	wrapper.id = "students-first-wrapper";

	//	A navbar		
	var navBar = sharedNavBar();
	var notificationCenter = sharedNotificationCenter();

	//	Remove child node
	while(document.body.childNodes.length > 0) {
		document.body.removeChild(document.body.childNodes[0]);
	}


	wrapper.appendChild(navBar);
	wrapper.appendChild(notificationCenter);

	//	Install it all into the body
	document.body.appendChild(wrapper);

}

//
//	Call main
//

main();