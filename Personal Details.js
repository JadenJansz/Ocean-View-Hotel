

    const url = window.location.href;
    const currenturl = url.substring(url.indexOf('?')+1);
    
    const urlParam = new URLSearchParams(currenturl);

    const roomID = urlParam.get('roomID');
    const roomType = urlParam.get('room');
    const checkin = urlParam.get("checkin");
    const checkout = urlParam.get("checkout");
    const adult = urlParam.get("adult");
    const child = urlParam.get("child");
    const roomname = urlParam.get("roomname");
    const price = urlParam.get("price");

    console.log(roomID);
    console.log(roomType);
    console.log(checkin);
    console.log(checkout);
    console.log(adult);
    console.log(child);
    console.log(roomname);
    console.log(price);

        var date1 = new Date(checkin);
        var date2 = new Date(checkout);

        var time_difference = date2.getTime() - date1.getTime();

        var date_difference = time_difference/(1000*3600*24);

        const final_price =  price*date_difference;

        const final_priceValue = final_price.value;
        
        //Single Rooms
        if(roomname == "SSR1")
        {
            document.getElementById('rname').value ="Single - Silver Package (LKR 8000.00)";
        }
        if(roomname == "SGR1")
        {
            document.getElementById('rname').value ="Single - Gold Package (LKR 10000.00)";
        }
        if(roomname == "SPR1")
        {
            document.getElementById('rname').value ="Single - Platinum Package (LKR 14000.00)";
        }

        if(roomname == "SSR2")
        {
            document.getElementById('rname').value ="Single - Silver Package (LKR 9000.00)";
        }
        if(roomname == "SGR2")
        {
            document.getElementById('rname').value ="Single - Gold Package (LKR 11000.00)";
        }
        if(roomname == "SPR2")
        {
            document.getElementById('rname').value ="Single - Platinum Package (LKR 14000.00)";
        }

        if(roomname == "SSR3")
        {
            document.getElementById('rname').value ="Single - Silver Package (LKR 10000.00)";
        }
        if(roomname == "SGR3")
        {
            document.getElementById('rname').value ="Single - Gold Package (LKR 12000.00)";
        }
        if(roomname == "SPR3")
        {
            document.getElementById('rname').value ="Single - Platinum Package (LKR 15000.00)";
        }

        //Double Rooms

        if(roomname == "DSR1")
        {
            document.getElementById('rname').value ="Double - Silver Package (LKR 10000.00)";
        }
        if(roomname == "DGR1")
        {
            document.getElementById('rname').value ="Double - Gold Package (LKR 12000.00)";
        }
        if(roomname == "DPR1")
        {
            document.getElementById('rname').value ="Double - Platinum Package (LKR 14000.00)";
        }

        if(roomname == "DSR2")
        {
            document.getElementById('rname').value ="Double - Silver Package (LKR 11000.00)";
        }
        if(roomname == "DGR2")
        {
            document.getElementById('rname').value ="Double - Gold Package (LKR 13000.00)";
        }
        if(roomname == "DPR2")
        {
            document.getElementById('rname').value ="Double - Platinum Package (LKR 15000.00)";
        }

        if(roomname == "DSR3")
        {
            document.getElementById('rname').value ="Double - Silver Package (LKR 12000.00)";
        }
        if(roomname == "DGR3")
        {
            document.getElementById('rname').value ="Double - Double Package (LKR 14000.00)";
        }
        if(roomname == "DPR3")
        {
            document.getElementById('rname').value ="Double - Platinum Package (LKR 16000.00)";
        }

        if(roomname == "LMR1")
        {
            document.getElementById('rname').value ="Luxury - Modern (LKR 23000.00)";
        }
        if(roomname == "LOR1")
        {
            document.getElementById('rname').value ="Luxury - Oceanic (LKR 23000.00)";
        }
        if(roomname == "LTR1")
        {
            document.getElementById('rname').value ="Luxury - Tropical (LKR 25000.00)";
        }

        document.getElementById('chkin').value = checkin;
        document.getElementById('chkout').value = checkout;
        document.getElementById('adult').value = adult;
        document.getElementById('child').value = child;
        document.getElementById('final').value = "LKR "+final_price+".00";
    



const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const Title = document.getElementById('title');
const email = document.getElementById('email');
const contact = document.getElementById('telcontact');
const cardnum = document.getElementById('cardnum');
const cardname = document.getElementById('cardname');
const month = document.getElementById('month');
const year = document.getElementById('year');
const cardid = document.getElementById('code');
const requests = document.getElementById('requests');
const agree = document.getElementById('agree');

    bfname=false,blname=false,bemail=false,bcontact=false,bcardnum=false,bcardname=false,bmonth=false,byear=false,bcardid=false,bagree=false;

function checkInputs()
{   
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const contactValue = contact.value.trim();
    const cardnumValue = cardnum.value.trim();
    const cardnameValue = cardname.value.trim();
    const cardidValue = cardid.value.trim();
    const TitleValue = Title.value.trim();
    const requestsValue = requests.value.trim();

    if(fnameValue === '')
    {
        setErrorFor(fname,'name cannot be blank');
    }
    else if(!isNaN(fnameValue))
    {
        setErrorFor(fname,'invalid name');
    }
    else if(fnameValue !== '')
    {
        setSuccessFor(fname);
        bfname=true;
    }

    if(lnameValue === '')
    {
        setErrorFor(lname,'name cannot be blank');
    }
    else if(!isNaN(lnameValue))
    {
        setErrorFor(lname,'invalid name');
    }
    else if(lnameValue !== '')
    {
        setSuccessFor(lname);
        blname=true;
    }

    if(contactValue === '')
    {
        setErrorFor(contact,'contact number cannot be blank');
    }
    else if(isNaN(contactValue))
    {
        setErrorFor(contact,'invalid contact nummber');
    }
    else if(contactValue.length < 10)
    {
        setErrorFor(contact,'invalid contact nummber');
    }
    else
    {
        setSuccessFor(contact);
        bcontact=true;
        
    }

    if(emailValue === '')
    {
        setErrorFor(email,'email cannot be blank');
    }
    else if(!isEmail(emailValue))
    {
        setErrorFor(email,'enter valid email');
    }
    else
    {
        setSuccessFor(email);
        bemail=true;
    }

    if(cardnumValue === '')
    {
        setErrorFor(cardnum,'card number cannot be blank');
    }
    else if(isNaN(cardnumValue))
    {
        setErrorFor(cardnum,'invalid card nummber');
    }
    else if(cardnumValue.length < 16)
    {
        setErrorFor(cardnum,'invalid card nummber');
    }
    else
    {
        setSuccessFor(cardnum);
        bcardnum=true;
        
    }

    if(cardnameValue === '')
    {
        setErrorFor(cardname,'name cannot be blank');
    }
    else if(!isNaN(cardnameValue))
    {
        setErrorFor(cardname,'invalid name');
    }
    else if(cardnameValue !== '')
    {
        setSuccessFor(cardname);
        bcardname=true;
    }

    if(month.value === '0')
    {
        setErrorFor(month,'select a month');
    }
    else
    {
        setSuccessFor(month);
        bmonth=true;
    }

    if(year.value === '0')
    {
        setErrorFor(year,'select a year');
    }
    else
    {
        setSuccessFor(year);
        byear=true;
    }

    if(cardidValue === '')
    {
        setErrorFor(cardid,'code cannot be blank');
    }
    else if(isNaN(cardidValue))
    {
        setErrorFor(cardid,'invalid code');
    }
    else if(cardidValue.length < 3)
    {
        setErrorFor(cardid,'invalid code');
    }
    else
    {
        setSuccessFor(cardid);
        bcardid=true;
        
    }

    if(!agree.checked)
    {
        alert("Please Agree to the Terms and Conditions");
    }
    else
    {
        bagree=true;
    }
    

    if(bfname==true && blname==true && bemail==true && bcontact==true && bcardnum==true && bcardname==true && bmonth==true && byear==true && bcardid==true && bagree==true)
    {
        $.ajax
        ({
            type:'post',
            url:'confirmation.php',
            data:
            {
                roomid:roomID,
                roomtype:roomType,
                checkIn:checkin,
                checkOut:checkout,
                adults:adult,
                children:child,
                price:final_price,
                request:requestsValue,

                fname:fnameValue,
                lname:lnameValue,
                email:emailValue,
                title:TitleValue,
                telcontact:contactValue
            },
            success: function(response)
            {
                console.log(response);
            }
            
        });

        alert("Payment Successful");
        window.location.href = "./home.html";
        return false;
    }
    else
    {
        return false;
    }
    
}


function setErrorFor(input,message)
{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email)
{
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email); 
}
