/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


function addNewWEField(){
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("placeholder", "Enter here");

   let weOb = document.getElementById("we");
   let weAddButtonOb = document.getElementById("weAddButton");

   weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
 
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
 
    aqOb.insertBefore(newNode, aqAddButtonOb);
 }

 function addNewOIField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("oiField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
 
    let oiOb = document.getElementById("oi");
    let oiAddButtonOb = document.getElementById("oiAddButton");
 
    oiOb.insertBefore(newNode, oiAddButtonOb);
 }

 //generating resume

 function generateResume()
 {
    let nameField = document.getElementById("nameField").value;
    let nameT = document.getElementById("nameT");
    nameT.innerHTML = nameField;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;
   
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
   
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
   
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;


    //objective

    document.getElementById("objectiveT").innerHTML = document.getElementById("obField").value;

    //we

    let wes = document.getElementsByClassName("weField");
    
    let str = "";
    
    for (let e of wes)
    {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;

    //aq

    let aqs = document.getElementsByClassName("eqField");
    
    let str1 = "";
    
    for (let e of aqs)
    {
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str1;

    //oi

    let ois = document.getElementsByClassName("oiField");
    
    let str2 = "";
     
    for (let e of ois)
    {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
 
    document.getElementById("oiT").innerHTML = str2;
 

    document.getElementById("resume-form").style.display = "none";
    document.getElementById("resume-template").style.display = "block";
}

//print resume
function printResume()
{
    document.getElementById("buttonT").style.visibility= "hidden";
    window.print();
}