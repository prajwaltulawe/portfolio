
/* document.onscroll = function scroll() {
  var firstsec = document.getElementsByClassName('main-sec')[0];
  var secondsec = document.getElementsByClassName('main-sec')[1];
  secondsec.scrollIntoView({behavior: "smooth"});
 } */

 function showProjects(){
  var e = document.querySelectorAll(".d-none");
  e.forEach(element => {
      element.setAttribute('style', `display: flex`);
  });
 }