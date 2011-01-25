
var mi = null;
Titanium.Android.currentActivity.onCreateOptionsMenu = function(e) {
	mi = e.menu.add({title: 'Menu Item '});
};
Titanium.Android.currentActivity.onPrepareOptionsMenu = function(e) {
	mi.setIcon('app://KS_nav_ui.png');
}