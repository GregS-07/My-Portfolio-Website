var i = 0;
var txt = 'I am a hardworking College student and intern. I practice programming in College, my industry placement and in my spare time. I am an adaptable, quick learner who takes pride in all my work. I am looking for entry level work with a preference for web development but I’m open to other areas.';
var speed = 50;

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
    $(".fixed-content").slideToggle();
  });
})