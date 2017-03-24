chrome.tabs.getAllInWindow(null,function(tabs){
	var open_tab = document.getElementById("display_open_tabs");
	console.log(open_tab);
	
	for (var i = 0 ; i < tabs.length ; i++){
		var newAttr = document.createElement('a');
		var mainurl = 'https://www.google.com/search?q=%http://' + tabs[i].url + '&btnI=Im+Feeling+Lucky'
		newAttr.setAttribute('href', mainurl);
		newAttr.innerHTML = String(i+1)+ ". " + tabs[i].title;
		open_tab.appendChild(newAttr);
		var newAttr = document.createElement('br');
		open_tab.appendChild(newAttr);
	}
});


