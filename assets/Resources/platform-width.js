var appwin = Titanium.UI.createWindow();
appwin.orientationModes = [
			Titanium.UI.LANDSCAPE_LEFT,
			Titanium.UI.LANDSCAPE_RIGHT
		];

var trackedItemLabel = Ti.UI.createLabel({
			width:160,
			backgroundColor: '#f00',
			height:40,
			text: 'click',
			textAlign:'center',
			font: {fontFamily:'Helvetica Neue',fontSize:20},
			left: 100,
			top: 100
});


appwin.add(trackedItemLabel);

trackedItemLabel.addEventListener("click",function(e) {
	alert('Ti.Platform.displayCaps.platformWidth = ' + Ti.Platform.displayCaps.platformWidth);
});

appwin.open();