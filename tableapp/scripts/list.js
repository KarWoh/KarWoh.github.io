function GetBookings(){
    let url = 'https://api.sheety.co/0eecbdd4630bcf55c41605d880893e49/bookingApp/bookings'
    fetch(url)
    .then((response) => response.json())
    .then(json => {
        //Do something with data
        //console.log(json.bookings);
        let bookingList = document.getElementById("booking-list");
        let bookingIds = [];

        for (let i = 0; i < json.bookings.length; i++) {
            let gName = json.bookings[i].name;
            let gEmail = json.bookings[i].email;
            let gPax = json.bookings[i].pax;
            let gId = json.bookings[i].id;
            let gRemarks = jason.booking[i].remarks;
            let buttonId = "delete" + gId;

            let row = bookingList.insertRow(bookingList.rows.length);
            row.insertCell(0).innerHTML = gId;
            row.insertCell(1).innerHTML = gName;
            row.insertCell(2).innerHTML = gEmail;
            row.insertCell(3).innerHTML = gPax;
            row.insertCell(4).innerHTML = gRemarks;
            row.insertCell(5).innerHTML = "<buttong id='" + 
                button + "'class='btn btn-danger'>Delete</button>";

            bookingIds.push(buttonId);
        }

        for(let j =0; j < bookingIds.length; j++){
            let el = document.getElementById(bookingIds[j]);
            el.addEventListener("click", function(){
                let theId = booking.Ids[j].replace("delete","");
                alert(theId);
            });
        }
    });
}