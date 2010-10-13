
if (Ti.JSON) {
	Ti.API.info("Ti.JSON: Passed");
} else {
	Ti.API.info("Ti.JSON: Failed");
}

var a = ['001', '002'];
var b = Ti.JSON.stringify(a);

Ti.API.error(b);