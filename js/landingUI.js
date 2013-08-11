console.log("Loaded the landing UI module."); 	

window.onload = function() {
	main();
};

//
//	The entry point for our script
//

function main() 
{
	pullContentFromPanels();
	renderLogo();
	renderNav();
	renderNewPanels();
}

//
//	Pulls out the content from the old panels
//

function pullContentFromPanels()
{
	var oldPanels = document.querySelectorAll('*[id^="ptpgltbody_row_"]');
}

//	Renders the logo

function renderLogo() 
{
	document.getElementsByClassName('FIRSTLOGO')[0].src = "chrome-extension://nhhahdgmmeapkammmkhanjhpnhpolebm/img/logo_wide_small.png";


}
	
//
//	Renders the navigation bar
//

function renderNav() 
{

}

//
//	Render the panels as we want them to be
//

function renderNewPanels() 
{

}