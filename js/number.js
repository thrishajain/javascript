function checkPrime(){
   var num = getUserInput();
    flag = true;
    if(num < 2){
        flag = false;
    }
    for(var i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
                flag = false;
                break;
        }
    }
    
    if(flag){
        showResult(num+ " is prime ");
    }
    else{ 
        showResult(num+ " is not prime ");
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
    var fact = " ";
    for(var i = 1; i <= num; i++){
        if(num % i == 0){
            fact += i+ " ";
        }
       
    }
    showResult("factors of" +num+ " is: " +fact);
}
function fibonecci(){
  var num = getUserInput();
    var output = "";
    if(num == 1){
        output += "0 1" ;
    }else if(num == 2){
        output += "0 1";
             
             }else{
                 var a = 0,b = 1;
                 output += "0 1";
                 for(var i = 3; i <= num; i++){
                     c = a + b;
                     output += " "+c;
                     a = b;
                     b = c;
                     
                 }
             }
    showResult("fibonecci of:"+num+"is:"+output);
}
    function reverse(){
        var num = getUserInput();   

        var rev = 0;
        while(num != 0){
          var r = num % 10;
            rev = rev * 10 + r;
            num = Math.floor(num / 10);
        }
        showResult("reverse is:" +rev );
        
    }
function palindrome(){
    var num = getUserInput();
    var rev = 0;
    var num2 = num;
    while(num != 0){
           r = num % 10;
            rev = rev * 10 + r;
            num = Math.floor(num / 10);
        
    }
    if(num2 == rev){
        showResult("number is palindrome");
    }
    else{
        showResult("number is not a palindrome");
    }
        
}
function digits(){
   var num = getUserInput();
    var sum = 0;
    while(num != 0){
        sum += num % 10;
        num=Math.floor(num / 10);
    }
    showResult("sum of digits is:"+sum);
}
function singledigit(){
    var num = getUserInput();
    var num2;
    var sum = num2;
    while(num > 9){
        sum = Math.floor(num / 10 + num % 10);
        num = sum;
        
    }
    showResult("sum of digits is:" +sum);
    
}
    

    

function getUserInput(){
    num = document.getElementById("num").value;
    return num;
}
function showResult(message){
    document.getElementById("result").innerHTML="<h4>"+message+"<h4>";
}