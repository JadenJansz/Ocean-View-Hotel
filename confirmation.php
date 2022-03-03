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

    $roomID = $_POST['roomid'];
    $type = $_POST['roomtype'];
    $checkin = $_POST['checkIn'];
    $checkout = $_POST['checkOut'];
    $adults = $_POST['adults'];
    $children = $_POST['children'];
    $request = $_POST['request'];
    $price = $_POST['price'];
    
    $contact = $_POST['telcontact'];
    $fname = $_POST['fname'];
    $lname =$_POST['lname'];
    $email =$_POST['email'];
    $title = $_POST['title'];

    // $get_email = "select Email from guest";

    // $result = $conn->query($get_email);

    // if($result->num_rows>0)
    // {
    //     while($row = fetch_assoc())
    //     {

    //     }
    // }

    $guest = "insert into guest(Fname,Lname,Title,Email,Contact) values('$fname','$lname','$title','$email','$contact') ";
    $result = mysqli_query($guest,$conn);
    // $getID = "select Guest_ID from guest where Email='$email'";
    // $result = mysqli_query($conn,$getID);
    // $row = mysqli_fetch_assoc($result);
    // $id = $row['Guest_ID'];

    if($conn->query($guest)==true)
    {
        $get_email = "select* from guest where Email='$email' ";
        $check = mysqli_query($get_email,$conn);
        $result = mysqli_fetch_row($check);
        $result = $result['0'];

        if($result>0)
        {
            print ("Already entered");
        }
        else
        {
            $guest_final = "insert into guest(Fname,Lname,Title,Email,Contact) values('$fname','$lname','$title','$email','$contact') ";
            $last_id = $conn->insert_id;

            echo "Record Created Successfully";
        }

        
    }
    else
    {
        echo "Error :". mysqli_error($conn);
    }

        
    
    $guest_room = "insert into guest_room(Guest_ID,Room_ID,Check_in,Check_out,Adult,Children,Price,Request) values('$last_id','$roomID','$checkin','$checkout','$adults','$children','$price','$request')";

    
    if(mysqli_query($conn,$guest_room))
    {
        echo "Record Created Successfully";
    }
    else
    {
        echo "Error :". mysqli_error($conn);
    }

    $conn->close();

?>