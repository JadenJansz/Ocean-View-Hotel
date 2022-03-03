const form = document.getElementById('contactform');
const fname = document.getElementById('name');
const email = document.getElementById('email');
const contact = document.getElementById('telcontact');
const residence = document.getElementById('residence');
const comments = document.getElementById('comments');


    var bname=false,bemail = false,bcontact=false,bresidence=false;

function checkInputs()
{
    const fnameValue = fname.value.trim();
    const emailValue = email.value.trim();
    const contactValue = contact.value.trim();
    const residenceValue = residence.value.trim();
    const commentValue = comments.value.trim();
    
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
        bname=true;
    }

    if(contactValue === '')
    {
        setErrorFor(contact,'contact number cannot be blank');
    }
    else if(isNaN(contactValue))
    {
        setErrorFor(contact,'invalid contact nummber');
    }
    else if(contactValue.value < 10)
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

    if(residenceValue === '')
    {
        setErrorFor(residence,'residence cannot be blank');
    }
    else
    {
        setSuccessFor(residence);
        bresidence=true;
    }


    if(bname==true && bcontact == true && bemail == true && bresidence==true)
    {
        $.ajax
        ({
            type:'post',
            url:'Noneed.php',
            data:
            {
                name:fnameValue,
                email:emailValue,
                telcontact:contactValue,
                residence:residenceValue,
                comments:commentValue
            },
            success: function(response)
            {
                alert("Successfull");
            }
            
        });
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

function reseterror(input)
{
    var formControl = document.getElementsByClassName("form-control");

    for(i=0;i<formControl.length;i++)
    {
        formControl[i].className="form-control";
    }
}