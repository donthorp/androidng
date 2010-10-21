// Dial the phone

var win = Ti.UI.createWindow({
	backgroundColor : 'gray'
});

var btn = Ti.UI.createButton({
	title: 'Say Hello'
});

btn.addEventListener('click', function(e) {
	var activity = Ti.Android.createActivity();
	var intent = Ti.Android.createIntent({        
		className: "net.donthorp.androidng.SpeakActivity" 
	});

	var pending = Ti.Android.createPendingIntent({ 
		'activity' : activity,
		'intent' : intent,
		'type' : Ti.Android.PENDING_INTENT_FOR_ACTIVITY,
		'flags' : 1073741824
	});
	
	Ti.Android.registerAlarm(pending);
});

win.add(btn);
win.open();
