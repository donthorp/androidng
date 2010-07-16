var win = Ti.UI.currentWindow;
if (!win) {
	win = Ti.UI.createWindow({
		backgroundColor : '#081d35'
	});
}

var l1 = Ti.UI.createLabel({
	top : '5px', left : '10px', width : '100px', height : '60px',
	text : 'Label 1:',
	backgroundColor : 'pink',
	color : 'red',
	highlightedColor : 'blue',
	font : {fontFamily : 'monospace'},
	textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT
});

var l2 = Ti.UI.createLabel({
	top : '85px', left : '10px', width : '100px', height : '60px',
	text : 'Label 1:',
	color : 'red',
	backgroundColor : 'white',
	highlightedColor : 'blue',
	font : {fontFamily : 'serif'},
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
});

var l3 = Ti.UI.createLabel({
	top : '165px', left : '10px', width : '100px', height : '60px',
	text : 'Label 1:',
	color : 'blue',
	backgroundColor : 'yellow',
	highlightedColor : 'blue',
	font : {fontFamily : 'sans-serif'},
	textAlign : Ti.UI.TEXT_ALIGNMENT_RIGHT
});
win.add(l1);
win.add(l2);
win.add(l3);
win.open();
