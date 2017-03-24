var col = document.getElementById("col_plus");
//var row = document.getElementById("row_plus");

var isFirst = 0;
col.onclick = function() {
  if( isFirst == 0 ){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.update(tabs[0].id, {url: "main.html"});
    });
    isFirst = 1;
  } else {
    // add one more column
    //alert("second time");
  }
};

/*
row.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: "main.html"});
    });
};
*/