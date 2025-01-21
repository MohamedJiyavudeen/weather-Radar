const apiKey = "97cb730d853a77cabfc3534882eb5f07"; // Your OpenWeather API Key

// Initialize Leaflet map
const map = L.map('map').setView([20, 80], 3);

// Default OpenStreetMap Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Function to show selected weather layer
function showLayer(layerType) {
    // Remove existing weather layers before adding a new one
    if (window.weatherLayer) {
        map.removeLayer(window.weatherLayer);
    }

    // Add the selected weather layer
    window.weatherLayer = L.tileLayer(
        `https://tile.openweathermap.org/map/${layerType}/{z}/{x}/{y}.png?appid=${apiKey}`, 
        { attribution: '&copy; OpenWeather', tileSize: 256 }
    );
    window.weatherLayer.addTo(map);
}
