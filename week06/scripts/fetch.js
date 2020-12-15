function GetBookings(){
    let url = 'https://api.sheety.co/0eecbdd4630bcf55c41605d880893e49/bookingApp/bookings'
    fetch(url)
    .then((response) => response.json())
    .then(json => {
        //Do something with data
        console.log(json.bookings);
    });
}

let getBookingBtn = document.getElementById("getBooking");
getBookingBtn.addEventListener("click", function (){
    GetBookings();
});