function program()
{
var varOne= document.getElementById("value1").value;
var varTwo= document.getElementById("value2").value;


function callByValue(x, y) { 
    console.log("PASS BY VALUE")
    console.log("\n")
    console.log("Before Swapping"); 
    console.log("VALUE1 =" + varOne +" VALUE2 =" +varTwo); 
    let temp;
    temp=x;
    x=y;
    y=temp

    console.log("After Swapping "); 
    console.log("VALUE1 =" + x +" VALUE2 =" +y); 
    
  } 


callByValue(varOne,varTwo) 

console.log("\n")



function callByReference(obj) { 
    console.log("PASS BY REFERENCE")
    console.log("\n")
    console.log("Before Swapping"); 
    console.log(obj);
    
    var temp=obj.a ; 
    obj.a=obj.b;
    obj.b=temp;
    console.log("After Swapping");
     console.log(obj);
    
  } 
let obj = {a:varOne,b:varTwo};
callByReference(obj) 
}