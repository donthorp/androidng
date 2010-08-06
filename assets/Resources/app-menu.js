
var win = Ti.UI.currentWindow;
var activity = Ti.Android.currentActivity;

win.backgroundColor = 'blue';

var menu = Titanium.Android.createMenu();

var item1 = Titanium.Android.createMenuItem({
	title : 'Google',
	icon : '/media/appcelerator_small.png'
});

item1.addEventListener('click', function(){
	Ti.UI.createAlertDialog({ title : 'You clicked Google'}).show();
});

var item2 = Titanium.Android.createMenuItem({
	title : 'Yahoo',
	icon : ''/*Ti.UI.Android.SystemIcon.ADD*/
});
item2.addEventListener('click', function(){
	Ti.UI.createAlertDialog({ title : 'You clicked Yahoo'}).show();
});

menu.add(item1);
menu.add(item2);

activity.setMenu(menu);
