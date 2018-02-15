var min=10;
var seg=0;
var alerta=false;
var oSelect = new Array();

//FUNCIÓN AL ENTRAR AL EXAMEN DESDE INICIO.HTML O INSTRUCCIONES.HTML
function goExamen(){
	var a=confirm("Al pulsar 'Aceptar' serás redirigido al examen\n¿Estás preparado?");
	if (a==true){
		window.location="examen.html";
	} else {
		return false;
	}
}

//FUNCIÓN AL SALIR DEL EXAMEN
function cerrarExamen() {
	return "Al salir del examen se perderan todos los datos\n¿Está seguro?";
}

//GESTIÓN FICHERO XML
var url ="https://rawgit.com/Josepcampos/Validacion_XML/master/xml/xml1.xml"; //URL DEL FICHERO XML DE RAWGIT

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {

  gestionarXml(this); 
 }
};
xhttp.open("GET", url, true);
xhttp.send();
	
//FUNCIÓN PARSEAR
function gestionarXml(dadesXml){
  var xmlDoc = dadesXml.responseXML;
	/*
  document.getElementById("h21").innerHTML = xmlDoc.getElementsByTagName("number")[0].childNodes[0].nodeValue;
  document.getElementById("q1").innerHTML = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
  document.getElementById("h22").innerHTML = xmlDoc.getElementsByTagName("number")[1].childNodes[0].nodeValue;
  document.getElementById("q2").innerHTML = xmlDoc.getElementsByTagName("title")[1].childNodes[0].nodeValue;
  document.getElementById("h23").innerHTML = xmlDoc.getElementsByTagName("number")[2].childNodes[0].nodeValue;
  document.getElementById("q3").innerHTML = xmlDoc.getElementsByTagName("title")[2].childNodes[0].nodeValue;
  document.getElementById("h24").innerHTML = xmlDoc.getElementsByTagName("number")[3].childNodes[0].nodeValue;
  document.getElementById("q4").innerHTML = xmlDoc.getElementsByTagName("title")[3].childNodes[0].nodeValue;
  document.getElementById("h25").innerHTML = xmlDoc.getElementsByTagName("number")[4].childNodes[0].nodeValue;
  document.getElementById("q5").innerHTML = xmlDoc.getElementsByTagName("title")[4].childNodes[0].nodeValue;
  document.getElementById("h26").innerHTML = xmlDoc.getElementsByTagName("number")[5].childNodes[0].nodeValue;
  document.getElementById("q6").innerHTML = xmlDoc.getElementsByTagName("title")[5].childNodes[0].nodeValue;
  document.getElementById("h27").innerHTML = xmlDoc.getElementsByTagName("number")[6].childNodes[0].nodeValue;
  document.getElementById("q7").innerHTML = xmlDoc.getElementsByTagName("title")[6].childNodes[0].nodeValue;
  document.getElementById("h28").innerHTML = xmlDoc.getElementsByTagName("number")[7].childNodes[0].nodeValue;
  document.getElementById("q8").innerHTML = xmlDoc.getElementsByTagName("title")[7].childNodes[0].nodeValue;
  document.getElementById("h29").innerHTML = xmlDoc.getElementsByTagName("number")[8].childNodes[0].nodeValue;
  document.getElementById("q9").innerHTML = xmlDoc.getElementsByTagName("title")[8].childNodes[0].nodeValue;
  document.getElementById("h210").innerHTML = xmlDoc.getElementsByTagName("number")[9].childNodes[0].nodeValue;
  document.getElementById("q10").innerHTML = xmlDoc.getElementsByTagName("title")[9].childNodes[0].nodeValue;
  */
	for (var i=0;i<10;i++) {
		document.getElementsByTagName("h2")[i].innerHTML = xmlDoc.getElementsByTagName("number")[i].innerHTML;
 		document.getElementsByTagName("p")[i].innerHTML = xmlDoc.getElementsByTagName("title")[i].innerHTML
	}
	
//SELECT SIMPLE
//RECUPERAR OPCIONES  
var nOpts1=xmlDoc.getElementById("q03").getElementsByTagName('option').length;
	var sel = document.getElementsByTagName("select")[0];
	for (var i=0; i<nOpts1; i++) {
		//oSelect[i]=xmlDoc.getElementById("q03").getElementsByTagName('option')[i].innerHTML; //EN CADA POSICIÓN DE i (1,2,...,n) SE ALMACENA UN OBJETO EN EL ARRAY VACÍO
		//alert(oSelect[i]);
		var opt = document.createElement("option");
		opt.value=i+1;
		opt.text=xmlDoc.getElementById("q03").getElementsByTagName('option')[i].innerHTML;
		sel.appendChild(opt);
	}
		
} //FINAL PARSEAR

window.onload=function(){
	setInterval(actualizarTime,1000);
}
	
function actualizarTime(){
		var alerta=true;
		var segTimer;

    if((min>=0) && (seg>=0)){   
        if(seg<10){
            segTimer="0"+seg;
        }else{
            segTimer=seg;
        }
        document.getElementById("timer").innerHTML=min+" : "+segTimer;
        seg--; 
        if(seg<0){
            min--;
            seg=59;
        }  
    }else{
        document.getElementById("timer").innerHTML="0 : 00";        
        if (!alerta){
            alert("Se acabó el tiempo. Date prisa en enviar tus respuestas.");
            alerta=true;
    }
	}
}
        
   
         

	
		





