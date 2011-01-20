var window = Ti.UI.createWindow({
    navBarHidden : true,
    fullscreen : true,
    backgroundImage : "media/default_splash_screen1.png",
    exitOnClose : true,
});

window.activity.onCreateOptionsMenu = function(e) {
	var menu = e.menu;
	
	var m1 = menu.add({ title : "Image 1"});
	var m2 = menu.add({ title : "Image 2"});
	
	m1.addEventListener('click', function(e) {
		window.backgroundImage = "media/default_splash_screen1.png";
	});
	m2.addEventListener('click', function(e) {
		window.backgroundImage = "media/default_splash_screen2.png";
	});
}
window.open({ animated : false});
