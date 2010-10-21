Titanium.UI.setBackgroundColor('#000');

var newLatitude = '';
var newLongitude = '';
var newName = '';
var newAddress = '';
 
function createMap() {
	var winMap = Titanium.UI.createWindow({
		title:'winMap',
		backgroundColor:'black',
		navBarHidden: true
	});
	var annotation = Titanium.Map.createAnnotation({
		latitude:newLatitude,
		longitude:newLongitude,
		title:newName,
		subtitle:newAddress
		//animate:true,
		//pinImage:"../images/map-pin.png"
	});	
	var mapview = Titanium.Map.createView({
		mapType: Titanium.Map.STANDARD_TYPE,
		region:{latitude:newLatitude, longitude:newLongitude, latitudeDelta:0.01, longitudeDelta:0.01},
		//animate:true,
		regionFit:true,
		userLocation:true,
		top:117,
		height:387,
		annotations:[annotation]
	});
	mapview.selectAnnotation(mapview.annotations[0].title);
	winMap.add(mapview);

	winMap.open();
}
 
var main = Titanium.UI.createWindow({
});
 
var btn1 = Titanium.UI.createButton({
    title: 'loc 1',
    color:'#000',
    top:100,
    width:122,
    height:50
});
 
btn1.addEventListener('click',function(e) {
	newLatitude = 36.744256;
	newLongitude = 3.0538639;
	newName = 'City_1';
	newAddress = 'Street_1';
	createMap();
});
 
main.add(btn1);

var btn2 = Titanium.UI.createButton({
    title: 'loc 2',
    color:'#000',
    top:180,
    width:122,
    height:50
});
 
btn2.addEventListener('click',function(e) {
	newLatitude = 50.7456605;
	newLongitude = 3.5998863;
	newName = 'City_2';
	newAddress = 'Street_2';
	createMap();
});
 
main.add(btn2);

var btn3 = Titanium.UI.createButton({
    title: 'loc 3',
    color:'#000',
    top:260,
    width:122,
    height:50
});
 
btn3.addEventListener('click',function(e) {
	newLatitude = 49.282601;
	newLongitude = -123.118057;
	newName = 'City_3';
	newAddress = 'Street_3';
	createMap();
});
 
main.add(btn3);
 
main.open();