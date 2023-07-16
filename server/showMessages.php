<?php

    if($_SESSION['loggedin'] = true ){
        $server = "localhost";
        $username = "root";
        $password = "";
        $database = "portfoliocontacts";
        $connectionquery = mysqli_connect($server, $username, $password, $database);
        
        $getDataSqlQuery = "SELECT * FROM `messages`;";
        $result = mysqli_query($connectionquery, $getDataSqlQuery);
    } else {
        header("location: adminLogin.php");
    }

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdn.datatables.net/1.11.4/css/jquery.dataTables.min.css"/>
    <style>
      body {
        width: 100%;
        margin: auto;
        margin-top: 5%;
        font-family: "Courier New", Courier, monospace;
      }
    </style>
    <title>Messages List</title>
  </head>
  <body>

    <?php
        if( $_SESSION['loggedin'] = true ){
            echo "
            <table id='table_id' class='display'>
            <thead>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                </tr>
            </thead>

            <tbody>";
                while($row = mysqli_fetch_assoc($result)){
                    echo "
                    <tr>
                        <td>".$row['userId']."</td>
                        <td>".$row['name']."</td>
                        <td>".$row['email']."</td>
                        <td>".$row['message']."</td>
                    </tr>";
                }
            echo "    
            </tbody>
            </table>";
        }
    ?>

  </body>

  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
  <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.4/js/jquery.dataTables.js"></script>
  <script>
    $(document).ready(function () {
      $("#table_id").DataTable({});
    });
  </script>
</html>
