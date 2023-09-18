//Create Account by Tyler Creager 09/02/2023
/*Modification Log
version 0.0 - 09/15/2023 working with script from student download as a baseline
version 0.1 - 09/17/2023 fine tuning.  
*/


"use strict";

// the event handler for the click event of each h2 element
const toggle = evt => {
    const linkElement = evt.currentTarget;
    const h2Element = linkElement.parentNode;                 // get the clicked h2 element
    const divElement = h2Element.nextElementSibling;
    const imgElement = linkElement.nextElementSibling;     // get h2's sibling div

   if (h2Element.hasAttribute("class")){
    h2Element.removeAttribute("class");
    imgElement.src = "images/faq/extend.jpg";
   }
    if (divElement.hasAttribute("class")){
        divElement.removeAttribute("class");
       }
       else{
        divElement.className="open";
       }
    evt.preventDefault(); 
};

document.addEventListener("DOMContentLoaded", () => {
    // gets all of #faq links
    const linkElements = faq.querySelectorAll("#faq a");
    
    // attach event handler for each a link   
    for (let linkElement of linkElements) {
        linkElement.addEventListener("click", toggle);
    }
    // set focus on first link tag's <a> tag
    linkElements[0].focus();       
});