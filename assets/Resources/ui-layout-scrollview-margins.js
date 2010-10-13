var win = Ti.UI.createWindow({
	backgroundColor : 'white',
	navBarHidden : true,
	exitOnClose : true
});

var bar = Ti.UI.createView({
	backgroundColor : 'blue',
	left : 0, top : 0, right : 0, height : 30
});
win.add(bar);

var scroller = Ti.UI.createScrollView({
	backgroundColor : '#4c00',
	left: 0, top: 32, right: 0, bottom: 0
});
win.add(scroller);

var v = Ti.UI.createView({
	backgroundColor: 'yellow',
	left:5, top:5, right:5, bottom: 5,
	layout: 'vertical'
});
scroller.add(v);

var l1 = Ti.UI.createLabel({
	text : 'Hello World',
	backgroundImage : '/media/geese.jpg',
	color : 'black',
	height: 100, left:0, right:0, 
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	focusable : true,
	backgroundFocusedImage : '/media/imageA.png'
});
l1.addEventListener('click', function(e) {
	Ti.UI.createNotification({ message : 'ouch'}).show();
});

v.add(l1);

var l2 = Ti.UI.createLabel({
	text : 'Hello World 2',
	backgroundColor : 'gray',
	height: 100, left:0, right:0, 
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});
v.add(l2);

var l3 = Ti.UI.createLabel({
	text : 'Hello World 3',
	backgroundColor : 'pink', color : 'black',
	backgroundFocusedColor : 'blue', backgroundSelectedColor : 'purple',
	height: 100, left:0, right:0, 
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	focusable : true,
	borderColor : 'pink',
	borderRadius : 30,
	borderWidth : 1
});
l3.addEventListener('click', function() {
	Ti.UI.createNotification({ message : 'OUCH!'}).show();
});

v.add(l3);

var l4 = Ti.UI.createLabel({
	text : 'Hello World 4',
	backgroundColor : 'orange', color : 'black',
	height: 100, left:0, right:0, 
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});
v.add(l4);

var l5 = Ti.UI.createLabel({
	text : 'Hello World 5',
	backgroundColor : 'green', color : 'black',
	backgroundFocusedColor : 'purple', backgroundSelectedColor : 'white',
	height: 100, left:0, right:0, 
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	focusable : true
});
v.add(l5);

win.open({ animated : false});