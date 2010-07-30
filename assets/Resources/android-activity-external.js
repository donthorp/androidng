// Dial the phone

var intent = Ti.Android.createIntent({        
	action: Ti.Android.ACTION_DIAL, 
    data: "tel:8175551212" 
});

var win = Ti.UI.createWindow({
	backgroundColor : 'gray'
});

var btn = Ti.UI.createButton({
	title: '817-555-1212'
});

btn.addEventListener('click', function(e) {
	var activity = Ti.Android.createActivity();
	activity.start(intent);
});

win.add(btn);
win.open();
