
var db = Ti.Database.open("mytest");
var rs = null;

db.execute("drop table if exists Test");
db.execute("create table if not exists Test(row text)");
rs = db.execute("pragma table_info(Test)");
rs.close();

rs = db.execute("select * from Test");

if (rs != null) {
	Ti.API.info("Row Count: " + rs.getRowCount());
	rs.close();
}
db.close();
