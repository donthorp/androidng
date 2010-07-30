var emailDialog = Ti.UI.createEmailDialog();
emailDialog.setSubject("Sending log file");

var utcMillis = new Date().getTime();
var filename = "logfile-" + utcMillis + ".log";
Ti.API.info("Logfile: " + filename);

//var dir = Ti.Filesystem.getFile(Titanium.Filesystem.externalStorageDirectory);
//if (!dir.exists()) {
//	dir.createDirectory();
//}

var file = Titanium.Filesystem.getFile(Titanium.Filesystem.externalStorageDirectory, filename);
file.write("hello world");
//Logfile.flush(file);
// what's this?
var email_body = "Sending logfile. ";
emailDialog.setMessageBody(email_body);
Ti.API.info('addint attachement file with size ' + file.getSize());
emailDialog.addAttachment(file);

emailDialog.addEventListener('complete',
function(e) {
    Ti.UI.createAlertDialog({
        message: 'Your logfile was sent.'
    }).show();
});

emailDialog.open();
