    var elem = document.getElementById("myvideo");
    var overlay = document.querySelector(".overlay");

    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    }

    function hideOverlay() {
        overlay.style.display = "none";
    }
