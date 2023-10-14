
/*********************************************************************
***
*Original Author: Tyler Creager                                   *
*Date Created: 09/01/2023                                      *
//#Version: 0.50                                               #
//#Date Last Modified: 10/06/2023                            *
*Modified by: Tyler Creager                                        *
*Modification log:
version 0.0 - 09/15/2023 working with script from chp6 excercise  as a baseline
version 0.1 - 09/17/2023 fine tuning.   
version 0.5 - 10/06/2023 adapted previous script to pull from my create account script for more consistency and better data validation. 
version 0.70 - 10/13/2023 updated validation with regex patterns.                               *
***
******************************************************************** */

"use strict"


$(document).ready( () => {
    
    $("#confirmAccount").click( evt => {
        // mailing list info
        const email = $("#email").val();
        email.trim();
        const emailRe = $("#emailRe").val();
        emailRe.trim();
        const firstName = $("#firstN").val();
        firstName.trim();

        //patterns for validation
    const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
      
        //validate info
        let inputIsValid = true;
      
        //validate email
        if (email == ""){
          $("#email").next().text("Email is required.");
          inputIsValid = false;
        
        } else if ( !emailPattern.test(email) ){
          $("#email").next().text("Must be a valid email address.");
        }
        else{
          $("#email").next().text("");
        }
        $("#email").val(email);
      
        //validate emailRe
        if (emailRe == ""){
          $("#emailRe").next().text("Email is required.");
          inputIsValid = false;
        } else if ( email != emailRe ){
          $("#emailRe").next().text("Emails must match.");
          inputIsValid = false;
        }else{
          $("#emailRe").next().text("");
        }
        $("#emailRe").val(emailRe);
         
        //validate  first name
        if (firstName == ""){
            $("#firstN").next().text("First name is required.");
            inputIsValid = false;
        } else {
            $("#firstN").next().text("");
        }
        $("#firstN").val(firstName);

         //restrict user from submitting with errors
        if (inputIsValid == false){
            evt.preventDefault();
        }
        else{
            alert("Thank you for creating an account")
        }

        });
    $("#clearForm").click( () => {

        // clear entry boxes
        $("#email").val("");
        $("#emailRe").val("");
        $("#firstN").val("");
        
        // clear span elements
        $("#email").next().text("*");
        $("#emailRe").next().text("*");
        $("#firstNr").next().text("*");
        
        //reset focus on first entry box
        $("#email").focus();
        
        });
        
    });
