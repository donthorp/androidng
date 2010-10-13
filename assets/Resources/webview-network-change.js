var win = Ti.UI.createWindow({
	backgroundColor : 'black',
	navBarHidden : false,
	exitOnClose : true
});

var b = Ti.UI.createButton({
	title : 'Set URL',
	left : 5, top : 5, right : 5, height : 40
});

b.addEventListener('click', function(e) {
	wv.url = "http://bit.ly/botQbg"
});

var wv = Ti.UI.createWebView({
	left : 5, top : 50, right : 5, bottom : 5
});

win.add(b);
win.add(wv);

win.open({ animated : false});