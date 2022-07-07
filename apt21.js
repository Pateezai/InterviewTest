var text = [];
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
    });
    $("#flipback").click(function(){
        $("#panel").slideUp("slow");
      });
  });

function enable(){
    var valid = false;
    var check = document.getElementById("check");
    var btn = document.getElementById("btn");
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var comment = document.getElementById('des').value;
    // var genx = document.getElementById('gender').value;
    var gen = document.getElementsByName('gender');
    if(gen[0].checked){
        var gender = gen[0].value;
        valid = true;
    }if(gen[1].checked){
        var gender = gen[1].value;
        valid = true;
    }if(valid == false){
        var gender = ""
    }

    if(fname != "" && lname != "" && gender !="" && comment !="" &&  check.checked){
        btn.removeAttribute("disabled");
        return true
    }else{
        alert('The field cannot be empty!');
        btn.disabled = "true";
        return false
    }
}

function PushData(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var comment = document.getElementById('des').value;
    var gen = document.getElementsByName('gender');
    if(gen[0].checked){
        var gender = gen[0].value;
    }if(gen[1].checked){
        var gender = gen[1].value;
    }




    let Arr = data(fname, lname, gender, comment)
    
    text.push(Arr);

    let value1 = ""

    for(let i = 0; i < text.length; i++){
        const element = text[i];
        value1 +=`
                    <span">${element.fname}</span>
                    <span>${element.lname}</span>
                    <span>${element.gender}</span><br>
                    <span>${element.comment}</span><br>
                `
    }
    document.getElementById('fnametxtsh').innerHTML = value1;
    btn.disabled = "true";

    alert('Thank you! Your comment has been posted')
    // alert("f-name:  " + Arr.fname + "   " +
    // "l-name:  " + Arr.lname + "   " +
    // "t-gender:  " + Arr.gender + "   " +
    // "t-des:  " + Arr.comment)

    function data(fname, lname, gender, comment) {
        let a = {
            fname: fname,
            lname: lname,
            gender: gender,
            comment: comment

        }
        return a
    }
}

function logout(){
    window.location.href="apt.html"
}