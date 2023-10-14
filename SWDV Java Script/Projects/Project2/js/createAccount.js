//Create Account by Tyler Creager 09/02/2023
//#Version: 0.60                                               #
//#Date Last Modified: 10/06/2023
/*Modification Log
version 0.0 - 09/01/2023 created basic outline on stackblitz
version 0.0 - 09/01/2023 migrated project from stacklblitz to github and visual code
version 0.1 - 09/01/2023 incorporated basic form functionality for creating account.
version 0.101 - 09/01/2023 unable to get more than basic functionality for creating account, commenting out that section
for later. 
version 0.2 - 09/15/2023 testing and debugging. Made multiple changes to try and find error. Unable to pin it down. 
version 0.2 - 09/17/2023 fixed the clear form button. That now works. Create an account unfortunately still does not work. 
I will be unable to get it working in time.  
version 0.5 - 09/30/2023 fixed the submit button. It now works.
version 0.6 - 10/06/2023 - updated validation for form upto current standards 
version 0.70 - 10/13/2023 updated validation with regex patterns.

*/

"use strict"

$(document).ready( () => {

  $("#confirmAccount").click( evt => {
  // account info from user
  // pass = password, passRe = passwordReenter, same scheme for email, N = name, A = Address, C = code
  const email = $("#email").val();
  email.trim();
  const emailRe = $("#emailRe").val();
  emailRe.trim();
  const password = $("#pass").val();
  password.trim();
  const passwordRe = $("#passRe").val();
  passwordRe.trim();
  const firstName = $("#firstN").val();
  firstName.trim();
  const lastName = $("#lastN").val();
  lastName.trim();
  const streetAddress = $("#streetA").val();
  streetAddress.trim();
  const streetAddressAptNum = $("#streetAptNum").val();
  streetAddressAptNum.trim();
  const city = $("#city").val();
  city.trim();
  const state = $("#state").val();
  state.trim();
  const zipCode = $("#zipC").val();
  zipCode.trim();

  //patterns for validation
  const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
  const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
  const zipPattern = /^\d{5}(-\d{4})?$/;

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

  //validate password
  if (password == ""){
    $("#pass").next().text("Password is required.");
    inputIsValid = false;
  } else if ( !passwordPattern.test(password) ){
    $("#pass").next().text("Must be a valid password.");
    inputIsValid = false;
  } 
  else {
    $("#pass").next().text("");
  }
  if (password != passwordRe){
    $("#passRe").next().text("Passwords must match.");
    inputIsValid = false;
  } else {
    $("#passRe").next().text("");
  }
  $("#pass").val(password);
  $("#passRe").val(passwordRe);

  //validate  first name
  if (firstName == ""){
    $("#firstN").next().text("First name is required.");
    inputIsValid = false;
  } else {
    $("#firstN").next().text("");
  }
  $("#firstN").val(firstName);

  //validate last name
  if (lastName == ""){
    $("#lastN").next().text("Last name is required.");
    inputIsValid = false;
  } else {
    $("#lastN").next().text("");
  }
  $("#lastN").val(lastName);

  //validate street address
  if (streetAddress == ""){
    $("#streetA").next().text("Street adress is required");
    inputIsValid = false;
  } else {
    $("#streetA").next().text("");
  }
  $("#streetA").val(streetAddress);

  //validate street address apt number
  if (streetAddressAptNum != ""){
    const check = isNaN(streetAddressAptNum)
    if( check == true){
      $("#streetAptNum").next().text("Apartment number must be numeric if filled out.");
      inputIsValid = false;
    }
  }else{
    $("#streetAptNum").next().text("");
  }
  $("#streetAptNum").val(streetAddressAptNum);

  //validate city
  if (city == ""){
    $("#city").next().text("City is required.");
    inputIsValid = false;
  } else {
    $("#city").next().text( "");
  }

  //validate state
  if (state == "") {
    $("#state").next().text("This field is required.");
    inputIsValid = false;
  } else if ( state.length != 2 ) {
    $("#state").next().text("Use 2-character code.");
    inputIsValid = false;
  } else {
    $("#state").next().text("");
  }
  $("#state").val(state);

  //validate zip code
  if (zipCode == "") {
    $("#zipC").next().text("This field is required.");
    inputIsValid = false;
  }else if ( !zipPattern.test(zipCode) ) {
    $("#zipC").next().text("Use 5-digit format.");
    inputIsValid = false;
  } else {
    $("#zipC").next().text("");
  }
  $("#zipC").val(zipCode);
  
  //restrict user from submitting with errors
  if (inputIsValid == false){
    evt.preventDefault();
  }
  else{
    alert("Thank you for creating an account")
  }

  });

//clear enteries
  $("#clearForm").click( () => {

    // clear entry boxes
    $("#email").val("");
    $("#emailRe").val("");
    $("#pass").val("");
    $("#passRe").val("");
    $("#firstN").val("");
    $("#lastN").val("");
    $("#streetA").val("");
    $("#streetAptNum").val("");
    $("#city").val("");
    $("#state").val("");
    $("#zipC").val("");

    // clear span elements
    $("#email").next().text("*");
    $("#emailRe").next().text("*");
    $("#pass").next().text("*");
    $("#passRe").next().text("*");
    $("#firstNr").next().text("*");
    $("#lastN").next().text("*");
    $("#streetA").next().text("*");
    $("#streetAptNum").next().text("*");
    $("#cityr").next().text("*");
    $("#state").next().text("*");
    $("#zipC").next().text("*");

    //reset focus on first entry box
    $("#email").focus();

    });

});

