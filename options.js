var col = document.getElementById("col_plus");
var row = document.getElementById("row_plus");

col.addEventListener('click', function(){
	//alert("A column is added");
	chrome.runtime.sendMessage("main.html");
});

row.addEventListener('click', function(){
	alert("A row is added");
});