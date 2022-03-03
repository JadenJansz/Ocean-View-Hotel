<?php

    $server = 'localhost:3308';
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

    $name = $_POST['name'];
    $email = $_POST['email'];
    $contact = $_POST['telcontact'];
    $residence = $_POST['residence'];
    $comment = $_POST['comments'];

    $cmd = "Delete from contact_us where Name = '$name'";
    
    if(mysqli_query($conn,$cmd))
    {
        echo "Record Created Successfully";
    }
    else
    {
        echo "Error :". mysqli_error($conn);
    }

    $conn->close();

?>
