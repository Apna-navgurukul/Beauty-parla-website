alert("Welcome to our website");
function data(){
var a=document.getElementById("n1").value;
var b=document.getElementById("n2").value;
var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if(a=="" || b==""){
    alert("All Fields are mendatory");
    return false;
}
else if(b.length!==8){
    alert("Number should be 8 digits");
    return false;
}
else if (!emailPattern.test(a)) { 
    alert("Invalid email format!");
    return false;
} 

else{
    true;
    alert("Register Successful");
}

}





