function GetBookings(){
    let url = 'https://api.sheety.co/0eecbdd4630bcf55c41605d880893e49/project1JayaOnn/sheet1'
    fetch(url)
    .then((response) => response.json())
    .then(json => {
        //Do something with data
        //console.log(json.bookings);
        let bookingList = document.getElementById("booking-list");
        let bookingIds = [];

        //clear the table rows
        for (let k = bookingList.rows.length - 1; k > 0; k--){
            bookingList.deleteRow(k);
        }

        for (let i = 0; i < json.bookings.length; i++) {
            let gName = json.bookings[i].name;
            let gEmail = json.bookings[i].email;
            let gPhone = json.bookings[i].Phone;
            let gItem = json.bookings[i].item;
            let gId = json.bookings[i].id;
            let gRemarks = json.bookings[i].remarks;
            let buttonId = "delete" + gId;

            let row = bookingList.insertRow(bookingList.rows.length);
            row.insertCell(0).innerHTML = gId;
            row.insertCell(1).innerHTML = gName;
            row.insertCell(2).innerHTML = gEmail;
            row.insertCell(3).innerHTML = gPhone;
            row.insertCell(4).innerHTML = gItem;
            row.insertCell(5).innerHTML = gRemarks;
            row.insertCell(6).innerHTML = "<buttong id='" + 
            buttonId + "'class='btn btn-danger'>Delete</button>";

            bookingIds.push(buttonId);
        }

        for(let j = 0; j < bookingIds.length; j++) {
            let el = document.getElementById(bookingIds[j]);
            el.addEventListener("click", function () {
                let theId = bookingIds[j].replace("delete","");
                DeleteBooking(theId);
            });
        }
    });
}

window.addEventListener("load", function () {
    document.getElementById("refreshList").addEventListener("click", function () {
        GetBookings();
    });
})

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/0eecbdd4630bcf55c41605d880893e49/project1JayaOnn/sheet1' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then((response) => {
            GetBookings();
        });
}