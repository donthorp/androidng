
var win = Ti.UI.currentWindow;
var activity = Ti.Android.currentActivity;

var l = null;

activity.addEventListener("create", function() {
	var view = Ti.UI.createView({
		backgroundColor : 'red',
		top : 20, left : 20, width : 200, height : 50
	});
	
	l = Ti.UI.createLabel({
		text : "I'm alive!!!!"
	});
	
	view.add(l);
	win.add(view);
});

activity.addEventListener("resume", function() {
	var n = Ti.UI.createNotification({message : 'I have resumed!'});
	n.show();
	setTimeout(function() {
		l.text = l.text + " and BREATHING!!!";	
	}, 3000);
});