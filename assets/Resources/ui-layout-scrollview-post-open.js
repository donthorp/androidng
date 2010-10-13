
function addView() {
	var v = Ti.UI.createLabel({
		text : 'button',
		height:40, left : 5, right : 5,
		backgroundColor : 'green'
	});
	v.addEventListener('click', function(e) {
		Ti.API.info('clicked');
	});
    sv.add(v);
}

var win = Ti.UI.createWindow({
	backgroundColor : 'blue',
	navBarHidden : false,
	exitOnClose : true
});

var b = Ti.UI.createButton({
	top : 5, left : 5, right : 5, height : 40,
	title : 'Add View'
});
b.addEventListener('click', function(e) {
	addView();
});
win.add(b);

var sv = Ti.UI.createScrollView({
	top : 50,
	backgroundColor : 'red',
	layout : 'vertical',
	left : 5, right : 5, bottom : 5
});

var container = Ti.UI.createView({ backgroundColor : 'green', layout : 'vertical', left : 5, right : 5});
sv.add(container);

win.add(sv);
win.open({ animated : false});
