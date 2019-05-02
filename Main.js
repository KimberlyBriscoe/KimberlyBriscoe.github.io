


function LogUserIn()
{

	console.log("click");


var emailText =document.getElementById("email");
var passwordText =document.getElementById("password");
console.log(emailText.value);
console.log(passwordText.value);

if (emailText.value.length == 0) {
	window.alert("Invalid Email")
} else if (passwordText.value.length <6) {
	window.alert("Invalid Password")
} else { 
window.location.href="index.html"

};






}