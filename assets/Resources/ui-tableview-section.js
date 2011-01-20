Titanium.UI.setBackgroundColor('#000'); 
var win = Ti.UI.createWindow({ 
	// backgroundImage:'common/images/1_SplashScreen_C.jpg' 
});

win.open();

var data = []; 
for (var i=0;i<4;i++) { 
	var row = Ti.UI.createTableViewRow(); 
	if (i==3) { 
		row.hasCheck=true; 
	} 
	var l = Ti.UI.createLabel({ 
		left:5, 
		font:{fontSize:20, fontWeight:'bold'}, 
		color:'white', text:'Label ' + i 
	}); 
	row.add(l); 
	data[i] = row; 
}

// create table view 
var tableview = Titanium.UI.createTableView({ 
	data:data, 
});

// create table view event listener 
tableview.addEventListener('click', function(e) { // event data 
	var index = e.index; 
	var section = e.section;

	Ti.API.info("EVENT: " + Ti.JSON.stringify(e)); 
	Ti.API.info('section = ' + section);    
	Ti.API.info('section.rows = ' + section.rows);  
	
	// reset checks
	for (var i=0; i < section.rows.length;i++)
	{
	    section.rows[i].hasCheck = false;
	    section.rows[i].children[0].color = 'white';
	}
	// set current check
	section.rows[index].hasCheck = true;
	section.rows[index].children[0].color = 'green';
});

win.add(tableview);

