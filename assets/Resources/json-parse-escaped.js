
var jsonSource = Ti.Filesystem.getFile("app://json-parse-escaped.json");
var data = jsonSource.read().text;
	
var response = JSON.parse(data);

if(response.offers){
    var offers = response.offers;
    Ti.API.debug("OFFERS: "+JSON.stringify(offers));
    
    for (var o in offers) {
    	Ti.API.debug("OFFER TYPE: " + typeof(o));
     	var d = offers[o];
    	Ti.API.debug("OFFER " + o + ": " + JSON.stringify(d));
    }
}
if(response.coupons){
    var coupons = response.coupons;
    Ti.API.debug("COUPONS: "+JSON.stringify(coupons));
    
    for(var i in coupons) {

// 		Ti.API.debug("COUPON: " + i);
 
        if(coupons.hasOwnProperty(i)){
			var cid = "a"+coupons[i].offer_id;
            for(var j in offers[cid]){
 				Ti.API.debug("J: " + j);
                if(offers[cid].hasOwnProperty(j)){
                    coupons[i][j] = offers[cid][j];
                    Ti.API.debug("NEW MERGER:" + coupons[i][j]);
                }
            }
        }
    }
}



