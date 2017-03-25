document.getElementById("playVideo").addEventListener("click", function(){
    var youtubeLink = document.getElementById("youtubeLink").value;
    var res = youtubeLink.split("=")[1];
    var returnLink = "http://www.youtube.com/embed/"+res+"?rel=0&autoplay=1";
    document.getElementById("video").src = returnLink;
    //alert(res);
});
