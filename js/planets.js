import { planets } from "../data/planets.mjs";

console.log(planets.solarSystem.planets);
const solarplanets = planets.solarSystem.planets;
const planetsContainer = document.getElementById('solar-system-planets');

displayPlanets(solarplanets);

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
        container.appendChild(title);
        container.appendChild(image);
        container.appendChild(funFact);
        container.appendChild(type);
        container.appendChild(position);
        container.appendChild(moons);
        container.appendChild(orbital_period_days);
        planetsContainer.appendChild(container);
    });
}