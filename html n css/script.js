const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');

  togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});


let myInput = document.querySelector("#id_password");

const Button = document.querySelector('#btn');

Button.addEventListener('click', function(e){

        if(myInput.value.length >= 8) {
         document.querySelector(".M-invalid").style.display = "none";
    } else {
        document.querySelector(".M-invalid").style.display = "block";
    }
    e.preventDefault();
})

let lowerCaseLetters = /[a-z]/g;

Button.addEventListener('click', function(e){

    if(myInput.value.match(lowerCaseLetters)) {
        document.querySelector(".L-invalid").style.display = "none";
      } else {
        document.querySelector(".L-invalid").style.display = "block";
    }
    
})

let upperCaseLetters = /[A-Z]/g;

Button.addEventListener('click', function(e){

    if(myInput.value.match(upperCaseLetters)) {
        document.querySelector(".U-invalid").style.display = "none";
      } else {
        document.querySelector(".U-invalid").style.display = "block";
    }
    
})

var numbers = /[0-9]/g;

Button.addEventListener('click', function(e){

    if(myInput.value.match(numbers)) {
        document.querySelector(".N-invalid").style.display = "none";
      } else {
        document.querySelector(".N-invalid").style.display = "block";
    }
    
})

let mail = document.querySelector("#E_mail");

Button.addEventListener('click',function() {
    let mailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail.value.match(mailformat)){
        document.querySelector(".I-mail").style.display = "none";
    }
    else{
        document.querySelector(".I-mail").style.display = "block";
    }
});

let ConfirmPassword = document.querySelector("#Cnf_password");

Button.addEventListener('click',function() {
    if(myInput.value == ConfirmPassword.value){
        document.querySelector(".P-invalid").style.display = "none";
    }
    else{
        document.querySelector(".P-invalid").style.display = "block";
    }
});