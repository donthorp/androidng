var win = Titanium.UI.createWindow({backgroundColor: 'black'});
var win2 = Ti.UI.createWindow({backgroundColor: 'blue'});
 
var btn = Ti.UI.createButton({title: 'open win'});
btn.addEventListener('click', function(){
    win2.open({navBarHidden: true});
    win2.addEventListener('click', function(){win2.close()});
})
win.add(btn);
win.open();