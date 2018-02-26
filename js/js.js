var min=10;
var seg=0;
var alerta=false;

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
var url ="https://rawgit.com/Josepcampos/Validacion_XML/master/xml/xml.xml"; //URL DEL FICHERO XML DE RAWGIT

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

	for (var i=0;i<10;i++) {
		document.getElementsByTagName("h2")[i].innerHTML = xmlDoc.getElementsByTagName("number")[i].innerHTML;
 		document.getElementsByTagName("p")[i].innerHTML = xmlDoc.getElementsByTagName("title")[i].innerHTML
	}
	
//SELECT SIMPLE
//RECUPERAR OPCIONES  
var nOpts1=xmlDoc.getElementById("q03").getElementsByTagName('option').length;
	var sel = document.getElementsByTagName("select")[0];
	for (var i=0; i<nOpts1; i++) {
		var opt = document.createElement("option");
		opt.value=i+1;
		opt.text=xmlDoc.getElementById("q03").getElementsByTagName('option')[i].innerHTML;
		sel.options.add(opt);
	}

var nOpts2=xmlDoc.getElementById("q04").getElementsByTagName('option').length;
	var sela = document.getElementsByTagName("select")[1];
	for (var j=0; j<nOpts2; j++) {
		var opta = document.createElement("option");
		opta.value=j+1;
		opta.text=xmlDoc.getElementById("q04").getElementsByTagName('option')[j].innerHTML;
		sela.options.add(opta);
	}

//RADIO BUTTONS
//RECUPERAR OPCIONES
var nOpts3=xmlDoc.getElementById("q05").getElementsByTagName('option').length;
	var selb = document.formu.pp5;
	for (var k=0;k<nOpts3;k++) {
		var optb = document.createElement("radio");
		optb.value=k+1;
		optb.text=xmlDoc.getElementById("q05").getElementsByTagName('option')[k].innerHTML;
		selb.appendChild(optb);
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
