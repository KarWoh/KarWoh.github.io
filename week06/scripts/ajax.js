function getRandomUser() {
    let xhttp = new XMLHttpRequest(); //create request obj

    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.response);
            let elFirstName = document.getElementId("firstName");
            let elLastName = document.getElementId("lastName");
            let elJsonResult = document.getElementId("jsonResult");
            let elUserImage = document.getElementId("userImage");
            let elPhone = document.getElementId("phone");
            let elAddress = document.getElementId("address");
            let elEmail = document.getElementById("email");

            elJsonResult.innerHTML = this.response;
        }
    }

    xhttp.open("GET", "https://randomuser.me/api/",true);
    xhttp.send();

} 

let elGetRandomUser = document.getElementId("getRandomUserBtn");
elGetRandomUser.addEventListener("click", function() {
    getRandomUser();
});