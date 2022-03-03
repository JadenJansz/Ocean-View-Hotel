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

    $cmd = "Insert into contact_us(Name,Email,Contact,Residence,Comments) values ('$name','$email','$contact','$residence','$comment')";
    
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