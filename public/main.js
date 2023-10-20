
//Map and tiles
var map = L.map("map").setView([0,0], 1);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Marker 
const myIcon = L.icon({
    iconUrl: "/images/iss.svg",
    iconSize: [50,38],
    iconAnchor: [25,16]

});

let marker = L.marker([0, 0], {icon: myIcon}).addTo(map)
.bindPopup('The ISS')
.openPopup();




let t = 0;
let firstTime = true;

let lon = document.getElementById("lon");
let lat = document.getElementById("lat");
let showLatitude = document.getElementById("latitude");
let showLongitude = document.getElementById("longitude");
let API_URL = "https://api.wheretheiss.at/v1/satellites/25544";

async function getISS() {
    const response = await fetch(API_URL);
    const data = await response.json()
    const {latitude, longitude} = data;
    console.log([latitude, longitude])

    marker.setLatLng([latitude, longitude])
    if (firstTime){
    map.setView([latitude, longitude], 2);
    firstTime = false;
    }

    lat.textContent = latitude;
    lon.textContent = longitude;

    t++;
    
}


function load() {
    issInterval = setInterval(() => {
        getISS()

    }, 2000);


    
}

load();


