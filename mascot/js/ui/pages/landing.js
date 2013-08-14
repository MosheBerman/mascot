
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

/*
 *	Render the panels as we want them to be.
 *
 *	To prevent the buttons and info panel 
 *	from shifting down when the notification 
 *	center opens, we're going to put them
 *	in an absolutely positioned wrapper.
 *
 *	To allow the buttons and the info panel
 *	to play nicely, we're going to wrap them
 *	in their own containers and float them next 
 *	to each other.
 *
 *	Ultimately, we'd like to see this:
 *
 *	[			Navigation Bar 			]
 *			[Notification Center]
 *
 *
 *			[	button 	]		[		]
 *								[		]
 *			[	button 	]		[summary]
 *								[ panel	]
 *								[		]				
 *								[		]
 *				
 *
 *	Let's hope this works. Here we go!
 *
 */

function renderNewPanels() 
{

	//	A navbar		
	var navBar = sharedNavBar();
	var notificationCenter = sharedNotificationCenter();
	var infoPanel = sharedSummaryPanel();

	//	A wrapper for the content
	var contentWrapper = document.createElement("div");
	contentWrapper.setAttribute("id", "students-first-content-wrapper");

	//	A wrapper for the buttons
	var buttonWrapper = document.createElement("div");
	buttonWrapper.setAttribute("id", "students-first-button-wrapper");

	//	A wrapper for the info panel
	var infoPanelWrapper = document.createElement("div");
	infoPanelWrapper.setAttribute("id", "students-first-summary-panel-wrapper");

	//	Put the info panel in its wrapper
	infoPanelWrapper.appendChild(infoPanel);

	//	Put the buttons in their wrapper
	var _selfServiceButton = selfServiceButton();
	var _knowledgeBaseButton = knowledgeBaseButton();

	appendClassToNode(_selfServiceButton, "right");
	appendClassToNode(_knowledgeBaseButton, "right");

	buttonWrapper.appendChild(_selfServiceButton);
	buttonWrapper.appendChild(_knowledgeBaseButton);

	//	Put the buttonWrapper and sideBarWrapper into the contentWrapper
	contentWrapper.appendChild(infoPanelWrapper);	
	contentWrapper.appendChild(buttonWrapper);
	

	//	Create a wrapper for the entire page
	var wrapper = document.createElement("div");
	wrapper.id = "students-first-wrapper";

	//	Add the content areas to the main wrapper
	wrapper.appendChild(navBar);
	wrapper.appendChild(notificationCenter);
	wrapper.appendChild(contentWrapper);

	//	Remove the old page contents
	while(document.body.childNodes.length > 0) {
		document.body.removeChild(document.body.childNodes[0]);
	}

	//	Install the new wrapper 
	//	and of its contents.
	document.body.appendChild(wrapper);
}

//
//	Call main
//

main();