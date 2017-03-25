var template_a = document.getElementById("template_a");
var template_b = document.getElementById("template_b");
var template_c = document.getElementById("template_c");
var template_d = document.getElementById("template_d");


template_a.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: "templates/a.html"});
  });
};

template_b.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: "templates/b.html"});
  });
};

template_c.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: "templates/c.html"});
  });
};

template_d.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: "templates/d.html"});
  });
};