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

function closeModal(){
  document.getElementsByClassName("modal-cointainer")[0].style.display = "none";
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
      if (this.childNodes[1].src.indexOf("gif") != -1) {
        var gifWord = this.childNodes[1].src.indexOf("gif");
        this.childNodes[1].src = this.childNodes[1].src.substr(0, gifWord) + "img.webp"
      }
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
    
    if (this.childNodes[3].childNodes[1].src.indexOf("gif") == -1) {
      this.childNodes[3].childNodes[1].src = projectGif[this.id];
      event.preventDefault();
    }
  });

  $('#form').submit(function(e){
    
    document.getElementsByClassName("modal-cointainer")[0].style.display = "flex";
    document.getElementById("contact-Msg").innerHTML = `<span>Your message wasn't sent. &#128566;<hr> You can try other options below!</span><button class="modal-btn" onClick="closeModal()">SURE</button>`;

    e.preventDefault();
    var formData = $(this).serialize();
    $.post('http://apis.mywebcommunity.org/portfolio/sendMessages.php', formData, 
    function(response){
        setTimeout(() => {
          document.getElementsByClassName("modal-cointainer")[0].style.display = "none";
        }, response['timer']);
        document.getElementsByClassName("modal-cointainer")[0].style.display = "flex";
        document.getElementById("contact-Msg").innerHTML = response['msg'];
    });
  });
});

