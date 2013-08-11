console.log("Loaded the landing UI module."); 	

window.onload = function() {
	main();
};

//
//	Some globals
//

var panelContents = [];

//
//	The entry point for our script
//

function main() 
{
	pullContentFromPanels();
	renderLogo();
	renderNewPanels();
}

//
//	Pulls out the content from the old panels
//

function pullContentFromPanels()
{
	var oldPanels = document.querySelectorAll('*[id^="ptpgltbody_row_"]');

	for (var i = 0; i < oldPanels.length; i++) {
		var panel = oldPanels[i];
	};
}

//	Renders the logo

function renderLogo() 
{
	document.getElementsByClassName('FIRSTLOGO')[0].src = "chrome-extension://nhhahdgmmeapkammmkhanjhpnhpolebm/img/logo_wide_small.png";
}

//
//	Render the panels as we want them to be
//

function renderNewPanels() 
{

}