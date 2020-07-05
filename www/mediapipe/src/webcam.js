window.addEventListener("load", function() {
    var camera = document.getElementById("camera");
    var play = document.getElementById("play");
    var pause = document.getElementById("pause");
    var stop = document.getElementById("stop");
    var constraints = {audio:false, video:true};

    function success(stream) {
      camera.src = stream;
      camera.play();
      disableButtons(true, false, false);
    }

    function disableButtons(disPlay, disPause, disStop) {
      play.disabled = disPlay;
      pause.disabled = disPause;
      stop.disabled = disStop;
    }

    disableButtons(true, true, true);

    if (navigator.mediaDevices.getUserMedia)
      navigator.mediaDevices.getUserMedia(constraints).
        then(function (stream) {
        camera.srcObject = stream;
        disableButtons(true, false, false);
        }).
        catch(function (err0r) {
            console.log("Something went wrong!");
          });
    else
      alert("Your browser does not support getUserMedia()");

    play.addEventListener("click", function() {
      disableButtons(true, false, false);
      camera.play();
    }, false);

    pause.addEventListener("click", function() {
      disableButtons(false, true, false);
      camera.pause();
    }, false);

    stop.addEventListener("click", function() {
      disableButtons(true, true, true);
      camera.pause();
      camera.src = "";
    }, false);
  }, false);