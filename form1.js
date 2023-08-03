document.addEventListener('DOMContentLoaded', function() {

function check(e){    //start function to validate form
    


//getting textbox inputs
let uname = document.getElementById('firstname');
let ulast = document.getElementById('lastname');
let uaddress = document.getElementById('address');
let ucity = document.getElementById('cty');
let ustate = document.getElementById('st');
let uzip = document.getElementById('zi');
let uemail = document.getElementById('mail');
let unumber = document.getElementById('mobile');
//var for payment
let cnum = document.getElementById('cardnum');
let ex = document.getElementById('expDate');
let scode = document.getElementById('secCode');
//var for diff cc add
let Aname = document.getElementById('afirstname');
let Alast = document.getElementById('alastname');
let Aaddress = document.getElementById('aaddress');
let Acity = document.getElementById('acty');
let Astate = document.getElementById('ast');
let Azip = document.getElementById('azip');


let okay = true; //est. what is true and can be submitted 

// validating address start
if ((uname.value).trim () == ""){
    uname.previousElementSibling.innerHTML="Required";
    okay=false;
}
else{
    uname.previousElementSibling.innerHTML=""; //clear error msg
}

if ((ulast.value).trim() == ""){
    ulast.previousElementSibling.innerHTML="Required";
    okay=false;
}
else {
    ulast.previousElementSibling.innerHTML="";
}

if ((uaddress.value).trim() == ""){
    uaddress.previousElementSibling.innerHTML="Required";
    okay=false;
}
else{
    uaddress.previousElementSibling.innerHTML="";
}

if ((ucity.value).trim() == ""){
    ucity.previousElementSibling.innerHTML="Required";
    okay=false;
}
else{
    ucity.previousElementSibling.innerHTML="";
}

if ((ustate.value).trim() ==""){
    ustate.previousElementSibling.innerHTML="Required";
    okay=false;
}
else{
    ustate.previousElementSibling.innerHTML="";
}

if ((uzip.value).trim()==""){
    uzip.previousElementSibling.innerHTML="Required";
    okay=false;
}

else{
    uzip.previousElementSibling.innerHTML="";
}

if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(uemail.value)) || ((uemail.value).trim() == "") ) {
uemail.previousElementSibling.innerHTML = "Required";
    okay = false;  
}

else {
     uemail.previousElementSibling.innerHTML = "";
}

if ((unumber.value).trim() ==""){
    unumber.previousElementSibling.innerHTML="Required";
    okay=false;
}

else{
    unumber.previousElementSibling.innerHTML="";
}

// end address


// Radio button validation
let mop = document.getElementsByName('payment');
let radioValid = false; // Flag to track if at least one radio button is checked

for (let i = 0; i < mop.length; i++) {
  if (mop[i].checked) {
    radioValid = true;
    break; // Exit the loop if a radio button is checked
  }
}

if (!radioValid) {
    // Display the "Required" message for radio buttons
    let radioErrorMessage = mop[0].previousElementSibling;
    radioErrorMessage.innerHTML = "Required";
    okay=false;
} else {
    // Clear the error message if at least one radio button is checked
    let radioErrorMessage = mop[0].previousElementSibling;
    radioErrorMessage.innerHTML = "";
}
//end radio
// cc payment validation


if ((cnum.value).trim() ==""){
    cnum.previousElementSibling.innerHTML="Required";
    okay=false;
}

else{
    cnum.previousElementSibling.innerHTML="";
}


if ((ex.value).trim() ==""){
    ex.previousElementSibling.innerHTML="Required";
    okay=false;
}

else{
    ex.previousElementSibling.innerHTML="";
}


if ((scode.value).trim() ==""){
    scode.previousElementSibling.innerHTML="Required";
    okay=false;
}

else{
    scode.previousElementSibling.innerHTML="";
}


// Check if the toggle button is checked
let btn = document.getElementById("toggle");
if (btn.checked) {


//start diff payment address val
if ((Aname.value).trim () == ""){
    Aname.previousElementSibling.innerHTML="Required";
    okay=false;
}
else{
    Aname.previousElementSibling.innerHTML=""; //clear error msg
}

if ((Alast.value).trim() == ""){
    Alast.previousElementSibling.innerHTML="Required";
    okay=false;
}
else {
    Alast.previousElementSibling.innerHTML="";
}

if ((Aaddress.value).trim() == ""){
    Aaddress.previousElementSibling.innerHTML="Required";
    okay=false;
}
else{
    Aaddress.previousElementSibling.innerHTML="";
}

if ((Acity.value).trim() == ""){
    Acity.previousElementSibling.innerHTML="Required";
    okay=false;
}
else{
    Acity.previousElementSibling.innerHTML="";
}

if ((Astate.value).trim() ==""){
    Astate.previousElementSibling.innerHTML="Required";
    okay=false;
}
else{
    Astate.previousElementSibling.innerHTML="";
}

if ((Azip.value).trim()==""){
    Azip.previousElementSibling.innerHTML="Required";
    okay=false;
}

else{
    Azip.previousElementSibling.innerHTML="";
}
}
//submit the correct forms v
if (!okay) {
    e.preventDefault(); // sends all forms if filled out correctly
}
} //end  sec address check function

/* toggle address show/hide */
let btn = document.getElementById("toggle");
btn.addEventListener("change", toggleAddressForm);

function toggleAddressForm() {
  let addressForm = document.querySelector('.addressForm');
  
  if (btn.checked) {
    addressForm.style.display = "block";
  } else {
    addressForm.style.display = "none";
  }
}

let form1 = document.getElementById('frm');
form1.addEventListener("submit", check);

let form2 = document.getElementById('frm2');
form2.addEventListener("submit", check);

}); /*end check function*/


