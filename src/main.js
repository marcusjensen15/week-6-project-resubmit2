import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {ApiCallDocName,ApiCallSymptom} from './../src/doctorapi.js';

$(document).ready(function() {



  $('#docNameSearch').click(function() {
    const docName = $('#docName').val();

    const getElements = function(response) {
      let listLength = response.data.length;
      $("#outputList").text(" ");
      $("#outputList2").text(" ");

      //this is the no result handler
      if(listLength === 0){
        let node = document.createElement("LI");
        let textnode = document.createTextNode(`Sorry, there were no results for your search `);
        node.appendChild(textnode);
        document.getElementById("outputList").appendChild(node);
      }

      function websiteCheck(i){
        let website = "";
        if (response.data[i].practices[0].website) {
          website = response.data[i].practices[0].website;



        }else{ website= "none";}
        return website;
      }


      for(let i = 0;i < listLength; i++){

        let node = document.createElement("LI");
        let aElm = document.createTextNode(" ");
        websiteCheck();
        let textnode = document.createTextNode(` Name: ${response.data[i].profile.first_name} ${response.data[i].profile.last_name} Phone: ${response.data[i].practices[0].phones[0].number} State: ${response.data[i].practices[0].visit_address.state}  City: ${response.data[i].practices[0].visit_address.city} Street: ${response.data[i].practices[0].visit_address.street} Zip: ${response.data[i].practices[0].visit_address.zip} Accepting new Patents: ${response.data[i].practices[0].accepts_new_patients}`);

        function websiteCheck(){

          if (response.data[i].practices[0].website) {
            aElm = document.createElement("a");
            aElm.textContent = " Website";
            aElm.setAttribute('href',response.data[i].practices[0].website);


          }

        }


        node.appendChild(textnode);
        node.appendChild(aElm);
        document.getElementById("outputList").appendChild(node);

      }



    };



    (async () => {
      let apiCallDocName = new ApiCallDocName();
      let jsonifiedResponse = await apiCallDocName.getApiDocNames(docName);

      getElements(jsonifiedResponse);
    })();
    $('#docName').val(" ");
    $('#symptom').val(" ");
  });

  $('#symptomSearch').click(function() {
    const symptom = $('#symptom').val();

    const getElements2 = function(response) {
      let listLength = response.data.length;
      $("#outputList2").text(" ");
      $("#outputList").text(" ");

      //This is the no result handler
      if(listLength === 0){
        let node = document.createElement("LI");
        let textnode = document.createTextNode(`Sorry, there were no results for your search `);
        node.appendChild(textnode);
        document.getElementById("outputList2").appendChild(node);
      }

      for(let i = 0;i < listLength; i++){
        let node = document.createElement("LI");
        //create link element
        let aElm = document.createTextNode(" ");
        websiteCheck();
        // aElm.textContent = " Website";
        // aElm.setAttribute('href', websiteCheck());

        let textnode = document.createTextNode(` Name: ${response.data[i].profile.first_name} ${response.data[i].profile.last_name} Phone: ${response.data[i].practices[0].phones[0].number} State: ${response.data[i].practices[0].visit_address.state}  City: ${response.data[i].practices[0].visit_address.city} Street: ${response.data[i].practices[0].visit_address.street} Zip: ${response.data[i].practices[0].visit_address.zip} Accepting new Patents: ${response.data[i].practices[0].accepts_new_patients}`);

        function websiteCheck(){

          if (response.data[i].practices[0].website) {      
            aElm = document.createElement("a");
            aElm.textContent = " Website";
            aElm.setAttribute('href',response.data[i].practices[0].website);


          }

        }

        node.appendChild(textnode);
        node.appendChild(aElm);

        //append link to node if it exists
        document.getElementById("outputList2").appendChild(node);
      }



    };

    (async () => {
      let apiCallSymptom = new ApiCallSymptom();
      let jsonifiedResponse = await apiCallSymptom.getApiSymptoms(symptom);

      getElements2(jsonifiedResponse);
    })();

    $('#docName').val(" ");
    $('#symptom').val(" ");

  });

});
