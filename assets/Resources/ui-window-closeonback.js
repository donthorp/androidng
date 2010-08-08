var win = Titanium.UI.createWindow({backgroundColor: 'green'});
var win2 = Ti.UI.createWindow({modal : true});
 
var btn = Ti.UI.createButton({title: 'open win'});
btn.addEventListener('click', function(){
    win2.open({animated : false});
    win2.addEventListener('click', function(){win2.close()});
})
win.add(btn);
win.open();