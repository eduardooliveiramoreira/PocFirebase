## POC para demonstrar um aplicativo Hibrido com GoogleSheets e Firebase

Aplicativo híbrido, utilizando Angular (TypeScript) e Ionic para o desenvolvimento.
Realtime DataBase do Firebase atualizado a partir do Google Sheets (Planilha) onde é possível a partir de uma planilha atualizar informações no App, utilizamos como exemplo o IFCIÊNCIA (facebook.com/ifciencia/) para demonstrar uma possível utilização desta tecnologia.


### Firebase Realtime Database 
O Firebase Realtime Database é um banco de dados NoSQL hospedado na nuvem. Com ele, você armazena e sincroniza dados entre os seus usuários em tempo real.
O Realtime Database acompanha os SDKs para Web e dispositivos móveis. Assim, você desenvolve apps sem precisar de servidores. 

### Link Planilha Google Docs com as informações apresentadas:
https://docs.google.com/spreadsheets/d/1tlWQduS4zId5r-rC8WAe2cdY_SuIi_trCUu47i0qPE0/edit?usp=sharing


### Script Utilizado no GoogleSheets para a ligação com o Firebase:

function myFunction() {
  var firebaseUrl = "---";
  var secret = "---";
  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl,secret);  
  var ss = SpreadsheetApp.openById("1tlWQduS4zId5r-rC8WAe2cdY_SuIi_trCUu47i0qPE0");
  var sheets = ss.getSheets();    
  
for(var sheet = 0; sheet<sheets.length; sheet++){
  var data = sheets[sheet].getDataRange().getValues();
    var columnsName = sheets[sheet].getDataRange().getValues(); 
  var dataToImport = [];      
  for(var i = 1; i < data.length; i++) {
    switch(sheet){ 
      case 0:
      dataToImport.push(readQuarta(data, i));
      break;
      case 1:
      dataToImport.push(readQuinta(data, i));
      break;   
      case 2:
      dataToImport.push(readSexta(data, i));
      break;    
      case 3:
      dataToImport.push(readTemas(data, i));
      break;  
      default:
      break;
    }       
  }        
  base.setData(sheets[sheet].getName(), dataToImport);
  }             
}

function readQuarta(data, i){
   var dataTab = {
      horario:data[i][0],
      tipo_atividade:data[i][1],
      tema:data[i][2],
      apresentador:data[i][3],
      organizador:data[i][4],
      local:data[i][5]
    };   
  return dataTab;
}
function readQuinta(data, i){
   var dataTab = {
      horario:data[i][0],
      tipo_atividade:data[i][1],
      tema:data[i][2],
      apresentador:data[i][3],
      organizador:data[i][4],
      local:data[i][5]
    };   
  return dataTab;
}
function readSexta(data, i){
   var dataTab = {
      horario:data[i][0],
      tipo_atividade:data[i][1],
      tema:data[i][2],
      apresentador:data[i][3],
      organizador:data[i][4],
      local:data[i][5]
    };   
  return dataTab;
}
function readTemas(data, i){
   var dataTab = {
      title:data[i][0],
      message:data[i][1]
    };   
  return dataTab;
}



