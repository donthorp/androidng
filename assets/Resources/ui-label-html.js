var win = Ti.UI.createWindow({
	backgroundColor : 'white',
	exitOnClose : true,
	navBarHidden : true
});

var l = Ti.UI.createLabel({
	html : '<font color="black">Do you dare</font> <font color="blue"><u>Click Me</u></font>',
	top : 0
});
win.add(l)

var e = Ti.UI.createTextArea({
	top: 50, height: 100, left: 0, right: 0
});
e.addEventListener('return', function(e) {
	l.html = e.value;
});
win.add(e);
win.open({ animated : false});