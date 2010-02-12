var win = Ti.UI.createWindow({
	width:200,
	height: 200,
	backgroundColor: 'red'
	});

var win2 = Ti.UI.createWindow({
	left : 0, top : 0, width : 300, height : 100, backgroundColor : 'blue'
});

var v1 = Ti.UI.createView({backgroundColor : 'green'});
var l1 = Ti.UI.createLabel({text : 'Label 1'});
win2.add(v1);
win2.add(l1);


var btnClose = Ti.UI.createButton({
	title : 'Close', left : 10, width : 60, height : 50
});
btnClose.addEventListener('click', function(e) {
	win2.close();
});

var btnOpen = Ti.UI.createButton({
	title : 'Open', right : 10, width :60, height : 50
});
btnOpen.addEventListener('click', function(e) {
	win2.open();
});

win.add(btnClose);
win.add(btnOpen);
win.open();
