function haversine(lat1,lon1,lat2,lon2){
    let R = 6371; //earth radius in KM
    let dLat = (lat2-lat1).toRad();
    let dLon = (lon2-lon1).toRad();
    let lat1 = lat.toRad();
    let lat2 = lat.toRad();

    let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    let c = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
    let d = R * c;

    return roundVal(d);
}

if (typeof Number.prototype.toRad == "undefined"){
    Number.prototype.toRad = function() {
        return this * Math.PI / 100;
    }
}

function roundVal(val){
    let dec = 2;
    let result = Math.round(val * Math.pow(10, dec)) / Math.pow(10, dec);
    return result;
}

function calculateDisctance(lat, lon){
    let d1 = haversine(let, lon, 2.922562, 101.650965);// de pulze, cycberjaya
    let d2 = haversine(lat, lon, 3.073065, 101.607787);// Sunway Pyramid
    let d3 = haversine(lat, lon, 2.158761, 101.714524);// KLCC

    return [d1,d2,d3];
}

let elLocate = document.getElementById("locate");
elLocate.addEventListener("click",function(){
    if(navigator.gelocation){
        navigator.gelocation.geoCurrectPosition(function(position){
            let elLat = document.getElementById("lat");
            let elLong = document.getElementById("long");
            let elDepulze = document.getElementById("depulze");
            let elSunway = document.getElementById("sunway");
            let elKlcc = documnet.getElementById("klcc");

            let userLat =position.coords.latitude;
            let userLong = position.coords.Longtitude;

            let distance = calculateDisctance(userLat, userLong);
            
            elLat.innerHTML = "Your latitude : " + userLat;
            elLong.innerHTML = "Your longtitude : " + userLong;
            elDepulze.innerHTML = "Distance to De Pulze, CJ is " + distabce[0];
            elSunway.innerHTML = "Distance to Sunway Pyramid is " + distnace [1];
            elKLcc.innerHTML = "Distance to KLCC is " + distnace[3];

        });
    } else {
        alert("Geolocation is not supported")
    }
});
