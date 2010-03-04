var win = Ti.UI.createWindow();

// create table view data object
var data = [];

var clicker = function(msg) {
	var m = msg;
	return function() {
		Ti.UI.createNotification({ message : 'Clicked ' + m}).show();
	};
};

for(i = 0; i < 50; i++) {
	var b = Ti.UI.createButton({ title: 'Push Me #' + i, left : '30', width: 120});
	var f = clicker(i);
	b.addEventListener('click', f);

	var l = Ti.UI.createLabel({ text: '<-- Button #' + i, left: 160, right:0});

	var r = Ti.UI.createTableViewRow({ backgroundColor: 'black'});
	r.add(b);

	r.add(l);

	data.push(r);
}

// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	// event data
	var index = e.index;
	var section = e.section;
	var row = e.row;
	var rowdata = e.rowData;
	Titanium.UI.createAlertDialog({title:'Table View',message:'row ' + row + ' index ' + index + ' section ' + section  + ' row data ' + rowdata}).show();
});

// add table view to the window
win.add(tableview);
win.open();

