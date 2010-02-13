var win = Titanium.UI.currentWindow;
var needsOpen = !win;
if (!win) {
	win = Ti.UI.createWindow({ backgroundColor : 'black'});
}

var f = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'media/appcelerator_small.png');

var imageView = Titanium.UI.createImageView({
	image:f,
	width:24,
	height:24,
	top:100
});

win.add(imageView);

var l = Titanium.UI.createLabel({
	text:'Click Image of Appcelerator Logo',
	bottom:20,
	color:'#999'
});
win.add(l);

imageView.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'Image View', message:'You clicked me!'}).show();
});

if (needsOpen) {
	win.open();
}