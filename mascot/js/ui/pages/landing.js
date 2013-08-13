
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
//	This function creates a big 
//	green button with a given
//	title, subtitle, and href.
//

function bigGreenButton(title, subtitle, href)
{
	var button = document.createElement("a");
	button.setAttribute("class", "students-first-round-corner students-first-big-green-button");
	button.setAttribute("href", href);

	var buttonTitle = document.createElement("span");
	buttonTitle.setAttribute("class", "students-first-button-title");
	buttonTitle.innerText = title;

	var buttonSubtitle = document.createElement("span");
	buttonSubtitle.setAttribute("class", "students-first-button-subtitle");
	buttonSubtitle.innerText = subtitle;

	button.appendChild(buttonTitle);
	button.appendChild(buttonSubtitle);

	return button;	
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

	wrapper.appendChild(selfServiceButton());
	wrapper.appendChild(knowledgeBaseButton());

	//	Install it all into the body
	document.body.appendChild(wrapper);
}

//
//	Call main
//

main();