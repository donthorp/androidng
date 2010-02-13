// window container
var win = Titanium.UI.createWindow({
	height:80,
	width:200
});

// black view
var v1 = Titanium.UI.createView({
	height:80,
	width:200,
	backgroundColor:'#000',
	borderColor:'red',
	borderRadius:10,
	opacity:0.8
});

var message = Titanium.UI.createLabel({
	text:'Appcelerator Titanium '+Titanium.version,
	color:'#fff',
	backgroundColor: 'blue',
	opacity: 0.5,
	textAlign:'center',
	font:{fontSize:18,fontWeight:'bold'},
	xbottom:20
});

win.add(v1);
win.add(message);

win.open();