
function setValues(name, price,id)
{
    const url = window.location.href;

    const currenturl = url.substring(url.indexOf('?')+1);

    const room = name;
    const roomprice = price;
    const roomid = id;

    window.location.href = "PersonalDetails.html?"+currenturl+"&roomID="+roomid+"&roomname="+room+"&price="+roomprice;

}