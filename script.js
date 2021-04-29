function program1()
{
var varOne= document.getElementById("value1").value;
var varTwo= document.getElementById("value2").value;
callByValue(varOne,varTwo) 
document.write("After Swapping using CALL BY VALUE &nbsp &nbsp &nbsp &nbsp &nbsp");

document.write("Number 1 :" + varTwo+ "  &nbsp &nbsp "+ "Number 2 :" +varOne);

function callByValue(x, y) { 
    console.log("PASS BY VALUE");
    console.log("\n");
    console.log("Before Swapping"); 
    console.log("VALUE1 =" + varOne +" VALUE2 =" +varTwo); 
    let temp;
    temp=x;
    x=y;
    y=temp

    console.log("After Swapping "); 
    console.log("VALUE1 =" + x +" VALUE2 =" +y); 
    
  } 





console.log("\n")

}
function program2()
{
  var varOne= document.getElementById("value3").value;
  var varTwo= document.getElementById("value4").value;
  let obj = {a:varOne,b:varTwo};
  callByReference(obj) 
  document.write("After Swapping USING CALL BY REFERENCE&nbsp &nbsp &nbsp &nbsp &nbsp");
  document.write("\n")
  document.write("Number 1 :" + obj.a + " &nbsp &nbsp   "  +"Number 2 :\n" +obj.b)
  

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

}
