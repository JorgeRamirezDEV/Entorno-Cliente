var Latitud = 37.1923311
var Longitud = -3.6174318999999997
var map = L.map('mapid').setView([Latitud, Longitud], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([Latitud, Longitud]).addTo(map)
    .bindPopup('Aqui estamos.')
    .openPopup();