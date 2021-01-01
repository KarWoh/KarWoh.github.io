function BookNow(guestName, guestEmail, guestPhone, guestPax, guestRemarks) {
    let url = 'https://api.sheety.co/0eecbdd4630bcf55c41605d880893e49/project1JayaOnn/sheet1';
    let body = {
      booking: {
            name: guestName,
            email: guestEmail,
            phone: guestPhone,
            pax: guestPax,
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
      alert(json.booking.name + " added!");
    });
}

window.addEventListener("load", function () {
    document.getElementById("bookNow").addEventListener("click", function () {
        let userName = document.getElementById("userName").value;
        let userEmail = document.getElementById("userEmail").value;
        let userPhone = document.getElementById("userPhone").value;
        let userPax = document.getElementById("userPax").value;
        let userRemarks = document.getElementById("userRemarks").value;

        BookNow(userName, userEmail, userPhone, userPax, userRemarks);
    });
});