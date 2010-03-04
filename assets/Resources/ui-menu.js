
var win = Ti.UI.createWindow({ backgroundColor : 'red', navBarHidden : true });

var menu = Titanium.UI.Android.OptionMenu.createMenu();

var item1 = Titanium.UI.Android.OptionMenu.createMenuItem({
	title : 'Google',
	icon : '/media/appcelerator_small.png'
});

item1.addEventListener('click', function(){
	Ti.UI.createAlertDialog({ title : 'You clicked Google'}).show();
});

var item2 = Titanium.UI.Android.OptionMenu.createMenuItem({
	title : 'Yahoo',
	icon : ''/*Ti.UI.Android.SystemIcon.ADD*/
});
item2.addEventListener('click', function(){
	Ti.UI.createAlertDialog({ title : 'You clicked Yahoo'}).show();
});

menu.add(item1);
menu.add(item2);

Titanium.UI.Android.OptionMenu.setMenu(menu);

win.open();