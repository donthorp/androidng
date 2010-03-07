var mess = {
	'string' : "A String",
	'double' : 0.0,
	'integer' : 1,
	'boolean' : true,
	'false'	 : false,
	'a1' : [
	    "String 2",
	    2.0,
	    3,
	    true,
	    false,
	    ['a', 'b', 'c'],
	    { 'k1' : 'String 3', 'k2' : 4.0, 'k3' : 5}
	 ],
	 'o1' : {
		'k2' : 'String4',
		'k3' : 6.0,
		'k4' : 7,
		'k5' : null
	},
	'null' : null,
	'f1' : function() {}
};

Ti.Analytics.userEvent("objectFromHell", mess);