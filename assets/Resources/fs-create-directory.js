// create correct subfolder
var dataDirectory = Ti.Filesystem.getApplicationDataDirectory();

var f = Titanium.Filesystem.getFile(dataDirectory, "foo");
if (!f.exists()) {
	f.createDirectory();
	Ti.API.info("Created Directory.");
}

