//Create Account by Tyler Creager 09/02/2023
//#Version: 0.60                                               #
//#Date Last Modified: 10/01/2023
/*Modification Log
version 0.0 - 09/15/2023 working with script from student download as a baseline
version 0.1 - 09/17/2023 fine tuning. 
 version 0.1 - 09/17/2023 need to fix the error placement. 
 version 0.60 - 10/01/2023 fixed error placement. Can now submit form it will show errors if there are any and then clear them away. 
 version 0.70 - 10/13/2023 updated validation with regex patterns.
*/

"use strict";

const $ = selector => document.querySelector(selector); 

const displayErrorMsgs = msgs => {
    // create a new ul element
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    // create a new li element for each error message, add to ul
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    // if ul node isn't in document yet, add it
    const node = $("#errorWrap");
    if (node == null) {
       

        // add ul to parent of form, before the form
        node.appendChild(ul);
    } else {
        // replace existing ul node
        node.firstChild.replaceWith(ul);
    }  
}

const processEntries = () => {
    //patterns for validation
    const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    // get form controls to check for validity
    const email = $("#email_address");
    const phone = $("#phone");
    const country = $("#country");
    const terms = $("#terms");
    const comments = $("#comments");

    // create array for error messages
    const msgs = [];

    // check user entries for validity
    if (email.value == "") {
        msgs[msgs.length] = "Please enter an email address.";
    } 
    else if (!emailPattern.test(email.value)) {
        msgs[msgs.length] = "Please enter a valid email address.";
    }
    if (phone.value == "") {
        msgs[msgs.length] = "Please enter a mobile phone number."; 
    }
    else if (!phonePattern.test(phone.value)) {
        msgs[msgs.length] = "Please enter a valid phone number in NNN-NNN-NNNN format.";
    }

    if (country.value == "") {
        msgs[msgs.length] = "Please select a country.";
    } 
    if (terms.checked == false) {
        msgs[msgs.length] = "You must agree to the terms of service."; 
    }
    if (comments.value.length == 0){
        msgs[msgs.length] = "You must leave a comment";
    }

    // submit the form or notify user of errors
    if (msgs.length == 0) {  // no error messages
        $("form").submit(); 
    } else {
        displayErrorMsgs(msgs);
    }
};

const resetForm = () => {
   
    $("form").reset();
    
    // remove error messages
    $("#errorWrap > ul").remove()
    
    $("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#submit").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);  
    $("#email_address").focus();   
});