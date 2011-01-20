if (false) {
	var win = Ti.UI.createWindow({title: 'Broken Image on Android', backgroundColor: '#fff'});
	win.add(Titanium.UI.createImageView({
		backgroundColor : 'blue',
	   	height: 48, width: 320,
	   	canScale: true,
	   	image: 'http://ads.farmcentric.com/banners/1/2010/PioneerHBus_rgb_320x48.jpg'
	}));
	win.open();
}

if (true) {
	var remoteImages = [
		"http://www.latenightwithjimmyfallon.com/assets_c/2011/01/BourdainLNE350-thumb-320xauto-16600.jpg", 
		"http://m.nbc.com/images/lnjf/76462_thumb.jpg",
		"http://m.nbc.com/images/lnjf/76672_thumb.jpg",
		"http://m.nbc.com/images/lnjf/76661_thumb.jpg",
		"http://m.nbc.com/images/lnjf/76666_thumb.jpg",
		"http://m.nbc.com/images/lnjf/76647_thumb.jpg",
		"http://m.nbc.com/images/lnjf/76276_thumb.jpg",
		"http://m.nbc.com/images/lnjf/76629_thumb.jpg",
		"http://m.nbc.com/images/lnjf/76607_thumb.jpg",
		"http://m.nbc.com/images/lnjf/76613_thumb.jpg",
		"http://m.nbc.com/images/lnjf/76611_thumb.jpg",
		"http://m.nbc.com/images/lnjf/76267_thumb.jpg",
		"http://m.nbc.com/images/lnjf/76467_thumb.jpg",
		"http://m.nbc.com/images/lnjf/76595_thumb.jpg",
		"http://m.nbc.com/images/lnjf/76587_thumb.jpg",
		"http://m.nbc.com/images/lnjf/76593_thumb.jpg",
		"http://m.nbc.com/images/lnjf/76470_thumb.jpg",
		"http://m.nbc.com/images/lnjf/76576_thumb.jpg",
		"http://m.nbc.com/images/lnjf/76550_thumb.jpg",
		"http://m.nbc.com/images/lnjf/76549_thumb.jpg"
	];
	
	var win = Ti.UI.createWindow({title: 'Broken Image on Android', backgroundColor: '#fff'});
	for(var i = 0; i < remoteImages.length; i++) {
		var url = remoteImages[i];
		win.add(Titanium.UI.createImageView({
			backgroundColor : 'blue',
			top: i * 10, left: i * 10,
		   	height: "auto", width: 'auto',
		   	image: url
		}));
	}
	win.open();
}
