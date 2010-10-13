var win = Ti.UI.createWindow({
	backgroundColor : 'black'
});

var tf = Ti.UI.createTextField({
	top: 50,
	width: 50,
	height: 40,
	backgroundColor: 'white',
    passwordMask: true,
    keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION
});
win.add(tf);

win.open({ animated : false});