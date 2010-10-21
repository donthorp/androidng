// Dial the phone

var win = Ti.UI.createWindow({
	backgroundColor : 'gray'
});

var btn = Ti.UI.createButton({
	title: 'Add Notification'
});

btn.addEventListener('click', function(e) {
	var activity = Ti.Android.createActivity();
	var intent = Ti.Android.createIntent({
		action: Ti.Android.ACTION_DIAL, 
	    data: "tel:8175551212" 
	});

	var pending = Ti.Android.createPendingIntent({ 
		'activity' : activity,
		'intent' : intent,
		'type' : Ti.Android.PENDING_INTENT_FOR_ACTIVITY,
		'flags' : 1073741824
	});

	var ts = new Date().getTime();
	
	var notification = Ti.Android.NotificationManager.createNotification({
		contentIntent : pending,
		contentTitle : 'Dial Information',
		contentText : '817-555-1212',
		when : ts
	});
	
	Ti.Android.NotificationManager.notify(1, notification);	
});

win.add(btn);
win.open();
