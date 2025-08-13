import { planets } from "../data/planets.mjs";

const myBox = document.getElementById('ship');
const planetEarsth = document.getElementById('planet-earth');
const planetMercury = document.getElementById('planet-mercury');
const sun = document.getElementById('sun');
const planetVenus = document.getElementById('planet-venus');
const planetMars = document.getElementById('planet-mars');
const planetJupiter = document.getElementById('planet-jupiter');
const planetSaturn = document.getElementById('planet-saturn');
const planetUranus = document.getElementById('planet-uranus');
const planetNeptune = document.getElementById('planet-neptune');

//control Buttons
const upBtn = document.getElementById('up');
const downBtn = document.getElementById('down');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');


const scoreDisplay = document.getElementById('points');
let points = 0;
scoreDisplay.textContent = points;

//Dialog elements
const funFactDialog = document.getElementById('fun-fact-dialog');
const questionDialog = document.getElementById('question-dialog');
const closeDialogBtn = document.getElementById('close-dialog-btn');
const nextBtn = document.getElementById('next-dialog-btn');
//Next button for the answer dialog
const nextAnswerBtn = document.getElementById('next-answer');

//fun fact information
const funFactName = document.getElementById("planet-name");
const funFactImage = document.getElementById("fun-fact-image");
const funFactParagraph = document.getElementById("fun-fact-text");

//question dialog elements

const questionText = document.getElementById("question");
const questionAnswer1 = document.getElementById("option1");
const questionAnswer2 = document.getElementById("option2");
const questionAnswer3 = document.getElementById("option3");
const questionLabel1 = document.getElementById("option1-label");
const questionLabel2 = document.getElementById("option2-label");
const questionLabel3 = document.getElementById("option3-label");

//Answer dialog elements
const answerDialog = document.getElementById('answer-dialog');
const answerText = document.getElementById('answer-text');
const excuseText = document.getElementById('Excuse');


//Movements variables
const moveAmount = 10;
let x = 0;
let y = 0;

function detectarColision(div1,div2){
    const rect1 = div1.getBoundingClientRect();
    const rect2 = div2.getBoundingClientRect();

    const overlapX = Math.max(0, Math.min(rect1.right, rect2.right) - Math.max(rect1.left, rect2.left));
    const overlapY = Math.max(0, Math.min(rect1.bottom, rect2.bottom) - Math.max(rect1.top, rect2.top));

    // Considera colisión solo si la superposición es mayor a cierto umbral
    const minOverlapX = Math.min(rect1.width, rect2.width) * 0.5; // 50% del ancho menor
    const minOverlapY = Math.min(rect1.height, rect2.height) * 0.5; // 50% del alto menor

    return overlapX > minOverlapX && overlapY > minOverlapY;
}

nextBtn.addEventListener('click', () => { //Next button to close the dialog
    funFactDialog.close();
    questionDialog.showModal();
});

closeDialogBtn.addEventListener('click', () => { //Close the dialog when the button is clicked
    answerDialog.close();
});


function setRotation(direction) {
    myBox.classList.remove('rotateUp', 'rotateDown', 'rotateLeft', 'rotateRight');
    myBox.classList.add(direction);
}

document.addEventListener('keydown', event => {
    if (event.key.startsWith("Arrow")) {
        moveShip(event.key);
    }
});

function moveShip(direction) { 
    switch (direction) {
        case "ArrowUp":
            if (y > 0) y -= moveAmount;
            setRotation('rotateUp');
            break;
        case "ArrowDown":
            if (y < 520) y += moveAmount;
            setRotation('rotateDown');
            break;
        case "ArrowLeft":
            if (x >= -10) x -= moveAmount;
            setRotation('rotateLeft');
            break;
        case "ArrowRight":
            if (x <= 740) x += moveAmount;
            setRotation('rotateRight');
            break;
    }

    myBox.style.top = `${y}px`;
            myBox.style.left = `${x}px`;

            //If there is a collision on planet Earth
            if(detectarColision(myBox, planetEarsth)){
                console.log("Earth planet");
                funFactDialog.showModal();
                funFactName.textContent = planets.solarSystem.planets[2].name;
                funFactImage.src = `${planets.solarSystem.planets[2].image}`;
                funFactImage.alt = `${planets.solarSystem.planets[2].name}`;
                funFactParagraph.textContent = planets.solarSystem.planets[2].fun_fact;
                console.log(planets.solarSystem.planets[2].fun_fact);

                //Quiz
                questionText.textContent = "What makes Earth unique among the planets in our solar system?";
                questionLabel1.textContent = " It is the only planet with liquid water on its surface.";
                questionLabel2.textContent = "It has the strongest magnetic field.";
                questionLabel3.textContent = "It is the largest rocky planet.";

                nextAnswerBtn.addEventListener('click', () => {
                    questionDialog.close();
                    

                    const selected = document.querySelector('input[name="question-options"]:checked');
                    if (!selected) {
                        answerText.textContent = "Please select an answer.";
                        answerDialog.showModal();
                        return;
                    }

                    let correctId = "option1"; // Update this value for each question
                    if (selected.id === correctId) {
                        points += 2;
                        scoreDisplay.textContent = points;
                        answerText.textContent = "Correct! Earth is indeed the only planet with liquid water on its surface.";
                        excuseText.textContent = "This unique feature supports a diverse range of life forms.";
                    } else {
                        answerText.textContent = "Incorrect. The correct answer is: It is the only planet with liquid water on its surface.";
                        excuseText.textContent = "Earth's abundant water is essential for life as we know it.";
                    }
                    answerDialog.showModal();
                });

            }

            //If there is a collision on planet Mercury
            if (detectarColision(myBox, planetMercury)) {
                console.log("Mercury planet");
                funFactDialog.showModal();
                funFactName.textContent = planets.solarSystem.planets[0].name;
                funFactImage.src = `${planets.solarSystem.planets[0].image}`;
                funFactImage.alt = `${planets.solarSystem.planets[0].name}`;
                funFactParagraph.textContent = planets.solarSystem.planets[0].fun_fact;
                console.log(planets.solarSystem.planets[0].fun_fact);

                //Quiz
                questionText.textContent = "What is the most distinctive feature of Mercury, the smallest planet in our solar system?";
                questionLabel1.textContent = " It has a thick, cloudy atmosphere like Venus.";
                questionLabel2.textContent = "It is the hottest planet in the solar system.";
                questionLabel3.textContent = "It has the largest temperature variations between day and night.";

                nextAnswerBtn.addEventListener('click', () => {
                    questionDialog.close();

                    const selected = document.querySelector('input[name="question-options"]:checked');
                    if (!selected) {
                        answerText.textContent = "Please select an answer.";
                        answerDialog.showModal();
                        return;
                    }
                
                    let correctId = "option3";
                    if (selected.id === correctId) {
                        points += 2;
                        scoreDisplay.textContent = points;
                        answerText.textContent = "Correct! Mercury has the largest temperature variations between day and night.";
                        excuseText.textContent = "Its thin atmosphere can't retain heat, causing extreme temperature swings.";
                    } else {
                        answerText.textContent = "Incorrect. The correct answer is: It has the largest temperature variations between day and night.";
                        excuseText.textContent = "Mercury's thin atmosphere leads to drastic temperature changes.";
                    }
                    answerDialog.showModal();
                });
            }

            //If there is a collision on the Sun
            if (detectarColision(myBox, sun)) {

                //Show the fun fact dialog
                funFactDialog.showModal();
                funFactName.textContent = 'Sun';
                funFactImage.src = `https://images.nationalgeographic.org/image/upload/v1638882786/EducationHub/photos/sun-blasts-a-m66-flare.jpg`;
                funFactImage.alt = 'Sun';
                funFactParagraph.textContent = 'The Sun is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core.';
                console.log("Sun");

                //Quiz
                questionText.textContent = "What is the sun primery made of?";
                questionLabel1.textContent = "Rock and metal";
                questionLabel2.textContent = "Hydrogen and helium";
                questionLabel3.textContent = "Lava and plasma";

                nextAnswerBtn.addEventListener('click', () => {
                    questionDialog.close();

                    const selected = document.querySelector('input[name="question-options"]:checked');
                    if (!selected) {
                        answerText.textContent = "Please select an answer.";
                        answerDialog.showModal();
                        return;
                    }
                
                    let correctId = "option2";
                    if (selected.id === correctId) {
                        points += 2;
                        scoreDisplay.textContent = points;
                        answerText.textContent = "Correct! The Sun is primarily made of hydrogen and helium.";
                        excuseText.textContent = "These elements fuel the Sun's nuclear fusion reactions.";
                    } else {
                        answerText.textContent = "Incorrect. The correct answer is: Hydrogen and helium.";
                        excuseText.textContent = "Hydrogen and helium are the main components of the Sun.";
                    }
                    answerDialog.showModal();
                });     

            }

            if (detectarColision(myBox, planetVenus)) {
                funFactDialog.showModal();
                funFactName.textContent = planets.solarSystem.planets[1].name;
                funFactImage.src = `${planets.solarSystem.planets[1].image}`;
                funFactImage.alt = `${planets.solarSystem.planets[1].name}`;
                funFactParagraph.textContent = planets.solarSystem.planets[1].fun_fact;
                console.log(planets.solarSystem.planets[1].fun_fact);

                //Quiz
                questionText.textContent = " Why is Venus often called Earth's 'sister planet' despite its extreme conditions?";
                questionLabel1.textContent = " It has a similar size and mass to Earth.";
                questionLabel2.textContent = "It has oceans and active volcanoes like Earth.";
                questionLabel3.textContent = "It has a breathable oxygen atmosphere.";

                nextAnswerBtn.addEventListener('click', () => {
                    questionDialog.close();

                    const selected = document.querySelector('input[name="question-options"]:checked');
                    if (!selected) {
                        answerText.textContent = "Please select an answer.";
                        answerDialog.showModal();
                        return;
                    }
                
                    let correctId = "option1";
                    if (selected.id === correctId) {
                        points += 2;
                        scoreDisplay.textContent = points;
                        answerText.textContent = "Correct! Venus is called Earth's 'sister planet' because of its similar size and mass.";
                        excuseText.textContent = "Despite similarities, Venus has extreme conditions.";
                    } else {
                        answerText.textContent = "Incorrect. The correct answer is: It has a similar size and mass to Earth.";
                        excuseText.textContent = "Venus and Earth are similar in size and mass.";
                    }
                    answerDialog.showModal();
                });
            }

            if (detectarColision(myBox, planetMars)) {
                funFactDialog.showModal();
                funFactName.textContent = planets.solarSystem.planets[3].name;
                funFactImage.src = `${planets.solarSystem.planets[3].image}`;
                funFactImage.alt = `${planets.solarSystem.planets[3].name}`;
                funFactParagraph.textContent = planets.solarSystem.planets[3].fun_fact;
                console.log(planets.solarSystem.planets[3].fun_fact);

                //Quiz
                questionText.textContent = " What gives Mars its nickname, the 'Red Planet'?";
                questionLabel1.textContent = "Iron oxide (rust) covering its surface.";
                questionLabel2.textContent = "Lava flows from active volcanoes.";
                questionLabel3.textContent = "Red-colored plants and minerals.";

                nextAnswerBtn.addEventListener('click', () => {
                    questionDialog.close();

                    const selected = document.querySelector('input[name="question-options"]:checked');
                    if (!selected) {
                        answerText.textContent = "Please select an answer.";
                        answerDialog.showModal();
                        return;
                    }
                
                    let correctId = "option1";
                    if (selected.id === correctId) {
                        points += 2;
                        scoreDisplay.textContent = points;
                        answerText.textContent = "Correct! Mars is called the 'Red Planet' due to iron oxide (rust) on its surface.";
                        excuseText.textContent = "Iron oxide gives Mars its reddish appearance.";
                    } else {
                        answerText.textContent = "Incorrect. The correct answer is: Iron oxide (rust) covering its surface.";
                        excuseText.textContent = "Mars's surface is rich in iron oxide.";
                    }
                    answerDialog.showModal();
                });
            }

            if (detectarColision(myBox, planetJupiter)) {
                funFactDialog.showModal();
                funFactName.textContent = planets.solarSystem.planets[4].name;
                funFactImage.src = `${planets.solarSystem.planets[4].image}`;
                funFactImage.alt = `${planets.solarSystem.planets[4].name}`;
                funFactParagraph.textContent = planets.solarSystem.planets[4].fun_fact;
                console.log(planets.solarSystem.planets[4].fun_fact);

                //Quiz
                questionText.textContent = " What is Jupiter's Great Red Spot?";
                questionLabel1.textContent = "A massive volcano.";
                questionLabel2.textContent = "A centuries-old giant storm.";
                questionLabel3.textContent = "A crater from a meteor impact.";

                nextAnswerBtn.addEventListener('click', () => {
                    questionDialog.close();
                            
                    const selected = document.querySelector('input[name="question-options"]:checked');
                    if (!selected) {
                        answerText.textContent = "Please select an answer.";
                        answerDialog.showModal();
                        return;
                    }
                
                    let correctId = "option2";
                    if (selected.id === correctId) {
                        points += 2;
                        scoreDisplay.textContent = points;
                        answerText.textContent = "Correct! Jupiter's Great Red Spot is a centuries-old giant storm.";
                        excuseText.textContent = "This storm has raged for hundreds of years.";
                    } else {
                        answerText.textContent = "Incorrect. The correct answer is: A centuries-old giant storm.";
                        excuseText.textContent = "Jupiter's Great Red Spot is a massive storm.";
                    }
                    answerDialog.showModal();
                });
            }

            if (detectarColision(myBox, planetSaturn)) {
                console.log("saturn");
                funFactDialog.showModal();
                funFactName.textContent = planets.solarSystem.planets[5].name;
                funFactImage.src = `${planets.solarSystem.planets[5].image}`;
                funFactImage.alt = `${planets.solarSystem.planets[5].name}`;
                funFactParagraph.textContent = planets.solarSystem.planets[5].fun_fact;
                console.log(planets.solarSystem.planets[5].fun_fact);

                //Quiz
                questionText.textContent = "What are Saturn's iconic rings primarily made of?";
                questionLabel1.textContent = "Solid sheets of ice and rock.";
                questionLabel2.textContent = " Countless orbiting ice and rock particles.";
                questionLabel3.textContent = "Glowing bands of gas and plasma.";

                nextAnswerBtn.addEventListener('click', () => {
                    questionDialog.close();
                            
                    const selected = document.querySelector('input[name="question-options"]:checked');
                    if (!selected) {
                        answerText.textContent = "Please select an answer.";
                        answerDialog.showModal();
                        return;
                    }
                
                    let correctId = "option2";
                    if (selected.id === correctId) {
                        points += 2;
                        scoreDisplay.textContent = points;
                        answerText.textContent = "Correct! Saturn's rings are made of countless orbiting ice and rock particles.";
                        excuseText.textContent = "The rings are not solid, but made of many small pieces.";
                    } else {
                        answerText.textContent = "Incorrect. The correct answer is: Countless orbiting ice and rock particles.";
                        excuseText.textContent = "Saturn's rings are composed of many small particles.";
                    }
                    answerDialog.showModal();
                });
            }

            if (detectarColision(myBox, planetUranus)) {
                console.log("saturn");
                funFactDialog.showModal();
                funFactName.textContent = planets.solarSystem.planets[6].name;
                funFactImage.src = `${planets.solarSystem.planets[6].image}`;
                funFactImage.alt = `${planets.solarSystem.planets[6].name}`;
                funFactParagraph.textContent = planets.solarSystem.planets[6].fun_fact;
                console.log(planets.solarSystem.planets[6].fun_fact);

                //Quiz
                questionText.textContent = "What makes Uranus unique in our solar system?";
                questionLabel1.textContent = " It rotates on its side (nearly 90° tilt)";
                questionLabel2.textContent = "It has the fastest winds of any planet.";
                questionLabel3.textContent = "Its surface is covered in liquid methane oceans.";

                nextAnswerBtn.addEventListener('click', () => {
                    questionDialog.close();

                    const selected = document.querySelector('input[name="question-options"]:checked');
                    if (!selected) {
                        answerText.textContent = "Please select an answer.";
                        answerDialog.showModal();
                        return;
                    }
                
                    let correctId = "option1";
                    if (selected.id === correctId) {
                        points += 2;
                        scoreDisplay.textContent = points;
                        answerText.textContent = "Correct! Uranus rotates on its side (nearly 90° tilt).";
                        excuseText.textContent = "This unique tilt makes Uranus stand out in our solar system.";
                    } else {
                        answerText.textContent = "Incorrect. The correct answer is: It rotates on its side (nearly 90° tilt).";
                        excuseText.textContent = "Uranus's axis is tilted almost sideways.";
                    }
                    answerDialog.showModal();
                });
            }

            if (detectarColision(myBox, planetNeptune)) {
                funFactDialog.showModal();
                funFactName.textContent = planets.solarSystem.planets[7].name;
                funFactImage.src = `${planets.solarSystem.planets[7].image}`;
                funFactImage.alt = `${planets.solarSystem.planets[7].name}`;
                funFactParagraph.textContent = planets.solarSystem.planets[7].fun_fact;
                console.log(planets.solarSystem.planets[7].fun_fact);

                //Quiz
                questionText.textContent = "What extreme weather phenomenon is Neptune famous for?";
                questionLabel1.textContent = "The fastest winds in the solar system (over 2,000 km/h).";
                questionLabel2.textContent = "Planet-wide iron sandstorms.";
                questionLabel3.textContent = "Eternal lightning storms covering half the planet.";


                nextAnswerBtn.addEventListener('click', () => {
                    questionDialog.close();

                    const selected = document.querySelector('input[name="question-options"]:checked');
                    if (!selected) {
                        answerText.textContent = "Please select an answer.";
                        answerDialog.showModal();
                        return;
                    }
                
                    let correctId = "option1";
                    if (selected.id === correctId) {
                        points += 2;
                        scoreDisplay.textContent = points;
                        answerText.textContent = "Correct! Neptune is famous for the fastest winds in the solar system (over 2,000 km/h).";
                        excuseText.textContent = "Neptune's winds are the fastest recorded in our solar system.";
                    } else {
                        answerText.textContent = "Incorrect. The correct answer is: The fastest winds in the solar system (over 2,000 km/h).";
                        excuseText.textContent = "Neptune's extreme winds are a remarkable feature.";
                    }
                    answerDialog.showModal();
                });
            }
}

upBtn.addEventListener('click', () => moveShip("ArrowUp"));
downBtn.addEventListener('click', () => moveShip("ArrowDown"));
leftBtn.addEventListener('click', () => moveShip("ArrowLeft"));
rightBtn.addEventListener('click', () => moveShip("ArrowRight"));