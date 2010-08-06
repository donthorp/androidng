// Dial the phone

//var activity = Ti.Android.currentActivity;
var intent = Ti.Android.createIntent({
	'className' : 'ti.modules.titanium.android.JSActivity',
	'data' : 'app://app-menu.js'
});

intent.putExtra("closeOnExit", false);

var activity = Ti.Android.createActivity();
activity.start(intent);