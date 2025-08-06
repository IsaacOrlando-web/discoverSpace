import { planets } from "../data/planets.mjs";

console.log(planets.solarSystem.planets);
const solarplanets = planets.solarSystem.planets; // Get the container where planets will be displayed
const planetsContainer = document.getElementById('solar-system-planets');
//Planet of the day Container
const planetOfTheDayContainer = document.getElementById('planet-day-container');

// Display the current date in the header
const dateElement = document.getElementById('date');
const currentDate = new Date("2023-10-01"); // Set a specific date for testing
dateElement.textContent = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();

// Initialize localStorage for saved planets if it doesn't exist
let savedPlanets = JSON.parse(localStorage.getItem('savedPlanets')) || [];

displayPlanets(solarplanets);
displayPlanetDay(planetaDelDia());

planetsContainer.addEventListener('click', function(event) {
    const saveBtn = event.target.closest('#savedButton');
    const removeBtn = event.target.closest('#removeButton');
    const card = event.target.closest('.posts-container');

    if (saveBtn && card) {
        const planetName = card.querySelector('h2')?.textContent;
        const planetObj = solarplanets.find(p => p.name === planetName);
        location.reload(); //refresh the page to update the buttons
        
        if (planetObj && !savedPlanets.some(saved => saved.name === planetObj.name)) {
            //console.log('Guardando planeta:', planetObj.name);
            savedPlanets.push({ ...planetObj }); // Guarda copia del objeto planeta
            console.log('Planetas guardados:', savedPlanets);
            
            try {
                localStorage.setItem('savedPlanets', JSON.stringify(savedPlanets));
                //console.log('Planetas guardados actualizados:', localStorage.getItem('savedPlanets'));
                displayPlanets(solarplanets); // Actualiza la vista
            } catch (error) {
                console.error('Error al guardar en localStorage:', error);
            }
        }
    }    
    else if (removeBtn && card) {
        const planetName = card.querySelector('h2')?.textContent;
        savedPlanets = savedPlanets.filter(saved => saved.name !== planetName);
        location.reload(); //refresh the page to update the buttons
        
        try {
            localStorage.setItem('savedPlanets', JSON.stringify(savedPlanets));
            //console.log('Planetas guardados:', localStorage.getItem('savedPlanets'));
            displayPlanets(solarplanets); // Actualiza la vista
        } catch (error) {
            console.error('Error al guardar en localStorage:', error);
        }
    }
});

//Functions to display planets and the planet of the day
function displayPlanetDay(planet){
    const container = document.createElement('div');
    container.className = "posts-container";
    const title = document.createElement('h2');
    title.textContent = planet.name;
    const image = document.createElement('img');
    image.src = planet.image;
    image.alt = planet.title;
    image.className = "posts-image";
    const funFact = document.createElement('p');
    const type = document.createElement('p');
    const position = document.createElement('p');
    const moons = document.createElement('p');
    const orbital_period_days = document.createElement('p');
    position.textContent = "Position: " + planet.position;
    funFact.textContent ="Fun Fact: " + planet.fun_fact;
    type.textContent = "Type: " + planet.type;
    moons.textContent = "Moons: " + planet.moons;
    orbital_period_days.textContent = "Orbital Period (days): " + planet.orbital_period_days;
    container.appendChild(title);
    container.appendChild(image);
    container.appendChild(funFact);
    container.appendChild(type);
    container.appendChild(position);
    container.appendChild(moons);
    container.appendChild(orbital_period_days);
    planetOfTheDayContainer.appendChild(container);
}

function displayPlanets(planets){
    planets.forEach(planet => {
        const container = document.createElement('div');
        container.className = "posts-container";
        const title = document.createElement('h2');
        title.textContent = planet.name;
        const image = document.createElement('img');
        image.src = planet.image;
        image.alt = planet.title;
        image.className = "posts-image";
        const funFact = document.createElement('p');
        const type = document.createElement('p');
        const position = document.createElement('p');
        const moons = document.createElement('p');
        const orbital_period_days = document.createElement('p');
        position.textContent = "Position: " + planet.position;
        funFact.textContent ="Fun Fact: " + planet.fun_fact;
        type.textContent = "Type: " + planet.type;
        moons.textContent = "Moons: " + planet.moons;
        orbital_period_days.textContent = "Orbital Period (days): " + planet.orbital_period_days;
        const isSaved = savedPlanets.some(saved => saved.name === planet.name);
        const saveButton = document.createElement('button');
        saveButton.className = "saveButton";
        if (isSaved) {
            saveButton.id = "removeButton";
            saveButton.textContent = "❌";
        } else {
            saveButton.id = "savedButton";
            saveButton.textContent = "💾";
        }
        container.appendChild(title);
        container.appendChild(image);
        container.appendChild(funFact);
        container.appendChild(type);
        container.appendChild(position);
        container.appendChild(moons);
        container.appendChild(orbital_period_days);
        container.appendChild(saveButton);
        planetsContainer.appendChild(container);
    });
}

function getDiaDelAnio() {
    const hoy = new Date();
    const inicioDelAnio = new Date(hoy.getFullYear(), 0, 0);

    const diff = hoy - inicioDelAnio;
    const oneDay = 1000 * 60 * 60 * 24;
    const diaDelAnio = Math.floor(diff / oneDay);
    return diaDelAnio;
}

function planetaDelDia(){
    const diaDelAnio = getDiaDelAnio();
    const indice = diaDelAnio % solarplanets.length; // Use modulo to cycle through planets
    return solarplanets[indice];
}

//console.log("Día del año: " + getDiaDelAnio());
//console.log("Planeta del día: " + planetaDelDia().name);