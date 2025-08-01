const API_KEY = 'kaQ2PR2nec5HYyHfc7brnSs3N4A62SBWD9Kawhyn';
const dataSol = document.getElementById('data-sol');
const dataAverageTemp = document.getElementById('data-av-temp');
const dataMaxTemp = document.getElementById('data-max-temp');
const dataMinTemp = document.getElementById('data-min-temp');
const dataAtmospheric = document.getElementById('data-atmospheric');
const dataWind = document.getElementById('data-wind');

async function getMarsInfo(){
    try {
        const response = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`);
        if(!response.ok){
            throw new error('HTTP Error! status' + response.status);
        }
        const json =await response.json();
        //console.log(json);
        return json
        
    } catch (error) {
        console.log('error: ', error);
    }
}

function showInfo(data) {
    if (data.sol_keys && data.sol_keys.length > 0) {
        const latestSol = data.sol_keys[data.sol_keys.length - 1]; // Último sol disponible
        const weatherData = data[latestSol];

        dataSol.textContent = latestSol;
        dataAverageTemp.textContent = weatherData.AT?.av;
        dataMaxTemp.textContent = weatherData.AT?.mx;
        dataMinTemp.textContent = weatherData.AT?.mn;
        dataAtmospheric.textContent = weatherData.PRE?.av;
        dataWind.textContent = weatherData.HWS?.av;

        //console.log(`Data for sol (Martian day): ${latestSol}`);
        //console.log(`Average temperature: ${weatherData.AT?.av}°C`);
        //console.log(`Maximum temperature: ${weatherData.AT?.mx}°C`);
        //console.log(`Minimum temperature: ${weatherData.AT?.mn}°C`);
        //console.log(`Atmospheric pressure: ${weatherData.PRE?.av} Pa`);
        //console.log(`Wind ${weatherData.HWS?.av} m/s`);
    } else {
        console.log("No hay datos disponibles actualmente.");
    }
}

//getPostOfTheDay().then(post => displayPost(post));
getMarsInfo().then(data => showInfo(data));