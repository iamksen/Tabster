/*
	background.js accepts all the chrome APIs
*/

function addNewRow(response){
	
}

chrome.runtime.onMessage.addListener( function(response, sender, sendresponse){
	//alert(response);

	chrome.tabs.update({url: response});
	/*if( response == "column"){
		chrome.tabs.update(sender.tab.id, {url: "main.html"});
	} else {
		alert("else alert");
	}*/
});