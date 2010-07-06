Ti.API.debug("createMarker");
//Ti.API.debug(cine);
//var addr = cine.street+", "+cine.city+", "+cine.postcode+", germany "; //"Schweriner Strasse 16, Wismar, 23970, germany"
var addr = "Schweriner Strasse 16, Wismar, 23970, germany";
addr = "2705 N Carroll Ave, Southlake, TX";

Ti.API.info(addr);

Titanium.Geolocation.forwardGeocoder(addr,function(evt)
{
	Ti.API.debug("THIS IS NOT DISPLAYED ON ANDROID PHONES");
//	var tMarker = Titanium.Map.createAnnotation({
//		latitude : evt.latitude,
//		longitude : evt.longitude,
//		title : cine.name,
//		subtitle : cine.street+", "+cine.city,
//		pincolor : Titanium.Map.ANNOTATION_RED,
//		animate : true,
//		rightButton : "../"+appConfig.image_more,
//		cine : cine
//	});
//	Ti.API.debug(tMarker.title);
	//viewMap.addAnnotation(tMarker);
});