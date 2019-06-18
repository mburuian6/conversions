//onload
var d = new Date();
document.getElementById('date').innerHTML = d;

var hour = d.getHours();
if(hour>=12 && hour<16){
	document.getElementById("greeting").innerHTML= "Good Afternoon";
}
else if(hour>=16){
	document.getElementById("greeting").innerHTML= "Good Evening";
}
else{
	document.getElementById("greeting").innerHTML= "Good Morning";
}

document.getElementById('titleOne').innerHTML = "None";
document.getElementById('titleTwo').innerHTML = "None";


//form validation
 function validateForm(){
 	var input = document.forms["myForm"]["input"].value;
 	var opt = document.forms["myForm"]["option"].value;

	document.forms["myForm"]["input"].innerHTML = input;
 	//titles
 	var t1 = document.getElementById('titleOne');
 	var t2 = document.getElementById('titleTwo');

 	//results
 	var r1 =  document.getElementById('resultOne');
 	var r2 = document.getElementById('resultTwo');

 	
 	//'preprocessing'
 	var numInput = Number(input);

 	//conditions
 	if(input == null || input == ""){
 		alert("Input must be filled out");
        
 	}
 	else if(opt == "cherry"){
 		var p = numInput/7;
 		var cc = p*0.8;

 		//display
 		t1.innerHTML = "Parchment: ";
 		t2.innerHTML = "Clean Coffee: "

 		r1.innerHTML = p ;
 		r2.innerHTML = cc;

 		
 	}
 	else if (opt == "parchment"){
 		var cof = numInput*7;
 		var cc = numInput*0.8;

 		//display
 		t1.innerHTML = "Cherry: ";
 		t2.innerHTML = "Clean Coffee: "

 		r1.innerHTML = cof ;
 		r2.innerHTML = cc;

 		
 	}
 	else if(opt == "Clean Coffee"){
 		var p = numInput/0.8;
 		var cof = p*7;

 		//display
 		t1.innerHTML = "Parchment: ";
 		t2.innerHTML = "Cherry: "

 		r1.innerHTML = p ;
 		r2.innerHTML = cof;

 		
 	}
 	else if(numInput == Nan){
 		alert("Invalid input");
 	}
 }
