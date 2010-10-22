var win = Ti.UI.createWindow({
	backgroundColor : 'gray'
});

var btn = Ti.UI.createButton({
	title: 'Notify'
});

var a = Ti.Android.createActivity();
if (a != null) {
	var intent = a.getIntent();
	if (intent != null) {
		Ti.API.debug("Intent Data: " + intent.getStringExtra("alarmData"));
	}
}

btn.addEventListener('click', function(e) {
	var activity = Ti.Android.createActivity();
	
	var intent = Ti.Android.createIntent({
		className : 'ti.modules.titanium.android.alarmmanager.AlarmReceiver'
	});
	intent.putExtra("alarmData", "Something");
	
	var pending = Ti.Android.createPendingIntent({ 
		activity : activity,
		intent : intent,
		type : Ti.Android.PENDING_INTENT_FOR_BROADCAST,
		flags : 0 
	});
	
	Ti.Android.AlarmManager.setAlarm({
		type : Ti.Android.AlarmManager.RTC,
		mode : Ti.Android.AlarmManager.MODE_EXACT,
		triggerAt : (new Date().getTime()) + 3000,
		operation : pending
	});
});

Ti.App.addEventListener('android:alarm', function(e) {
	var activity = Ti.Android.createActivity();

	var intent = Ti.Android.createIntent({
		packageName : 'net.donthorp.androidng',
		className : 'net.donthorp.androidng.TitaniumNGActivity',
		action : 'android.intent.action.MAIN'
	});
	
	intent.addCategory('android.intent.category.LAUNCHER');
	
	Ti.API.error("EVENT: " + Ti.JSON.stringify(e));
	
	if (e !== null) {
		intent.putExtra("alarmData", e.alarmData);
	}

	var pending = Ti.Android.createPendingIntent({ 
		'activity' : activity,
		'intent' : intent,
		'type' : Ti.Android.PENDING_INTENT_FOR_ACTIVITY,
		'flags' : 1073741824
	});

	var ts = new Date().getTime();
	
	var notification = Ti.Android.NotificationManager.createNotification({
		contentIntent : pending,
		contentTitle : 'Launch AndroidNG',
		contentText : 'Launcher for Test App',
		when : ts
	});
	
	Ti.Android.NotificationManager.notify(1, notification);	
});

Ti.App.addEventListener('android:newIntent', function(e) {
	Ti.API.error("New Intent: " + e.alarmData);
});

win.add(btn);
win.open();
