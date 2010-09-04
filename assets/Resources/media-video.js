var win = Ti.UI.createWindow({
	backgroundColor : 'white',
	exitOnClose : true,
	navBarHidden : true
});

var btn = Ti.UI.createButton({
	title : 'Play Video'
});

btn.addEventListener('click', function() {

	var url = 'http://bcovekk.vo.llnwd.net/pd2/media/78185222001/78185222001_308943907001_HANAMIZUKI-YOKOKU-SD-QT.mp4';
	//var url = 'http://bit.ly/a1odTm';
	activeMovie = Titanium.Media.createVideoPlayer({
		contentURL: url,
		backgroundColor:'#111',
		movieControlMode:Titanium.Media.VIDEO_CONTROL_DEFAULT,
		scalingMode:Titanium.Media.VIDEO_SCALING_MODE_FILL,
		play: true
	});
});
win.add(btn);

win.open({ animated : false});