// Declara el tipo de datos
function downloadData(contentType,data,filename){
	// Guarda el elemento
  var link=document.createElement("A");
  link.setAttribute("href",encodeURI("data:"+contentType+","+data));
  link.setAttribute("style","display:none");
  link.setAttribute("download",filename);
  document.body.appendChild(link);
  // Inserta en el log de la consola la salida
  console.log(link.outerHTML);
  link.click();
  setTimeout(function(){
    document.body.removeChild(link);
  },1000);
}

function FormToXml(form){
  var inputs=form.elements;
  var xmldata=['<?xml version="1.0"?>'];
  xmldata.push("<report>");
  // Creo elemento
  var name = document.createElement("name");
  // CDATA obtenido con el array del documento
  var nameCDATA = document.createTextNode(inputs[0].value);
  name.appendChild(nameCDATA);

  // Elementos y datos
  var email = document.createElement("email");
  var emailCDATA = document.createTextNode(inputs[1].value);
  email.appendChild(emailCDATA);
  var animal = document.createElement("animal");
  var animalCDATA = document.createTextNode(inputs[2].value);
  animal.appendChild(animalCDATA);
  var location = document.createElement("location");
  var locationCDATA = document.createTextNode(inputs[3].value);
  location.appendChild(locationCDATA);
  var details = document.createElement("details");
  var detailsCDATA = document.createTextNode(inputs[4].value);
  details.appendChild(detailsCDATA);

  // Inclusión de los elementos y datos
  xmldata.push(" "+name.outerHTML);
  xmldata.push(" "+email.outerHTML);
  xmldata.push(" "+animal.outerHTML);
  xmldata.push(" "+location.outerHTML);
  xmldata.push(" "+details.outerHTML);
  xmldata.push("</report>");
  return xmldata.join("\n");
}

// Exporta el fichero
function download(frm){

 var data=FormToXml(frm);
 console.log(data);
 
 downloadData("text/xml",data,"reporte.xml");
}