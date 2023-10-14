//Create Account by Tyler Creager 09/02/2023
//#Version: 0.5                                               #
//#Date Last Modified: 10/08/2023
/*Modification Log
    version 0.5 - 10/08/2023 Created a form that will allow the user to select parts for a computer.
    Then a function will grab all the selected parts and display them in a message.
    Still troubleshooting resetting the span error messages.
    still troubleshooting validation.
    version - 0.6 10/13/2023 - Fixed the clear the span error messages.
    version - 0.7 10/14/2023 - Fixed the validation. 
    version - 0.8 10/15/2023 - Added shipping option and tweaked the value for all options.
    version - 0.9 10/16/2023 - Fixed the totalmessage displaying the wrong info. Also added breaks in the message.

*/



"use strict";
$("#checkboxPurpose").controlgroup();
$("#cpuChoice").controlgroup();
$("#gpuChoice").controlgroup();
$("#ramChoice").controlgroup();
$("#storageChoice").controlgroup();
$("#caseChoice").controlgroup();
$("#psuChoice").controlgroup();
$("#customization").controlgroup();
$("#shipping").controlgroup();
$("#buttons").controlgroup();
$(document).ready( () => {
    const date = new Date();
    const shippingDate = new Date();
    let shippingOption = "";
    const selection = $(".input");
    let selectMsg = [];
    let totalMsg = "The following are the options you selected:<br />";
    const finalMsg = $("#finalMsg");
    const spanError = $(".error");
    let isValid = true;
    $("#confirm").click( evt => {
        selectMsg = []; //clear previous changes
        totalMsg = "The following are the options you selected:<br />";
        isValid = true;


        //get all the selected options and push it into an array
        for (let i = 0; i < selection.length; i++) {
            if (selection[i].checked == true) {
                if (selection[i].value == "Economomy" || selection[i].value == "Expedited" || selection[i].value == "Next Day") {
                    shippingOption = selection[i].value;
                    
                }
                if(selection[i] == "customization"){
                    selectMsg.push(selection[i].textContent);
                    totalMsg += "<br />" + (selection[i].name) + ":" + " " +  (selection[i].textContent) + "<br />";
                }
                selectMsg.push(selection[i].value);
                totalMsg += "<br />" + (selection[i].name) + ":" + " " +  (selection[i].value) + "<br />";
                console.log(selection[i].value);
                
            }
            
        }

        // get estimated shipping date

        if(shippingOption == "Economomy"){
             const estDate = date.getDate() + 7;
             shippingDate.setDate(estDate);
        
        }

        if(shippingOption == "Expedited"){
            const estDate = date.getDate() + 3;
            shippingDate.setDate(estDate);
        
        }

        if(shippingOption == "Next Day"){
            const estDate = date.getDate() + 1;
            shippingDate.setDate(estDate);
        
        }
        totalMsg += "<br />" + "Order Date: " + date.toLocaleString() + "<br />" +
        "<br />" + "Estimated Shipping Date: " + shippingDate.toLocaleString() + "<br />";
       

        //validate the form

        let checkedOptions0 = [];
        checkedOptions0 = $("input[name=purpose]:checkbox:checked");
        if(checkedOptions0.length == 0){
            $("#purposeError").text("Please select an option");
            isValid = false;
        }
        

        let checkedOptions1 = [];
        checkedOptions1 = $("input[name=cpu]:radio:checked");
        if(checkedOptions1.length == 0){
            $("#cpuChoiceError").text("Please select an option");
            isValid = false;
        }
        

        let checkedOptions2 = [];
        checkedOptions2 = $("input[name=gpu]:radio:checked");
        if(checkedOptions2.length == 0){
            $("#gpuChoiceError").text("Please select an option");
            isValid = false;
        }
        
        let checkedOptions3 = [];
        checkedOptions3 = $("input[name=ram]:radio:checked");
        if(checkedOptions3.length == 0){
            $("#ramChoiceError").text("Please select an option");
            isValid = false;
        }
        
        let checkedOptions4 = [];
        checkedOptions4 = $("input[name=storage]:radio:checked");
        if(checkedOptions4.length == 0){
            $("#storageChoiceError").text("Please select an option");
            isValid = false;
        }
        
        let checkedOptions5 = [];
        checkedOptions5 = $("input[name=case]:radio:checked");
        if(checkedOptions5.length == 0){
            $("#caseChoiceError").text("Please select an option");
            isValid = false;
        }
        
        let checkedOptions6 = [];
        checkedOptions6 = $("input[name=psu]:radio:checked");
        if(checkedOptions6.length == 0){
            $("#psuChoiceError").text("Please select an option");
            isValid = false;
        }
       
        let checkedOptions7 = [];
        checkedOptions7 = $("input[name=shipping]:radio:checked");
        if(checkedOptions7.length == 0){
            $("#shippingError").text("Please select an option");
            isValid = false;
        }
        
       
         if(isValid != false){
            finalMsg.html(totalMsg);
            } 
    });

    
    $("#clear").click( evt => {
        finalMsg.text("");
        selectMsg = [];
        totalMsg = "The following are the options you selected: "
        for (let i = 0; i < selection.length; i++){
            selection[i].checked = false;
        }
        for (let i = 0; i < spanError.length; i++){
            (spanError[i]).textContent = "*";
            console.log(spanError[i]);
        }

    });



});