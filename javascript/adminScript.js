$(document).ready(function () {
    $("#form").submit(function (e) {
    e.preventDefault();
    var formData = $(this).serialize();
    $.post("http://localhost:5000/dashboard", formData, function (response) {
      if (response.success === true) {
        document.getElementsByClassName("modal-cointainer")[0].style.display ="flex";
        document.getElementById("contact-Msg").innerHTML = `<span>We'll connect soon. &#128578;</span><button class="modal-btn" onClick="closeModal()">YUPPP!</button>`;
      } else {
        document.getElementsByClassName("modal-cointainer")[0].style.display = "flex";
        document.getElementById("contact-Msg").innerHTML = `<span>Your message wasn't sent. &#128566;<hr> You can try other options below!</span><button class="modal-btn" onClick="closeModal()">SURE</button>`;
      }
      setTimeout(() => {
        document.getElementsByClassName("modal-cointainer")[0].style.display ="none";
      }, 5000);
    });
  });
});
