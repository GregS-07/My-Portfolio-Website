var i = 0;  // Frame number

// Profile for typewriter 
var txt = 'I am a hardworking College student and intern. I practice programming in College, my industry placement and in my spare time. I am an adaptable, quick learner who takes pride in all my work. I am looking for entry level work with a preference for web development but I’m open to other areas.';
var speed = 50; // Typing speed
const key = "XqJzc9pMs9kurtjTrcxtdA==Zj1EpfXwrobCK8fX";


// Pattern Generator

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const cellClasses = ['eclipse', 'circle', 'square', 'semi-left', 'semi-right'];
const gridClasses = ['grid-2', 'grid-3', 'grid-4', 'grid-5', 'grid-10', 'grid-15']
const colours = ['yellow', 'green', 'red', 'blue', 'purple', 'orange', 'pink']

let gridClass = ""

function generatePattern() {
  gridClass = gridClasses[getRandomInteger(0, gridClasses.length - 1)];
  $(".grid").addClass(gridClass);

  const gridSize = parseInt(gridClass.split("-")[1]) ** 2;

  for (let i = 0; i < gridSize; i++) {
    const cellClass = cellClasses[getRandomInteger(0, cellClasses.length - 1)];

    const cell = $("<div class=\"cell\"></div>").addClass(cellClass);
    $(cell).addClass(colours[getRandomInteger(0, colours.length - 1)]);

    $(".grid").append(cell);
  }
}


// Only run once page is loaded
$(document).ready(() => {

  // Typewriter effect
  function typeWriter() {
    if (i < txt.length) {
      $('.profile').append(txt.charAt(i));
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();

  //toggle fixed contact popup
  $(".fixed-title").on("click", () => {
    $(".more").toggleClass("rotate45");
    $(".fixed-content").slideToggle("slow");
  });


  // Weather in Ipswich using latitude and longitude
  var lat = 52.0567;
  var lon = 1.1482;

  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/weather?lat=' + lat + '&lon=' + lon,
    headers: { 'X-Api-Key': key },
    contentType: 'application/json',
    success: function(result) {
        let temp = result.temp;
        let emoji = null;
        if(temp < 10){
          emoji = "🥶";
        }else if(temp >= 10 && temp < 20){
          emoji = "🧣";
        }else if(temp >= 20 && temp <= 25){
          emoji = "😎"
        }else if(temp > 25 && temp <= 30){
          emoji = "☀️"
        }else{
          emoji = "🔥"
        }
        $('.location').append(` ${emoji}🌡️ ${result.temp}°C
        `);
    }
});


  // Animating stickman
  var frameIndex = 0;
  var frameForwards = 1;
  setInterval(() => {
    if(frameForwards && frameIndex === 2){
      frameForwards = -1;
    }else if(frameIndex === 0){
      frameForwards = 1;
    }
    frameIndex += frameForwards;
    console.log("running");
    $(".stickman").attr("src", "images/stickman/sitckman" + frameIndex + ".png");
  }, 200)

  // Making stickman draggable
  $(".stickman").draggable();

  // on click generate pattern
  $(".generate").on("click", () => {
    $(".grid").removeClass(gridClass)
    $(".cell").remove()
    generatePattern()
  })
})