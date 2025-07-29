const API_KEY = 'kaQ2PR2nec5HYyHfc7brnSs3N4A62SBWD9Kawhyn';
const postContainer = document.getElementById('post-container');

async function getPostOfTheDay() {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
        if(!response.ok){
            throw new error('HTTP Error! status' + response.status);
        }
        const json =await response.json();
        console.log(json);
        return json
        
    } catch (error) {
        console.log('error: ', error);
    }
}

function displayPost(post) {
    console.log(post.title);
    postContainer.innerHTML = `
    <div class="post-header">
        <div class="title-decoration"></div>
        <h1 class="post-title">${post.title}</h1>
        <div class="title-decoration"></div>
        <p class="post-date">${post.date}</p>
    </div>
    <div class="post-image-container">
        <img src="${post.url}" alt="${post.title}" class="post-of-day">
    </div>
    <div class="content-divider"></div>
    <div class="post-content">
        <p class="post-explanation">${post.explanation}</p>
    </div>
    <div class="footer-divider"></div>`;
}

getPostOfTheDay().then(post => displayPost(post));