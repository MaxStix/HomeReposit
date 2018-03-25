const request =  require('request');

var url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=3';

	module.exports.BTCtoUSD = function (cur) {
		request(url, function (error, res, body) {
		    if (error) {
		    	console.log(error);
		    }
		    else{
		    	var data = JSON.parse(body);
		        console.log( cur+ "BTC cost " + roundFiveDecimals(cur * data[data.length - 1].buy) + data[data.length - 1]['base_ccy']);
		    };
		});
  	};

	module.exports.USDtoBTC = function (cur) {
		request(url, function (error, res, body) {
		    if (error) {
		    	console.log(error); 
		    }
		    else{
		    	var data = JSON.parse(body);
		        console.log( cur+ data[data.length - 1]['base_ccy'] +  " cost " + roundFiveDecimals(cur / data[data.length - 1].sale) + "BTC");
		    };
		});
	};

	function roundFiveDecimals (amount) {
		return Math.round(amount * 100000) / 100000;
	};