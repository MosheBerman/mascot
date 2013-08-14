/*
 *	summary-panel.js 
 *
 *	Created by Moshe Berman on August 12, 2013
 *
 *	The summary panel appears on the right of 
 *  the landing page and shows tuition, registration,
 *	and a few other handy shortcuts. 
 *
 */

/*
 *  Creates an empty widget
 */

 function emptyWidget()
 {
    var widget = document.createElement("div"); 
    widget.setAttribute("class", "students-first-summary-panel-widget")

    return widget;
 }

/*
 *  Creates a title label.
 */

function widgetTitle(text) 
{
  var titleDiv = document.createElement("div");

  titleDiv.setAttribute("class", "students-first-widget-title");
  titleDiv.innerText = text;

  return titleDiv;
}

/*
 *  Creates a subtitle label.
 */

function widgetSubtitle(text) 
{
  var subtitleDiv = document.createElement("div");

  subtitleDiv.setAttribute("class", "students-first-widget-subtitle");
  subtitleDiv.innerText = text;

  return subtitleDiv;
}

/*
 *  Creates a widget link label.
 */

function widgetLink(text, href) 
{
  var link = document.createElement("a");

  link.setAttribute("class", "students-first-widget-link");
  link.setAttribute("href", href);
  link.innerText = text;

  return link;
}

/* 
 *  Creates a widget arros
 */

 function widgetLinkArrow ()
 {
  var arrow = document.createElement("span");  

  arrow.setAttribute("class", "students-first-widget-arrow");
  arrow.innerText = ">";

  return arrow;  
 }

/* 
 *	Creates a vanilla summary widget.
 */

 function vanillaSummaryWidget(title, subtitle) 
 {
    var widget = emptyWidget();

    widget.appendChild(widgetTitle(title));
    widget.appendChild(widgetSubtitle(subtitle));

    return widget;
 }

 /* 
  *	Creates a summary widget with a 
  *	title, an arrow, and a link.
  */

  function linkSummaryWidget(title, link) 
  {
    var widget = emptyWidget();

    var linkNode = widgetLink(title, link);
    linkNode.appendChild(widgetLinkArrow());

    widget.appendChild(linkNode);

    return widget;    
  }

/* 
 *	Create and returna fully configured summary panel
 */

function sharedSummaryPanel()
{

	var panel = document.createElement("div");
	panel.setAttribute("id", "students-first-summary-panel");
	panel.setAttribute("class", "students-first-round-corner");

  /*
   *  Create some widgets.
   *
   *  These widgets are hardcoded for now.
   *  TODO: Make this live data. We also need to wire up per school data.
   */

  var upcomingSemesterWidget = vanillaSummaryWidget("Upcoming Semester", "Fall 2013, August 28 - December 15");
  var registrationWidget = vanillaSummaryWidget("Registration Appointment", "In the future, a summary of registration information will go here. For now, you can call the registrar's office at 718.951.5441.");
  var balanceWidget = vanillaSummaryWidget("Your Balance", "Your balance will go here. Remember that CUNYFirst does not reflect scholarships. Call the bursar at 718.951.5200 for more information.");
  var finalExamsWidget = vanillaSummaryWidget("Final Examinations", "December 17 - December 23");
  
  //  Link widgets
  var academicCalendarWidget = linkSummaryWidget("Academic Calendar", brooklynCalendarURL);
  var researchWidget = linkSummaryWidget("Research A Professor", researchURL);  //  TODO: Change per school
  var mosheBermanWidget = linkSummaryWidget("More By Moshe Berman", mosheURL);

  /*
   *  Install the widgets in the panel
   */

  panel.appendChild(registrationWidget); 
  panel.appendChild(balanceWidget);
  panel.appendChild(upcomingSemesterWidget);  
  panel.appendChild(finalExamsWidget);
  panel.appendChild(academicCalendarWidget);
  panel.appendChild(researchWidget);
  panel.appendChild(mosheBermanWidget); 

	return panel;
}