// an array of some random images
var images = ['http://ddiff.com/wp-content/uploads/2009/11/Hurricane-Isabel-NASA.jpg','http://www.eurocarib.com/userimage/images/hurricane.gif'];
var active_image = 0;
// the image window
var imagewin = Titanium.UI.createWindow({
  fullscreen:true
});
var imageView = Titanium.UI.createImageView({
  canScale:true,
  enableZoomControls:true,
  top:0
});
imagewin.add(imageView);
imagewin.addEventListener('close', function(e)
{
  Ti.API.info('imagewin gets closed');
});
// the main window
var win = Titanium.UI.createWindow({
  fullscreen:true
});
var button = Titanium.UI.createButton({
  title: 'Show Next',
  bottom: 0
});
button.addEventListener('click', function(e)
{
  active_image %= images.length;
  Ti.API.info('loading image #'+active_image);
  imageView.image = images[active_image++];
  imagewin.open();
});
win.add(button);
win.open();