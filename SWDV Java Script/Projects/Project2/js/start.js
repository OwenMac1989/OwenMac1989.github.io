//Create Account by Tyler Creager 09/02/2023
//#Version: 0.5                                               #
//#Date Last Modified: 10/08/2023
/*Modification Log
 version 0.5 - 10/08/2023 Created a form that will allow the user to select parts for a computer.
 Then a function will grab all the selected parts and display them in a message.
 Still troubleshooting resetting the span error messages.
 still troubleshooting validation.

*/



"use strict";
$("#checkboxPurpose").controlgroup();
$("#cpuChoice").controlgroup();
$("#gpuChoice").controlgroup();
$("#ramChoice").controlgroup();
$("#storageChoice").controlgroup();
$("#caseChoice").controlgroup();
$("#psuChoice").controlgroup();
$("customization").controlgroup();
$("#buttons").controlgroup();
$(document).ready( () => {
    const selection = $(".input");
    let selectMsg = []
    let totalMsg = "The following are the options you selected: "
    const finalMsg = $("#finalMsg")
    const spanError = $(".error");
    let isValid = true;
    $("#confirm").click( evt => {
        for (let i = 0; i < selection.length; i++) {
            if (selection[i].checked == true) {
                selectMsg.push(selection[i].value);
                console.log(selection[i].value);
            }
            else if(selection[i] == "customization"){
                selectMsg.push(selection[i].textContent);
            }
            
            else{
                console.log("not Checked or Textarea");
            }
        }

        for (let i = 0; i < selectMsg.length; i++) {
            totalMsg += selectMsg[i] + "," + "\n";
        }
        console.log(isValid);

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
        console.log(isValid);
        finalMsg.text(totalMsg);
        //still troubleshooting validation
        /* if(isValid != false){
            finalMsg.text(totalMsg);
            } */
    });

    // still troubleshooting reset button
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