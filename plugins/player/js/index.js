window.onload = function () {
  var api,
      container = document.getElementById("player"),
      choice = document.getElementById("choice"),
      typewarning = document.getElementById("typewarning"),
      audiowarning = document.getElementById("audiowarning"),
      video = document.createElement("video"),
      fileElem = document.getElementById("file");

  if (!flowplayer.support.video) {
    choice.innerHTML = "This demo only works in browsers supporting HTML5 video.";
    return;
  }


  fileElem.onchange = function () {
    var file = fileElem.files[0],
        canplay = !!video.canPlayType(file.type).replace("no", ""),
        // hls is always considered as audio/mpegurl locally
        // so we cannot avoid a player error without excluding hls video
        isaudio = file.type.indexOf("audio/") === 0 && file.type !== "audio/mpegurl";

    choice.querySelector("span.ftype").innerHTML = file.type;

    [typewarning, audiowarning].forEach(function (elem) {
      elem.style.display = "none";
    });

    if (canplay && !isaudio) {

      var clip = {
            sources: [
              { type: file.type, src: URL.createObjectURL(file) }
            ]
          };

      if (api === undefined) {
        api = flowplayer(container, {
          ratio: false,
          autoplay: true,
          embed: false,
          clip: clip

        }).on("ready", function (e, api, video) {
          // for info
          document.getElementById("src").innerHTML = video.src;
        });

      } else {
        api.load(clip);

      }

    } else if (!canplay) {
      typewarning.querySelector("span.ftype").innerHTML = file.type;
      typewarning.style.display = "block";

    } else {
      audiowarning.style.display = "block";

    }
  };
};