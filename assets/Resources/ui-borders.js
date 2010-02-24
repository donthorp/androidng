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

var t = Ti.UI.create2DMatrix().translate(-200,200).scale(0);
setTimeout(function() {
win.animate({transform:t,delay:1000,duration:3000,opacity:0.1},function()
{
	//win.close();
});},3000);
