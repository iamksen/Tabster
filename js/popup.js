//var HEADERS_TO_STRIP_LOWERCASE = [ 'conte'+'nt-security-policy', 'x-fram'+'e-options', 'x-cont'+'ent-security-options','x-web'+'kit-csp' ];
var HEADERS_TO_STRIP_LOWERCASE = [ 'content'+'-'+'security'+'-'+'policy', 'x'+'-'+'frame'+'-'+'options', 'x'+'-'+'content'+'-'+'security'+'-'+'options','x'+'-'+'webkit'+'-'+'csp'];
chrome.webRequest.onHeadersReceived.addListener(function(details) {
    return { responseHeaders: details.responseHeaders.filter(function(header) { return HEADERS_TO_STRIP_LOWERCASE.indexOf(header.name.toLowerCase()) < 0; })};
  }, {
    urls: ["<all_urls>"]
}, ["blocking", "responseHeaders"]);

function setvalue(){   
  var width = parseInt(localStorage["fwidth"]);
  width = isNaN(width) ? 50 : width;
  var val = width + "%, " + (100 - width) + "%";
  document.getElementById("set").cols = val;
}

function setvalue1(){
  if (localStorage["fwidth"] != "50"){
    setTimeout(function(){setvalue();},0);
  }
}

window.onload = setvalue1();