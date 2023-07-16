<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $server = "localhost";
    $username = "root";
    $password = "";
    $database = "portfoliocontacts";

    $connectionquery = mysqli_connect($server, $username, $password, $database);
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $msg = htmlspecialchars($_POST["msg"]);
    
    $sql = "INSERT INTO `messages` (`userId`, `name`, `email`, `message`) VALUES (NULL, '$name', '$email', '$msg')";
    $result = mysqli_query($connectionquery, $sql);
    $response = [];
    if ($result) {
        $response['msg'] = "<span> We'll connect soon ! &#128578; &#128077;</span>"; 
        $response['timer'] = 3000; 
        echo json_encode($response);    
    }else{
        $response['msg'] = '<span>Your message wasn\'t sent. &#128566;<hr> Can you plzzz try again later &#128535;</span><button class="modal-btn" onClick="closeModal()">SURE</button>'; 
        $response['timer'] = 60000; 
        echo json_encode($response);    
    }
}
?>