window.addEventListener('load', execute)
function execute(){
    var form = document.getElementById('creator')
    form.addEventListener('submit', submitData)
}
function submitData(e){
    e.preventDefault();
   var email = document.getElementById('email')
   var password = document.getElementById('password')
   var inputValidation = validation(email, password)
    
    if(inputValidation){
        window.location.replace("../html/index.html");
    }
    else{
        alert("Please fill all required data correctly!")
    }
    
}
function validation(email, password){
    if((email.value.trim().length > 0) && 
        password.value.trim().length >= 6) {
            return true
        }
        return false;
            
}

