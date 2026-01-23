const temperature = -4;
const windSpeed = 14;

var windChillElement = document.getElementById("windchill");

function calculateWindChill(temp, wind) {

    return 13.12 + 0.6215 * temp - 11.37 * (wind ** 0.16) + 0.3965 * temp * (wind ** 0.16);
}

if (temperature <= 10 && windSpeed > 4.8) {
    var windChill = calculateWindChill(temperature, windSpeed);
    windChill = Math.round(windChill);
    windChillElement.textContent = windChill + " °C";
} else {
    windChillElement.textContent = "N/A";
}