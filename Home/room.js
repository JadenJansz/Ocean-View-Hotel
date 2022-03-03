
function setValues(name, price)
{
    const url = window.location.href;

    const currenturl = url.substring(url.indexOf('?')+1);

    const room = name;
    const roomprice = price;

    window.location.href = "PersonalDetails.html?"+currenturl+"&roomname="+room+"&price="+roomprice;

}