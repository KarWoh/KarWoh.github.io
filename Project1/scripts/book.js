function BookNow(guestName, guestEmail, guestPhone, guestItem, guestRemarks) {
    let url = 'https://api.sheety.co/0eecbdd4630bcf55c41605d880893e49/project1JayaOnn/sheet1';
    let body = {
      sheet1: {
            name: guestName,
            email: guestEmail,
            phone: guestPhone,
            pax: guestItem,
            remarks: guestRemarks
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers:{
          "Content-Type":"application/json"
      }
    })
    .then((response) => response.json())
    .then(json => {
      alert(json.sheet1.name + " added!");
    });
}

window.addEventListener("load", function () {
    document.getElementById("bookNow").addEventListener("click", function () {
        let userName = document.getElementById("userName").value;
        let userEmail = document.getElementById("userEmail").value;
        let userPhone = document.getElementById("userPhone").value;
        let userItem = document.getElementById("userItem").value;
        let userRemarks = document.getElementById("userRemarks").value;

        BookNow(userName, userEmail, userPhone, userItem, userRemarks);
    });
});