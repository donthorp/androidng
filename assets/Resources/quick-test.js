if (true) {
var win = Ti.UI.createWindow({ 
	backgroundImage : 'images/background-47681-sm.png'
});

var tableView = Ti.UI.createTableView({});
win.add(tableView);
 
var row = Ti.UI.createTableViewRow({
    height: 40,
    className: 'messageSelectionRow'           
});
var image = Ti.UI.createImageView({ 
    left: 5, 
    top: 5, 
    width: 'auto',
    height: 'auto',
    image: 'media/appcelerator_small.png'
});
var label = Ti.UI.createLabel({ 
    left: 30, 
    top: 5,
    width: 'auto',
    height: 'auto', 
    textAlign:'left', 
    color:'#FFFFFF', 
    text: 'title'
});
row.add(image);
row.add(label);
tableView.appendRow(row);
win.open({ animated : false});
} else {
Titanium.UI.setBackgroundColor('#000');
var win = Titanium.UI.createWindow({  
    title:'Test', backgroundColor:'#fff', fullscreen: true
});

var views = [];
for (var i = 0; i < 5; i++) {
    views.push(
        Ti.UI.createTableView({
            data: [ Ti.UI.createTableViewRow({title: 'Row for view ' + i}) ]
        })
    );
}

win.add(Ti.UI.createScrollableView({ views: views }));
win.open();
}