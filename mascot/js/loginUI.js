

function replaceBannerWithNewOne() 
{
	var newBannerURL = "chrome-extension://" + extensionID + "/img/studentsfirst-banner.png";

	document.getElementById("banner").getElementsByTagName("img")[0].src = newBannerURL;
}

function loginMain()
{
	replaceBannerWithNewOne();
}
