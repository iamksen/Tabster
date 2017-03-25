var f = document.getElementById('lp');
if( f.src.length <= 0){
	var t = document.getElementById("search_box").value;
	//alert(f.src + " l " + f.src.length + " url " + t);
	f.src = "http://wikipedia.org";
}

var wage = document.getElementById("search_box");
wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        var url = document.getElementById("search_box").value;
	var mainurl = 'https://www.google.com/search?q=%http://' + url + '&btnI=Im+Feeling+Lucky';
	
	f.src = mainurl;
    }
});

var go_b = document.getElementById("go_button");
go_b.onclick = function() {
	var url = document.getElementById("search_box").value;
	var mainurl = 'https://www.google.com/search?q=%http://' + url + '&btnI=Im+Feeling+Lucky';
	
	f.src = mainurl;
};