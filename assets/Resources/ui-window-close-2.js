/*global Ti, Titanium, alert */
Titanium.UI.setBackgroundColor('#000');
var win1 = Titanium.UI.createWindow({  title:'Test', backgroundColor:'#fff', fullscreen: true, exitOnClose: true });

var win2 = Ti.UI.createWindow({title:'window 2', fullscreen:true, backgroundColor: 'green'});
win2.addEventListener('close',function(){Ti.API.info('CLOSE');});

var open = Ti.UI.createButton({title: 'open'});
open.addEventListener('click', function(){win2.open();});
win1.add(open);

var close = Ti.UI.createButton({title: 'close'});
close.addEventListener('click', function(){win2.close();});
win2.add(close);

win1.open();
