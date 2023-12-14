/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


function addNewEDField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("edField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder", "Enter Education Details");
 
    let edOb = document.getElementById("ed");
    let edAddButtonOb = document.getElementById("edAddButton");
 
    edOb.insertBefore(newNode, edAddButtonOb);
 }

 function addNewLAField(){
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("laField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",2);
   newNode.setAttribute("placeholder", "Enter Languages Known");

   let laOb = document.getElementById("la");
   let laAddButtonOb = document.getElementById("laAddButton");

   laOb.insertBefore(newNode, laAddButtonOb);
}

 function addNewEXField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("exField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder", "Enter here");
 
    let exOb = document.getElementById("ex");
    let exAddButtonOb = document.getElementById("exAddButton");
 
    exOb.insertBefore(newNode, exAddButtonOb);
 }

 function addNewPSField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("psField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder", "Enter here");
 
    let psOb = document.getElementById("ps");
    let psAddButtonOb = document.getElementById("psAddButton");
 
    psOb.insertBefore(newNode, psAddButtonOb);
 }

 function addNewIField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("iField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder", "Enter here");
 
    let iOb = document.getElementById("i");
    let iAddButtonOb = document.getElementById("iAddButton");
 
    iOb.insertBefore(newNode, iAddButtonOb);
 }

 function addNewOIField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("oiField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder", "Enter here");
 
    let oiOb = document.getElementById("oi");
    let oiAddButtonOb = document.getElementById("oiAddButton");
 
    oiOb.insertBefore(newNode, oiAddButtonOb);
 }


 function generateResume()
 {
    document.getElementById("nameT").innerHTML = document.getElementById("nameField").value;

    document.getElementById("branchT").innerHTML = document.getElementById("branchField").value;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

    //ed

    let eds = document.getElementsByClassName("edField");
    
    let str = "";
    
    for (let e of eds)
    {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("edT").innerHTML = str;

     //la

     let las = document.getElementsByClassName("laField");
    
     let str0 = "";
     
     for (let e of las)
     {
         str0 = str0 + `<li> ${e.value} </li>`;
     }
 
     document.getElementById("laT").innerHTML = str0;
 

    

    document.getElementById("prT").innerHTML = document.getElementById("prField").value;

     //ex

     let exs = document.getElementsByClassName("exField");
    
     let str1 = "";
     
     for (let e of exs)
     {
         str1 = str1 + `<li> ${e.value} </li>`;
     }
 
     document.getElementById("exT").innerHTML = str1;

      //ps

      let pss = document.getElementsByClassName("psField");
    
      let str2 = "";
      
      for (let e of pss)
      {
          str2 = str2 + `<li> ${e.value} </li>`;
      }
  
      document.getElementById("psT").innerHTML = str2;

      //i

      let is = document.getElementsByClassName("iField");
    
      let str3 = "";
      
      for (let e of pss)
      {
          str3 = str3 + `<li> ${e.value} </li>`;
      }
  
      document.getElementById("iT").innerHTML = str3;

      //oi

      let ois = document.getElementsByClassName("oiField");
    
      let str4 = "";
      
      for (let e of ois)
      {
          str4 = str4 + `<li> ${e.value} </li>`;
      }
  
      document.getElementById("oiT").innerHTML = str4;
      
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


      document.getElementById("p1tForm").style.display = "none";
    document.getElementById("p1tTemplate").style.display = "grid";
}

//print resume
function printResume()
{
    document.getElementById("buttonT").style.visibility= "hidden";
    window.print();
}