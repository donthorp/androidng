// Dial the phone

//var activity = Ti.Android.currentActivity;
var intent = Ti.Android.createIntent({
	'className' : 'ti.modules.titanium.android.JSActivity',
	'data' : 'app://app-menu.js'
});

intent.putExtra("closeOnExit", true);
intent.putExtra("fullscreen", false);
intent.putExtra("navBarHidden", true);

var activity = Ti.Android.createActivity();
activity.start(intent);