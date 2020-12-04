function transformUpperCase(){
    let a = document.getElementById("namaPengguna");
    a.value = a.value.toUpperCase()

}

let elUsername = document.getElementById("namaPengguna");
elUsername.addEventListener("keyup",transformUpperCase);

function checkPasswordLength(){
    let password = document.getElementById("kataLaluan").value;
    if(password.lenth <5){
        alert("Password must be more 5 characters")
    } else{
        alert("Password accepted")
    }
}

let elPassword = document.getElementById("KataLaluan");
elPassword.onblur = checkPasswordLength;

