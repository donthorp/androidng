
var win = null;

Ti.Android.currentActivity.addEventListener("start", function() {
	win = Ti.UI.createWindow({
		backgroundColor : 'red',
		top : 20, left : 20, width : 200, height : 50
	});
	
	var l = Ti.UI.createLabel({
		title : "I'm alive!!!!"
	});
	
	win.add(l);
});

Ti.Android.currentActivity.addEventListener("resume", function() {
	Ti.API.info("RESUME");
	win.open();
});