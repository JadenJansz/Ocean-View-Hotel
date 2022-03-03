const form = document.getElementById('bookingform');
const room = document.getElementById('room');
const checkin = document.getElementById('check-in');
const checkout = document.getElementById('check-out');
const adult = document.getElementById('adults');
const children = document.getElementById('children');
const errormsg = document.getElementById('checkinerror');

    var bcheckin=false,bcheckout=false,badult=false;


  /*  const rooms = {
        1: {
            price: 10000,
            name: () => {
                console.loglog('1312')
            }
        },
        2: {

        },
        3: {

        }
    };*/



function checkInputs()
{


    const roomValue = room.value.trim();
    const checkinValue = checkin.value.trim();
    const checkoutValue = checkout.value.trim();
    const adultValue = adult.value.trim();
    const childValue = children.value.trim();


    if(checkinValue === '')
    {
        document.getElementById('checkinerror').innerHTML="select a date";
        document.getElementById('checkinerror').style.color = "red";
    }
    else
    {
        document.getElementById('checkinerror').style.color = "whitesmoke";
        bcheckin=true;
    }

    if(checkoutValue === '')
    {
        document.getElementById('checkouterror').innerHTML="select a date";
        document.getElementById('checkouterror').style.color = "red";
    }
    else
    {
        document.getElementById('checkouterror').style.color = "whitesmoke";
        bcheckout=true;
    }

    if(adultValue === '0')
    {
        document.getElementById('adulterror').innerHTML="select count";
        document.getElementById('adulterror').style.color = "red";
    }
    else
    {
        document.getElementById('adulterror').style.color = "whitesmoke";
        badult=true;
    }


    if(badult==true && bcheckin==true && bcheckout==true)
    {
        if(roomValue == 'single')
        {
            window.location.href = "single.html?"+"room="+roomValue+"&checkin="+checkinValue+"&checkout="+checkoutValue+"&adult="+adultValue+"&child="+childValue;
        }
        else if(roomValue == 'double')
        {
            window.location.href = "double.html?"+"room="+roomValue+"checkin="+checkinValue+"checkout="+checkoutValue+"adult="+adultValue+"child="+childValue;;
        }
        else if(roomValue == 'luxury')
        {
            window.location.href = "luxury.html?"+"room="+roomValue+"checkin="+checkinValue+"checkout="+checkoutValue+"adult="+adultValue+"child="+childValue;;
        }
    }


    return false;
}
