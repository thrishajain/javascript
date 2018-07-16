function searchElement(arr,ele){
  for(var i=0;i<arr.length;i++){
    if(arr[i]==ele){
      return true;
    }
 
  }
  return false;
  
}var number=[5,7,9,6,8,2];
console.log(searchElement(number,3));

function serchElements(arr,e1,e2,e3){
  if(searchElement(arr,e1) && searchElement(arr,e2)&&searchElement(arr,e3)){
    return true;
  }
  return false;
}var num=[2,3,5,7,9,8];
console.log(serchElements(num,8,9,6))
