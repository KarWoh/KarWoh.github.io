function transformUpperCase(){
    let a = document.getElementById("namaPengguna");
    a.value = a.value.transformUpperCase()

}

let elUsername = document.getElementById("namaPengguna");
elUsername.addEventListener("keyup",transformUpperCase);

