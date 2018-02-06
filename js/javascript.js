//Preguntar si se quiere acceder al examen
function goExamen(){
	var a=confirm("Al pulsar 'Aceptar' serás redirigido al examen\n¿Estás preparado?");
	if (a==true){
		window.location="examen.html";
	} else {
		return false;
	}
}

//Preguntar si se quiere salir del examen al cerrar la ventana, F5 o cambiar URL
function cerrarExamen() {
	return "Al salir del examen se perderan todos los datos\n¿Está seguro?";
}
//NO TOCAR	
	var url = "https://rawgit.com/Josepcampos/Validacion_XML/master/xml.xml";

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
	// función personalizada que gestiona la respuesta a la petición de fichero
		gestionarXml(this); 
		}
	};
	
	xhttp.open("GET", url, true); //url del fichero
	xhttp.send();
//NO TOCAR
	

//Dar títulos a las preguntas desde XML
function gestionarXml(dadesXml){
	var xmlDoc = dadesXml.responseXML;
	document.getElementById("h21").innerHTML=xmlDoc.getElementsByTagName("number")[0].childNodes[0].nodeValue;
	document.getElementById("h22").innerHTML=xmlDoc.getElementsByTagName("number")[1].childNodes[0].nodeValue;
	document.getElementById("h23").innerHTML=xmlDoc.getElementsByTagName("number")[2].childNodes[0].nodeValue;
	document.getElementById("h24").innerHTML=xmlDoc.getElementsByTagName("number")[3].childNodes[0].nodeValue;
	document.getElementById("h25").innerHTML=xmlDoc.getElementsByTagName("number")[4].childNodes[0].nodeValue;
	document.getElementById("h26").innerHTML=xmlDoc.getElementsByTagName("number")[5].childNodes[0].nodeValue;
	document.getElementById("h27").innerHTML=xmlDoc.getElementsByTagName("number")[6].childNodes[0].nodeValue;
	document.getElementById("h28").innerHTML=xmlDoc.getElementsByTagName("number")[7].childNodes[0].nodeValue;
	document.getElementById("h29").innerHTML=xmlDoc.getElementsByTagName("number")[8].childNodes[0].nodeValue;
	document.getElementById("h210").innerHTML=xmlDoc.getElementsByTagName("number")[9].childNodes[0].nodeValue;
	document.getElementById("q1").innerHTML=xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
	document.getElementById("q2").innerHTML=xmlDoc.getElementsByTagName("title")[1].childNodes[0].nodeValue;
	document.getElementById("q3").innerHTML=xmlDoc.getElementsByTagName("title")[2].childNodes[0].nodeValue;
	document.getElementById("q4").innerHTML=xmlDoc.getElementsByTagName("title")[3].childNodes[0].nodeValue;
	document.getElementById("q5").innerHTML=xmlDoc.getElementsByTagName("title")[4].childNodes[0].nodeValue;
	document.getElementById("q6").innerHTML=xmlDoc.getElementsByTagName("title")[5].childNodes[0].nodeValue;
	document.getElementById("q7").innerHTML=xmlDoc.getElementsByTagName("title")[6].childNodes[0].nodeValue;
	document.getElementById("q8").innerHTML=xmlDoc.getElementsByTagName("title")[7].childNodes[0].nodeValue;
	document.getElementById("q9").innerHTML=xmlDoc.getElementsByTagName("title")[8].childNodes[0].nodeValue;
	document.getElementById("q10").innerHTML=xmlDoc.getElementsByTagName("title")[9].childNodes[0].nodeValue;
}
		
		
	

	
	