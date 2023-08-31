$(document).ready(function () {
  $("#auth").submit(function (e) {
      e.preventDefault(); // Prevent default form submission
      var formData = $(this).serialize();
      $.post("http://localhost:5000/dashboard", formData, function (response) {
          if (response.success === true) {
            document.getElementById("auth").style.display = "none";
            document.getElementById("myTable").className = "flex";
            const table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
            response.messages.forEach(element => {
              const newRow = table.insertRow();
              const date = newRow.insertCell(0);
              const time = newRow.insertCell(1);
              const name = newRow.insertCell(2);
              const email = newRow.insertCell(3);
              const message = newRow.insertCell(4);

              date.innerHTML = new Date(element.timeStamp).toLocaleDateString();
              time.innerHTML = new Date(element.timeStamp).toLocaleTimeString();
              name.innerHTML = element.senderName;
              email.innerHTML = element.senderEmail;
              message.innerHTML = element.message;
              
            });
            $('#myTable').DataTable();
  
          } else {

          }
      });
  });
});
