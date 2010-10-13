Titanium.UI.setBackgroundColor('#000');

var win =  Titanium.UI.createWindow({  
    title:'TiFourgen',
    backgroundColor:'#000'
});

var text = 'Document 1';


var table = Ti.UI.createTableView({});
win.add(table);


for (var i = 0; i < 10; i++) {
    var row = Ti.UI.createTableViewRow({
        height: 100,
        className: 'document',
        touchEnabled: true
    });

    row.addEventListener('click',function()
    {
            alert("row click!");
    });
    
    var label = Titanium.UI.createLabel({
        text: text,
        width:200,
        height:150,
        top:10,
        color:'#336699',
        font:{fontSize:16, fontStyle:'italic'},
        textAlign:'left', 
        touchEnabled: true,
        backgroundColor:'#ffffff'
    });

    label.addEventListener('click',function()
    {
            alert("label click!");
    });
    
    
    row.add(label);
    table.appendRow(row);
}

win.open();