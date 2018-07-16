function calc(operation){
var num1=parseInt(document.getElementById("num1").value);
var num2=parseInt(document.getElementById("num2").value);
    var message="";
    switch(operation){
        case "Add":
            message=num1+"+"+num2+"="+(num1+num2);
            break;
        case "Sub":
            message=num1+"-"+num2+"="+(num1-num2);
            break;
        case "Mul":
            message=num1+"*"+num2+"="+(num1*num2);
            break;
        case "Div":
            message=num1+"/"+num2+"="+(num1/num2);
            break;
        case "Mod":
            message=num1+"%"+num2+"="+(num1%num2);
            break;
        default:message="please provide valid input";
    }
    document.getElementById("result").innerHTML=message;
    
}