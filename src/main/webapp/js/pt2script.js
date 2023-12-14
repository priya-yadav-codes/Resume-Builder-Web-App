/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


function  addNewhobbyField(){
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("hobbyfield");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("placeholder", "Enter  hobby");

   let hOb = document.getElementById("hobby");
   let hAddButtonOb = document.getElementById("hAddButton");

   hOb.insertBefore(newNode, hAddButtonOb);
}

function addNewskillField(){
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("skillfield");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("placeholder", "Enter  your skill");

   let sOb = document.getElementById("ski");
   let sAddButtonOb = document.getElementById("saddButton");
 
   sOb.insertBefore(newNode, sAddButtonOb );

}

function  addworkexpField(){
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("wefield");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("placeholder", "Enter  your  work experience");

   let weOb = document.getElementById("we");
   let weAddButtonOb = document.getElementById("weddButton");
 
   weOb.insertBefore(newNode, weAddButtonOb );

}

function  addaqField(){
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("eqField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("placeholder", "Enter  your acadmic qualification");

   let aqOb = document.getElementById("aq");
   let aqAddButtonOb = document.getElementById("aqaddButton");
 
   aqOb.insertBefore(newNode, aqAddButtonOb );

}

function  addpersonalinfoField(){
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("pifield");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("placeholder", "Enter  your personal info");

   let piOb = document.getElementById("pi");
   let piAddButtonOb = document.getElementById("piddButton");
 
   piOb.insertBefore(newNode, piAddButtonOb );

}



 //generating resume

 function generateResume(){
   let nameField = document.getElementById("nameField").value;
   let nameT = document.getElementById("nameT");
    nameT.innerHTML = nameField;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    
    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;

    document.getElementById("objectiveT").innerHTML = document.getElementById("obField").value;

   
 //work experience add
    
 let  wes = document.getElementsByClassName("wefield");
    
 let str3 = "";
 
 for (let e of wes)
 {
     str3 = str3 + `<li> ${e.value} </li>`;
 }

 document.getElementById("workExpT").innerHTML = str3;

 //acadmic qualification add
    
 let  aq = document.getElementsByClassName("eqField");
    
 let str4 = "";
 
 for (let e of aq)
 {
     str4 = str4 + `<li> ${e.value} </li>`;
 }


 document.getElementById("AcadmicT").innerHTML = str4;
    
 //personal information add
    
 let  pi = document.getElementsByClassName("pifield");
    
 let str5 = "";
 
 for (let e of pi)
 {
     str5 = str5 + `<li> ${e.value} </li>`;
 }

 document.getElementById("piT").innerHTML = str5;
    
    //skills add
    
    let skill = document.getElementsByClassName("skillfield");
    
    let str = "";
    
    for (let e of  skill)
    {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("skillT").innerHTML = str;

    //hobby add

    let hobby = document.getElementsByClassName("hobbyfield");
    
    let str1 = "";
    
    for (let e of hobby)
    {
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById("hobbyT").innerHTML = str1;
    
    document.getElementById("decT").innerHTML = document.getElementById("dec").value;


    //code for image
   
   let file=document.getElementById('imageField').files[0];
   console.log(file);

   let reader = new FileReader();

   reader.readAsDataURL(file);

   console.log(reader.result);

   //set img to template

    reader.onloadend=function(){
       document.getElementById('imgTemplate').src=reader.result;
    };

    document.getElementById("resume-form").style.display = "none";
    document.getElementById("resume-template").style.display = "block";

 }

 function printResume()
{
  document.getElementById("buttonT").style.visibility= "hidden"; 
  window.print();

}

 