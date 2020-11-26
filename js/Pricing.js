var custombtn = document.getElementById("custombtn");
function showContactUsPage (e) {
    e.target.style.zIndex = "1";
    window.location.replace("../html/contact-us.html");
    console.log("Hello")
    
}
custombtn.addEventListener('submit', showContactUsPage())





