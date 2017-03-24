var f = document.getElementById('lp');
if( f.src.length <= 0){
	var t = document.getElementById("search_box").value;
	//alert(f.src + " l " + f.src.length + " url " + t);
	f.src = "http://wikipedia.org";
}

var go_b = document.getElementById("go_button");
go_b.onclick = function() {
	var url = document.getElementById("search_box").value;
	var mainurl = 'https://www.google.com/search?q=%http://' + url + '&btnI=Im+Feeling+Lucky';
	mainurl = mainurl.replace("watch?v=", "v/");
	f.src = mainurl;
};