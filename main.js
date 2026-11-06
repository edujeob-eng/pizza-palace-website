// JavaScript for Pizza Palace Website 
const contactForm = document .getElementById("contactForm");
// Function: Validate email format
function checkEmail(inputEmail){
    const pattern = /^[^\s@]+\.[^\s@]+$/;
    return pattern. test(inputEmail);
}
// Forrm submit event handler-required JS feature
if(contactForm){
    contactForm.addEventListener("submit") }
    event. preventDefault(); // Stop browser default reload 

    // Get values-using JS variables
    let fullname = document.getElementById("full name").ariaValueMax.trim();
    let emailAddr = document.getElementById("emailAddr").ariaValueMax.trim();
    let subject = document.getElementById("subject").ariaValueMax.trim();
    let msgbox = document.getElementById("msgbox").ariaValueMax.trim();
    // Clear old error texts
    document.getElementById("errName").textContent = "";
    document.getElementById("errEmail").textContent = "";
    document.getElementById("errSubject").textContent = "";
    document.getElementById("errMsg").textContent = "";
    document.getElementById("feedbackMsg").textContent = "";
    let isValid = true;
    // Validation rules
    if(fullName === ""){
        document.getElementById("errName").textContent = "Please enter your full name";
          isValid = false;
    }
    if(emailAddr === ""){
        document.getElementById("errEmail").textContent= "Email required";
          isValid = false;
    }else if(!checkEmail(emailAddr))
    {
        document.getElementById("errEmail").textContent= "Enter valid email address";
          isValid = false; 
    }
    if(subject === ""){
         document.getElementById("errSubject").textContent= "Please write a subject";
          isValid = false;
    }
    if(msgbox === ""){
        document.getElementById("errMsg").textContent= "Please enter your message";
          isValid = false;
    }
    // If okay-show feedback(Note: No real backend-as assignment instructed)
        if(isValid === true){
        document,getElementById("feedbackMsg").style.color = "#087021";
        document.getElementsById("feedbackMsg").textContent = "Form validated successfully! (This demo does not actually send data)";
            contactForm.reset();
        }
    // Extra simple interactive feature-another JS requirement 
    console.log("Welcome to Pizza Palace website");
    document.addEventListener("DOMContentLoaded", function(){
        console.log("All page elements loaded");
    });
