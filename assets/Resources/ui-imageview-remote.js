var window = Titanium.UI.createWindow({  
    backgroundColor:'red'
});

var graph = Titanium.UI.createImageView({
    top: 20,
    image: 'http://chart.apis.google.com/chart?chco=666666,555555,444444,333333,222222&cht=p&chd=t:36,15,12,10,26&chdl=xyz|abc|def|ghi|jkl&chdlp=b&chf=c,s,ffffff|bg,s,ffffff&chl=36%|15%|12%|10%|26%&chs=288x150'
//    image: 'http://developer.appcelerator.com/assets/img/sprites.png'
});
window.add(graph);
window.open();
/*
var window = Titanium.UI.createWindow({fullscreen: false});
 
//var url = "http://thumbnails.chemistry.com/46/85/6344205_1_327ce9bfd02241b99584912460ec3644.jpeg";
var url = "http://maps.google.com/maps/api/staticmap?center=11.5558762589,104.921697935&zoom=13&size=250x70&maptype=roadmap&markers=color:green|11.5558762589,104.921697935&sensor=false";
//var url = "http://www.facebook.com/photo.php?op=1&view=global&subj=712472015&pid=7797057&id=571025238rin"

var imageMap = Titanium.UI.createImageView({
    image: url,
    height: 90,
    width: 200,
    borderColor: "#FFF"
});

window.add(imageMap);
window.open();
*/