<?php

    $server = 'localhost';
    $user = 'root';
    $password = '';
    $database = 'hotel';

    $conn = mysqli_connect($server,$user,$password,$database);

    if(!$conn)
    {
        die("Error".$conn->connect_error());
    }
    else
    {
        echo 'Connection Successful';
    }

    $type = $_POST['room'];
    $checkin = $_POST['check-in'];
    $checkout = $_POST['check-out'];
    $adults = $_POST['adults'];
    $children = $_POST['children'];

?>