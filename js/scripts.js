// function to add event listeners to divs to play sounds
function daWae () {

  // sounds filename
  let sounds = [
    {"sound": "co4"},
    {"sound": "skid-d"},
    {"sound": "jpn"}
  ];

  // divs
  let divs = document.querySelectorAll(".container > div");

  // add click event listener, to play sound, to each item in divs
  divs.forEach(function (div, index) {
    div.addEventListener("click", function () {
      let timeDelay = 0;

      // loop sound 5x
      for (let i = 0; i < 5; i++) {
        timeDelay += 1000;

        // add 1 sec delay to each play
        window.setTimeout(function () {
          console.log("sounds/" + sounds[index].sound + ".mp3");
          new Audio("sounds/" + sounds[index].sound + ".mp3").play();
        }, timeDelay);
      }
      console.log(timeDelay);

      // reset timeDelay to 0
      if (timeDelay >= 5000) {
        timeDelay = 0;
      }
    });
  });
}

// play sound on page load
new Audio("sounds/skid-d.mp3").play();

daWae();
