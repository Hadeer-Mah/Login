var userName = document.getElementById("userName")
var email = document.getElementById("email")
var password = document.getElementById("password")
var welcomeName = document.getElementById("welcomeName")
var logEmail = document.getElementById("logEmail")
var logPassword = document.getElementById("logPassword")
var usedName = document.getElementById("usedName")
var usedEmail = document.getElementById("usedEmail")
var requiredEmail = document.getElementById("requiredEmail")
var requiredName = document.getElementById("requiredName")
var requiredPassword = document.getElementById("requiredPassword")
var wrongPassword =document.getElementById("wrongPassword")
var wrongEmail =document.getElementById("wrongEmail")
var noPassword =document.getElementById("noPassword")
var noEmail =document.getElementById("noEmail")

var userData = []
if (localStorage.getItem("signedUsers") != null){
    userData = JSON.parse(localStorage.getItem("signedUsers"));
}
function exist() {
    var flag = false

    for (let i = 0; i < userData.length; i++) {
        if (email.value == userData[i].email) {
            usedEmail.classList.replace("d-none", "d-block")
            flag = true;
        } 
              
          
        } 
        return flag
    }
function signUp() {
    exist();
    if  (ValidateEmail() == true && password.value != "" && userName.value != "" && exist() != true  ) {
        var user = {
            name : userName.value,
            email : email.value,
            password :password.value
    
        }
        userData.push(user);
        localStorage.setItem("signedUsers",JSON.stringify(userData));
        window.alert("You Have Signed Successfully, Please sign in")


    }
    if (userName.value == "") {
        requiredName.classList.replace("d-none", "d-block")
    } else { requiredName.classList.replace("d-block", "d-none")}
    if (email.value == "" || ValidateEmail() == false) {
        requiredEmail.classList.replace("d-none", "d-block")
    } else {requiredEmail.classList.replace("d-block", "d-none")}
    if (password.value == "") {
        requiredPassword.classList.replace("d-none", "d-block")
    } else {requiredPassword.classList.replace("d-block", "d-none")}
    
}

function ValidateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) == true)
  {
    return (true);
  } else {
    return (false); }
}
    

var displayUser = localStorage.getItem("sessionUsername");
function logIn() {


  if (logEmail.value == "") {
    noEmail.classList.replace("d-none", "d-block")
    wrongEmail.classList.replace("d-block", "d-none")

    
  } else {
    noEmail.classList.replace("d-block", "d-none")

  }
  if (logPassword.value == "") {
    noPassword.classList.replace("d-none", "d-block")
    wrongPassword.classList.replace("d-block", "d-none")

    
  } else {
    noPassword.classList.replace("d-block", "d-none")

  }

  for(var i=0; i<userData.length; i++){


    if(logEmail.value == userData[i].email && logPassword.value == userData[i].password){
    localStorage.setItem('sessionUsername', userData[i].name)
        
        
        window.location.href = "welcome.html";


    }
    if (logEmail.value == userData[i].email && logPassword.value != userData[i].password && logPassword.value !="") {
        wrongPassword.classList.replace("d-none", "d-block")
        wrongEmail.classList.replace("d-block", "d-none")

        
    }else {wrongPassword.classList.replace("d-block", "d-none")}
    if (logEmail.value != userData[i].email && logEmail.value !="" ) {
        wrongEmail.classList.replace("d-none", "d-block")
        
    }

  }


    
}

(function displayWelcomeUser()
{
    welcomeName.innerHTML = `<h1 class="text-info">Welcome ${displayUser}</h1>`

})()

function logout() {
    localStorage.removeItem('sessionUsername')
}

