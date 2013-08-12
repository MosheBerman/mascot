/*
 *	notification-center.js
 *
 *	Created by Moshe Berman on August 12, 2013
 *
 *	A navigation bar for StudentsFirst.
 *
 */

function messageNode (message) {
	var messageNode = document.createElement("div");
	messageNode.setAttribute("class", "students-first-notication-center-message");

	if (message.charAt(message.length - 1) === ':' || message.indexOf("USERS") != -1) {
		var nodeClass = messageNode.getAttribute("class");
		nodeClass += " students-first-notification-header";
		messageNode.setAttribute("class", nodeClass);
	};

	messageNode.innerText = message;
	return messageNode;
}

function sharedNotificationCenter() 
{
	var notificationCenter = document.createElement("div");
	notificationCenter.id = "students-first-notification-center";

	var notificationWrapper = document.createElement("div");
	notificationWrapper.id = "students-first-notification-wrapper";

	var handle = document.createElement("span");
	handle.id = "students-first-notification-center-handle";

	var notificationsToShow = null;

	//	Try to use the globally defined variable
	try {
		notificationsToShow = notifications;
	} 
	catch (e)
	{
		notificationsToShow = ["No Notifications"];
	}

	for (var i = 0; i < notificationsToShow.length; i++) {
		notificationWrapper.appendChild(messageNode(notificationsToShow[i]));
	};

	notificationCenter.appendChild(notificationWrapper);
	notificationCenter.appendChild(handle);

	return notificationCenter;

}