function Welcome(){
	let user = document.getElementById("user").value;
	let txtpassword= document.getElementById("txtpassword").value;
if ((user=="winfred")&&(txtpassword== "winfred")) {
	window.open("https://www.youtube.com/");
}
else{
	alert("Incorrect password or username");
 }
}
