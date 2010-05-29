var menu = Titanium.UI.Android.OptionMenu.createMenu();

var item1 = Titanium.UI.Android.OptionMenu.createMenuItem({
	title : 'Google 2',
	icon : '/media/appcelerator_small.png'
});

item1.addEventListener('click', function(){
	Ti.UI.createAlertDialog({ title : 'You clicked Google 2'}).show();
});

var item2 = Titanium.UI.Android.OptionMenu.createMenuItem({
	title : 'Yahoo 2',
	icon : ''/*Ti.UI.Android.SystemIcon.ADD*/
});
item2.addEventListener('click', function(){
	Ti.UI.createAlertDialog({ title : 'You clicked Yahoo 2'}).show();
});

menu.add(item1);
menu.add(item2);

Titanium.UI.Android.OptionMenu.setMenu(menu);
