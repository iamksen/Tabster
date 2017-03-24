var url = window.location.href;
//alert(url);

var f = document.getElementById('ff');
if( f.src.length <= 0){
	var t = document.getElementById("search_box").value;
	//alert(f.src + " l " + f.src.length + " url " + t);
	f.src = "http://wikipedia.org";
}

var go_b = document.getElementById("go_button");
go_b.onclick = function() {
	f.src = document.getElementById("search_box").value;
};