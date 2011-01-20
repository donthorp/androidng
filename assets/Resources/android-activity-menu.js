var activity = Ti.Android.currentActivity;

var win = Ti.UI.createWindow({
	backgroundColor : 'white',
	navBarHidden : false,
	url : 'android-menu-thread.js' //'android-activity-menu-win.js' 
});


win.open({ animated : false });
