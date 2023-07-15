/* document.onscroll = function scroll() {
  var firstsec = document.getElementsByClassName('main-sec')[0];
  var secondsec = document.getElementsByClassName('main-sec')[1];
  secondsec.scrollIntoView({behavior: "smooth"});
 } */

function showProjects() {
  var hiddenProjects = document.querySelectorAll(".projects .d-none");
  hiddenProjects.forEach((element) => {
    element.setAttribute("style", `display: flex`);
  });
  var viewMore = document.getElementsByClassName("view-more-button")[0];
  viewMore.setAttribute("style", `display: none`);
}

function showNav() {
  if (document.querySelectorAll(".resNav")[0]) {
    document.querySelectorAll(".lines")[0].setAttribute("class", `lines`);
    var otherNavItems = document.querySelectorAll(".nav-item");
    otherNavItems.forEach((element) => {
      element.setAttribute("class", `nav-item d-none`);
    });
  } else {
    var otherNavItems = document.querySelectorAll(".nav-item");
    otherNavItems.forEach((element) => {
      element.setAttribute("class", `nav-item`);
    });
    document
      .querySelectorAll(".lines")[0]
      .setAttribute("class", `lines resNav`);
  }
}

function setActive(ref) {
  var otherNavItems = document.querySelectorAll(".nav-item");
  otherNavItems.forEach((element) => {
    element.setAttribute("class", `nav-item`);
  });
  ref.parentElement.setAttribute("class", `nav-item active`);
}

$(document).ready(function () {
  $("div.project").hover(
    function () {
      var projectGif = {  
        carrer: "./images/projects/carrer-gif.webp",
        mpm: "./images/projects/mpm-gif.webp",
        cropbid: "./images/projects/cropbid-gif.webp",
        mediafire: "./images/projects/mediafire-gif.webp",
        cms: "./images/projects/cms-gif.webp",
        ecomm: "./images/projects/ecomm-gif.gif",
        quotation: "./images/projects/quotation-gif.gif",
        vehicle: "./images/projects/vehicle-gif.gif",
        chatapp: "./images/projects/chatapp-gif.gif"
      }
      this.childNodes[3].childNodes[1].src = projectGif[this.id];
    },
    function () {
      var projectImg = {  
        carrer: "./images/projects/carrer-img.webp",
        mpm: "./images/projects/mpm-img.webp",
        cropbid: "./images/projects/cropbid-img.webp",
        ecomm: "./images/projects/ecomm-img.webp",
        mediafire: "./images/projects/mediafire-img.webp",
        cms: "./images/projects/cms-img.webp",
        quotation: "./images/projects/quotation-img.webp",
        vehicle: "./images/projects/vehicle-img.webp",
        chatapp: "./images/projects/chatapp-img.webp"
      }
      this.childNodes[3].childNodes[1].src = projectImg[this.id];
    }
  );

  $("div.project").on("pointerdown", function(event) {
    
    $("div.project-img").each(function(){
      this.childNodes[1].src = this.childNodes[1].src.replace(new RegExp("\\b" + "gif" + "\\b"), 
      function(match, index) {
        console.log(match, index)
        if(index === 0){
          return "img";
        }
      }); 
    });
    
    var projectGif = {  
      carrer: "./images/projects/carrer-gif.webp",
      mpm: "./images/projects/mpm-gif.webp",
      cropbid: "./images/projects/cropbid-gif.webp",
      mediafire: "./images/projects/mediafire-gif.webp",
      cms: "./images/projects/cms-gif.webp",
      ecomm: "./images/projects/ecomm-gif.gif",
      quotation: "./images/projects/quotation-gif.gif",
      vehicle: "./images/projects/vehicle-gif.gif",
      chatapp: "./images/projects/chatapp-gif.gif"
    }
    this.childNodes[3].childNodes[1].src = projectGif[this.id];
    event.preventDefault();
  });

});

