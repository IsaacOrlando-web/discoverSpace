const savedPlanets = localStorage.getItem('savedPlanets');
const planetsArray = JSON.parse(savedPlanets) || [];
const container = document.getElementById('savedPlanets-container');

if(planetsArray.length === 0){
    console.log("No hay nada");
    container.innerHTML = "<p>No saved planets yet. Go back and save some!</p>";
} else {
    //console.log(planetsArray);
    displayPlanets(planetsArray);
}

//Display saved planets Function
function displayPlanets(planets){
    planets.forEach(planet => {
        //console.log(planet);
        const planetContainer = document.createElement('div');
        planetContainer.className = "posts-container";
        planetContainer.classList.add('saved-planets');
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
        const saveButton = document.createElement('button');
        saveButton.className = "saveButton";
        saveButton.textContent = "❌";
        
        planetContainer.appendChild(title);
        planetContainer.appendChild(image);
        planetContainer.appendChild(funFact);
        planetContainer.appendChild(type);
        planetContainer.appendChild(position);
        planetContainer.appendChild(moons);
        planetContainer.appendChild(orbital_period_days);
        planetContainer.appendChild(saveButton);
        container.appendChild(planetContainer);
    });
}

function removePlanet(planetName){
    const updatedPlanets = planetsArray.filter(planet => planet.name !== planetName);
    localStorage.setItem('savedPlanets', JSON.stringify(updatedPlanets));
    location.reload();
}

container.addEventListener('click', function(e) {
    if (e.target.classList.contains('saveButton')) {
        const card = e.target.closest('.saved-planets');

        //console.log("Eliminando planeta:", card);
        //Transform localStorage to an array
        let storedPlanets = localStorage.getItem('savedPlanets');
        let planetsArray = JSON.parse(storedPlanets) || [];
        console.log("Planetas guardados:", planetsArray);
        //Find the name of the card inside the array
        const cardName = card.querySelector('h2')?.textContent; //Take the name of the planet from the card
        console.log("Type of element, Name: ", typeof cardName);
        console.log("Card Name: ", cardName);
        let foundPlanet = planetsArray.find(planet => planet.name === `${cardName}`);

        if (foundPlanet) { //If we find the planet we remove it
            console.log("Planeta encontrado:", foundPlanet);
            let filteredPlanets = planetsArray.filter(planet => planet.name !== foundPlanet.name); //Creates a new array without the removed planet
            console.log("Planetas filtrados:", filteredPlanets);
            localStorage.setItem('savedPlanets', JSON.stringify(filteredPlanets)); //Update localStorage
            alert(`You have removed ${foundPlanet.name} from your saved planets.`);
            location.reload(); //Refresh the page to update the buttons
        } else {
            console.log("Planeta no encontrado");
        }

    }
});

//container.addEventListener('click', (event) =>{
//    if(event.target.classList.contains('saveButton')){
//        const planetContainer = event.target.parentElement;
//        const planetName = planetContainer.querySelector('h2').textContent;
//        console.log("Eliminando planeta:", planetName);
//        
//        // Remove the planet from the savedPlanets array
//        savedPlanets = JSON.parse(localStorage.getItem('savedPlanets')) || [];
//        savedPlanets = savedPlanets.filter(saved => saved.name !== planetName);
//        
//        // Update localStorage and refresh the page
//        localStorage.setItem('savedPlanets', JSON.stringify(savedPlanets));
//    }
//});