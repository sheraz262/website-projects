

function myFunction1() {
  document.getElementById('external').innerHTML = "external jawascript.";
}
function myFunction(){
  document.getElementById("id4").innerHTML = "Paragraph changed.";
}
document.getElementById('inner').innerHTML = "i used this paragraph in script tag";
window.alert(5 + 6);

//functions practice

       //call a function
       function caller(c,d){
        var z = caller(5,5);
           return c + d;
       }
       //for output
       document.getElementById('first').innerHTML="this is output" + z;
   function MyFunction(a,b) {
       return a * b;   
   }
       document.getElementById('call').innerHTML =
       "This Is My Function : " + MyFunction(4,5);