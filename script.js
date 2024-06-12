var i = 0;
var txt = 'I am a hardworking College student and intern. I practice programming in College, my industry placement and in my spare time. I am an adaptable, quick learner who takes pride in all my work. I am looking for entry level work with a preference for web development but I’m open to other areas.';
var speed = 50;
const key = "XqJzc9pMs9kurtjTrcxtdA==Zj1EpfXwrobCK8fX";

$(document).ready(() => {

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

  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/weather?city=' + "Ipswich",
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



  var frameIndex = 0;
  var frameForwards = 1;
  setInterval(() => {
    if(frameForwards && frameIndex === 2){
      frameForwards = -1
    }else if(frameIndex === 0){
      frameForwards = 1
    }
    frameIndex += frameForwards;
    console.log("running")
    $(".stickman").attr("src", "stickman/sitckman" + frameIndex + ".png")
  }, 200)


  $(".stickman").draggable();
})