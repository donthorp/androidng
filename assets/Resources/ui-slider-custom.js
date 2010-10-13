var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});

var customSlider = Titanium.UI.createSlider({
	min:0,
	max:100,
	value:25,
	width:268,
	height:40,
	top:90,
	thumbImage: 'images/custom-slider-handle.png',
	leftTrackImage: 'images/custom-slider-left.9.png',
	rightTrackImage: 'images/custom-slider-right.9.png'
});

var resetButton = Ti.UI.createButton({
	left: 5, top : 200, right: 5, height: 50,
	title: 'Reset'
});
resetButton.addEventListener('click', function(e) {
	customSlider.thumbImage = null;
	customSlider.leftTrackImage = null;
	customSlider.rightTrackImage = null;
});

var customButton = Ti.UI.createButton({
	left: 5, top : 260, right: 5, height: 50,
	title: 'Custom'
});
customButton.addEventListener('click', function(e) {
	customSlider.thumbImage = 'images/custom-slider-handle.png';
	customSlider.leftTrackImage = 'images/custom-slider-left.9.png';
	customSlider.rightTrackImage = 'images/custom-slider-right.9.png';
});

win.add(customSlider);
win.add(resetButton);
win.add(customButton);

customSlider.addEventListener('change', function(e) {
	Ti.API.debug("left: " + e.thumbOffset.x + " top: " + e.thumbOffset.y + " width: " +
		e.thumbSize.width + "height: " + e.thumbSize.height);
});

win.open({ animated : false });