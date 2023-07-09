
/* document.onscroll = function scroll() {
  var firstsec = document.getElementsByClassName('main-sec')[0];
  var secondsec = document.getElementsByClassName('main-sec')[1];
  secondsec.scrollIntoView({behavior: "smooth"});
 } */

 function showProjects(){
  var hiddenProjects = document.querySelectorAll(".projects .d-none");
  hiddenProjects.forEach(element => {
      element.setAttribute('style', `display: flex`);
  });
  var viewMore = document.getElementsByClassName("view-more-button")[0];
  viewMore.setAttribute('style', `display: none`);
}

function showNav(){
  if (document.querySelectorAll(".resNav")[0]) {
    document.querySelectorAll(".lines")[0].setAttribute('class', `lines`)
    var otherNavItems = document.querySelectorAll(".nav-item");
    otherNavItems.forEach(element => {
        element.setAttribute('class', `nav-item d-none`);
    });
  } else {
    var otherNavItems = document.querySelectorAll(".nav-item");
    otherNavItems.forEach(element => {
        element.setAttribute('class', `nav-item`);
    });
    document.querySelectorAll(".lines")[0].setAttribute('class', `lines resNav`)
  }
}

function setActive(ref){
  var otherNavItems = document.querySelectorAll(".nav-item");
  otherNavItems.forEach(element => {
      element.setAttribute('class', `nav-item`);
  });
  ref.parentElement.setAttribute('class', `nav-item active`);
}