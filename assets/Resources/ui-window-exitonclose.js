var win = Ti.UI.createWindow({
	exitOnClose: false,
	fullscreen:true,
	backgroundColor: 'blue'
});

var btn = Ti.UI.createButton({
	title: 'Open another'
});

btn.addEventListener('click', function() {
	Ti.UI.createWindow( {
		exitOnClose:false, 
		fullscreen: true,
		backgroundColor: 'green'
	}).open();
});
win.add(btn);


win.open();