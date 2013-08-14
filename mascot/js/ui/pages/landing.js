
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

//
//	This function adds a button to
//	take students to the self-service
//	menu. From there, they're pretty 
//	much on their own - for now.
//

function selfServiceButton() 
{

	var title = "Self Service";
	var subtitle = "Click here to manage your classes, pay bills, and see your grades.";
	var url = selfServiceURL;

	return bigGreenButton(title, subtitle, url);
}

//
//	This button takes you to 
//	the "knowledge base", whatever 
//	that means.
//

function knowledgeBaseButton()
{
	var title = "Help";
	var subtitle = "Click here to visit the Knowledge Base, where you can get help with CUNYFirst.";
	var url = knowledgeBaseURL;

	return bigGreenButton(title, subtitle, url);
}

//
//	Render the panels as we want them to be
//

function renderNewPanels() 
{

	//	A navbar		
	var navBar = sharedNavBar();
	var notificationCenter = sharedNotificationCenter();

	//	A wrapper
	var wrapper = document.createElement("div");
	wrapper.id = "students-first-wrapper";

	//	Remove child node
	while(document.body.childNodes.length > 0) {
		document.body.removeChild(document.body.childNodes[0]);
	}

	wrapper.appendChild(navBar);
	wrapper.appendChild(notificationCenter);

	wrapper.appendChild(selfServiceButton());
	wrapper.appendChild(knowledgeBaseButton());

	//	Install it all into the body
	document.body.appendChild(wrapper);
}

//
//	Call main
//

main();