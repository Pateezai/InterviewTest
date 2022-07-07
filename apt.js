
function enable(){
    // var username = document.getElementById("username").value;
    // var password = document.getElementById("password").value;
    var check = document.getElementById("check");
    var btn = document.getElementById("btn");
    if(username !="" && password != "" && check.checked){
        alert('Warning! This is the secret data please make sure you are following the policy!')
        btn.removeAttribute("disabled");
        return true
    }else{
        alert('Username or Password cannot be empty!');
        btn.disabled = "true";
        return false
    }
}

function Adminlogin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // debugger
    if(username != "" && password != ""){
        if(username == "admin" && password == "1234"){
            alert('Login Success!')
            window.location.href="apt21.html"
            return true
        }else {
            alert('Login Failed, Please Check your Username and Password')
        }
    }else{
        alert('Field cannot empty!')
    }
}

