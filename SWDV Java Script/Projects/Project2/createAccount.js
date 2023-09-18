//Create Account by Tyler Creager 09/02/2023
/*Modification Log
version 0.0 - 09/01/2023 created basic outline on stackblitz
version 0.0 - 09/01/2023 migrated project from stacklblitz to github and visual code
version 0.1 - 09/01/2023 incorporated basic form functionality for creating account.
version 0.101 - 09/01/2023 unable to get more than basic functionality for creating account, commenting out that section
for later. 
version 0.2 - 09/15/2023 testing and debugging. Made multiple changes to try and find error. Unable to pin it down. 
version 0.2 - 09/17/2023 fixed the clear form button. That now works. Create an account unfortunately still does not work. 
I will be unable to get it working in time.  

*/

"use strict"

const $ = selector => document.querySelector(selector);

const confirmAccount = evt => {
  // account info from user
  // pass = password, passRe = passwordReenter, same scheme for email, N = name, A = Address, C = code
  const email = $("#email").value;
  const emailRe = $("#emailRe").value;
  const password = $("#pass").value;
  const passwordRe = $("#passRe").value;
  const firstName = $("#firstN").value;
  const lastName = $("#lastN").value;
  const streetAddress = $("#streetA").value;
  const streetAddressAptNum = $("#streetAptNum").value;
  const city = $("#city").value;
  const state = $("#state").value;
  const zipCode = $("#zipC").value;

  //validate info
  let inputIsValid = true;
  if (email == ""){
    $("#emailError").textContent = "Email is required.";
    inputIsValid = false;
  
  } else{
    $("#emailError").textContent = "";
  }

  if (email != emailRe ){
    $("#emailReError").textContent = "Emails much match.";
    inputIsValid = false;
  
  } else{
    $("#emailReError").textContent = "";
  }

  if (password == ""){
    $("#passError").textContent = "Password is required.";
    inputIsValid = false;
  } else {
    $("#passError").textContent = "";
  }
  if (password != passwordRe){
    $("#passReError").textContent = "Passwords must match.";
    inputIsValid = false;
  } else {
    $("#passError").textContent = "";
  }

  if (firstName == ""){
    $("#firstNError").textContent = "First name is required.";
    inputIsValid = false;
  } else {
    $("#firstNError").textContent = "";
  }

  if (lastName == ""){
    $("#lastNError").textContent = "Last name is required.";
    inputIsValid = false;
  } else {
    $("#lastNError").textContent = "";
  }

  if (streetAddress == ""){
    $("#streetAError").textContent = "Street adress is required";
    inputIsValid = false;
  } else {
    $("#streetAError").textContent = "";
  }

  if (streetAddressAptNum != ""){
    const check = isNaN(streetAddressAptNum)
    if( check == true){
      $("#streetAptNumError").textContent = "Apartment number must be numeric if filled out.";
      inputIsValid = false;
    }
  }else{
    $("#streetAptNumError").textContent = "";
  }

  if (city == ""){
    $("#cityError").textContent = "City is required.";
    inputIsValid = false;
  } else {
    $("#cityError").textContent = "";
  }

  if (state == ""){
    $("#stateError").textContent = "State is required.";
    inputIsValid = false;
  } else {
    $("#stateError").textContent = "";
  }

  if (zipCode == ""){
    $("#zipCError").textContent = "Zipcode is required.";
    inputIsValid = false;
  } else {
    $("#zipCError").textContent = "";
  }
  
  //restrict user from submitting with errors
  if (inputIsValid == false){
    evt.preventDefault();
  }
  else{
    alert("Thank you for creating an account")
  }

};

//clear enteries
const clearForm = () => {

  // clear entry boxes
  $("#email").value = "";
  $("#emailRe").value = "";
  $("#pass").value = "";
  $("#passRe").value = "";
  $("#firstN").value = "";
  $("#lastN").value = "";
  $("#streetA").value = "";
  $("#streetAptNum").value = "";
  $("#city").value = "";
  $("#state").value = "";
  $("#zipC").value = "";

  // clear span elements
  $("#emailError").textContent = "*";
  $("#emailReError").textContent = "*";
  $("#passError").textContent = "*";
  $("#passReError").textContent = "*";
  $("#firstNError").textContent = "*";
  $("#lastNError").textContent = "*";
  $("#streetAError").textContent = "*";
  $("#streetAptNumError").textContent = "*";
  $("#cityError").textContent = "*";
  $("#stateError").textContent = "*";
  $("#zipCError").textContent = "*";

  //reset focus on first entry box
  $("#email").focus();

};

document.addEventListener("DOMContentLoaded", () => {
  // hook up click events for both buttons
  $("#confirmAccount").addEventListener("click", confirmAccount);
  $("#clearForm").addEventListener("click", clearForm);
  

  // set focus on first entry after form loads
  $("#email").focus();
});

//