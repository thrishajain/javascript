function checkNumber()
{
    var num=document.getElementById("num").value;
    var message;
    if(num % 2 == 0)
        {
            message="Number:"+num+"is Even";
        }
    else{
message="Number:" +num+ " is Odd";
    }
    document.getElementById("res").innerHTML=message;
}                                                   
function billCalc()
{
    var unit=document.getElementById("unit").value;
    var min_amount=0;
    var total_amount=0;
    var amount=0;
    if(unit >=0 && unit <100)
        {
            amount=unit*5;
        }else if(unit >=100 && unit <500)
            {
                amount=unit*6;
            }else{
                amount=unit*10;
            }
    total_amount=min_amount+amount;
    message="Total bill amount is:"+total_amount;
    document.getElementById("res").innerHTML=message;
}