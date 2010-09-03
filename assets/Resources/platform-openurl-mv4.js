var win = Ti.UI.createWindow({
	backgroundColor : 'white',
	exitOnClose : true,
	navBarHidden : true
});

var btn = Ti.UI.createButton({
	title : 'Play Video'
});

btn.addEventListener('click', function() {
	Titanium.Platform.openURL('http://bit.ly/a1odTm');
});
win.add(btn);

win.open({ animated : false});