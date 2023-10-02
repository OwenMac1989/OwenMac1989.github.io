
/*********************************************************************
***
*Original Author: Tyler Creager                                   *
*Date Created: 09/01/2023                                      *
*Version: 0.001                                                *
*Date Last Modified: 09/3/2023                             *
*Modified by: Tyler Creager                                        *
*Modification log:
version 0.0 - 09/15/2023 working with script from chp6 excercise  as a baseline
version 0.1 - 09/17/2023 fine tuning.                                   *
***
******************************************************************** */

"use strict"


const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        // get values user entered in textboxes
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const firstName = $("#first_name");
        const email1Error = $("#email_1_error");
        const email2Error = $("#email_2_error");
        const firstNameError = $("#first_name_error");
    

        // check user entries - add text to error message if invalid
        let isValid = true;
        
        if (email1.value == "") { 
            email1Error.textContent = "First email is required.\n";
            isValid = false;
        }
        else{
            $("#email_1_error").textContent = "";
        }
    
        if (email2.value == "") { 
            email2Error.textContent = "Second email is required.\n";
            isValid = false;
        }
        else if(email1.value != email2.value){
            email2Error.textContent = "Both emails must match.\n";
            isValid = false;

        }
        else{
            $("#email_2_error").textContent = "";
        }
    
    
        if (firstName.value == "") {
            firstNameError.textContent = "First name is required.\n";
            isValid = false;
        }
        else{
            $("#first_name_error").textContent = "";
        }
    
        // submit the form if error message is an empty string
        if (isValid == true){
            $("#email_form").submit();
        }
        
    });

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";
        $("#email_1_error").textContent = "*";
        $("#email_2_error").textContent = "*";
        $("#first_name_error").textContent = "*";
        $("#email_1").focus();
    });
    
    $("#email_1").focus();
});