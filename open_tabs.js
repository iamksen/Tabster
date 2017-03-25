chrome.tabs.getAllInWindow(null,function(tabs){
	var open_tab = document.getElementById("display_open_tabs");
	console.log(open_tab);
	
	for (var i = 0 ; i < tabs.length ; i++){
		var tabTitle = tabs[i].title;
		if (tabs[i].title.length > 27)
			tabTitle = tabs[i].title.substring(0, 27)+"...";
		var checkString = tabTitle.substring(0,6);
		if (checkString !== "chrome"){
			var newAttr = document.createElement('a');
			var mainurl = 'https://www.google.com/search?q=%' + tabs[i].url + '&btnI=Im+Feeling+Lucky'
			newAttr.setAttribute('href', mainurl);
			newAttr.innerHTML = "> . " + tabTitle;
			open_tab.appendChild(newAttr);
			var newAttr = document.createElement('br');
			open_tab.appendChild(newAttr);
		}
	}
});

