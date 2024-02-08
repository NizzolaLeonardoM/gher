var Saldo=localStorage.getItem("saldo");
var uid=localStorage.getItem("UID");

document.getElementById("saldo").innerHTML=Saldo;
document.getElementById("uid").innerHTML=uid;
		
function reset(){
	Saldo=10;
	localStorage.setItem("saldo", Saldo);
	document.getElementById("saldo").innerHTML=Saldo;
	document.getElementById("home").click();
}