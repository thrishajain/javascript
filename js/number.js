function checkPrime(){
   var num = getUserInput();
    flag = true;
    if(num < 2){
        flag=false;
    }
    for(var i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
                flag=false;
                break;
        }
    }
    
    if(flag){
        showResult(num+ "is prime");
    }
    else{ 
        showResult(num+ "is not prime");
    }
}


function factorial(){
    
       var num = getUserInput();
    var res = 1;
    for(var i = 2; i<= num; i++){
        res *= i;
    }
     showResult("Factorial of" +num+ " is: " +res);
}
function factor(){
 var num = getUserInput();
    var fact=" ";
    for(var i = 1; i <= num; i++){
        if(num % i == 0){
            fact += i+ " ";
        }
       
    }
    showResult("factors of" +num+ " is: "+fact);
}
function fibonecci(){
  var num = getUserInput();
    var output= "";
    if(num==1){
        output +="0 1";
    }else if(num == 2){
        output += "0 1";
             
             }else{
                 var a=0,b=1;
                 output +="0 1";
                 for(var i=3;i<=num;i++){
                     c=a+b;
                     output += " "+c;
                     a=b;
                     b=c;
                     
                 }
             }
    showResult("fibonecci of:"+num+"is:"+output);
}
    
    

    

function getUserInput(){
    num = document.getElementById("num").value;
    return num;
}
function showResult(message){
    document.getElementById("result").innerHTML="<h4>"+message+"<h4>";
}