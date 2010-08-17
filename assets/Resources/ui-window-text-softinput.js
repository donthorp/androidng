var win = Ti.UI.createWindow({
	backgroundColor : 'green'
});

win.open({animated : false});

var tf1 = Ti.UI.createTextField({
	top: 20, left: 10, right: 10, height:40,
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS
});

win.add(tf1);

var tf2 = Ti.UI.createTextField({
	top: 70, left: 10, right: 10, height:40,
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS
});

tf2.addEventListener('focus', function() {
	Ti.UI.createNotification({ message: 'focus'}).show();
});
win.add(tf2);

var tf3 = Ti.UI.createTextField({
	top: 120, left: 10, right: 10, height:40,
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS
});

tf3.addEventListener('focus', function() {
	Ti.UI.createNotification({ message: 'focus 2'}).show();
});
win.add(tf3);

var btn = Ti.UI.createButton({
	title: 'Hello',
	top: 170, left: 10, right: 10, height:40,
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS
});
win.add(btn);

tf1.focus();
