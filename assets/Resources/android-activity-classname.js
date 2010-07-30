// Dial the phone

var intent = Ti.Android.createIntent({        
	className: "net.donthorp.androidng.Activity1" 
});

var win = Ti.UI.createWindow({
	backgroundColor : 'gray'
});

var btn = Ti.UI.createButton({
	title: 'Launch Activity1'
});

btn.addEventListener('click', function(e) {
	var activity = Ti.Android.createActivity();
	activity.start(intent);
});

win.add(btn);
win.open();
