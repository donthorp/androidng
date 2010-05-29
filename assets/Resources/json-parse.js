var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'en.json');

var t = f.read().text;

var resources = JSON.parse(f.read().text, function (key,value) {
	if(value && typeof value !== 'object') {
		Ti.App.Properties.setString(key,value);
	}
});
