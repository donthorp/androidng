
Ti.API.info("searchCines");
//var radius = radius
//var postcode = postcode;
var postcodeArray = Array();

//var url = "http://ws.geonames.org/findNearbyPostalCodesJSON?postalcode="+postcode+"&country=DE&radius="+radius;
var url = "http://ws.geonames.org/findNearbyPostalCodesJSON?postalcode=23966&country=DE&radius=10";
var xhr = Titanium.Network.createHTTPClient();
var json = Array();
xhr.open("GET", url);
xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

//xhr.addEventListener('change',function(){ Titanium.API.info("onChange loaded"); Titanium.API.info(this.responseText); });


xhr.onload = function()
{
	Ti.API.info("get other Postcodes");
	var postCodeArray = Array();
	var json = Array();
	Ti.API.info(this.responseText);
	json = JSON.parse(this.responseText);
	Ti.API.info(String(json));
	try
	{
		if(json.status.value == 17)
		{
		var alertDialog_noPostCode = Titanium.UI.createAlertDialog({
			title: 'CineStar-App',
			message: "FŸr diese Postleitzahl wurde kein Ort gefunden.",
			buttonNames: ['OK']
		});
		alertDialog_noPostCode.show();
		Ti.App.fireEvent('hideLoader');
	}
	}
	catch(err)
	{
		Ti.API.info("GOT IT");
		Ti.API.info(json);
		json = json.postalCodes;

		for(var itemIndex in json)
		{
			var item = json[itemIndex];
			Ti.API.info("Index: " + itemIndex);
			Ti.API.info(item);
			Ti.API.info("Longitude: " + item.lng);
			postCodeArray.push(item.postalCode);
		}

		Ti.API.info(postCodeArray);

		//var cineArray = cineHandler.getCinesByPostcode(postCodeArray);

		//Ti.App.fireEvent('createCineTable',{ cineArray:cineArray});
		//Ti.App.fireEvent('createCineMarker',{ cineArray:cineArray});
	}
};

xhr.send();
