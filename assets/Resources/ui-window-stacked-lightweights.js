var win1 = Ti.UI.createWindow({
	backgroundColor : 'red'
});

var btn1 = Ti.UI.createButton({
	title : 'Open 2',
	width : 100,
	height : 50
});
btn1.addEventListener('click', function(e) {
	var win2 = Ti.UI.createWindow({
		backgroundColor : 'blue', navBarHidden : true
	});
	win2.add(btn2);
	win2.open();
});

win1.add(btn1);

var btn2 = Ti.UI.createButton({
	title : 'Open 3',
	width : 100,
	height : 50
});
btn2.addEventListener('click', function(e) {
	var win3 = Ti.UI.createWindow({
		backgroundColor : 'green', fullscreen : true
	});

	win3.open();
});


win1.open();