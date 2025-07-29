const API_KEY = 'kaQ2PR2nec5HYyHfc7brnSs3N4A62SBWD9Kawhyn';
const lastContainer = document.getElementById('lastTenPosts');

async function getLastTenPosts(){
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10`);
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

function displayLastPosts(posts){
    posts.forEach(post => {
        const container = document.createElement('div');
        container.className = "posts-container";
        const title = document.createElement('h2');
        const date = document.createElement('p');
        date.textContent = '📅' + post.date;
        title.textContent = post.title;
        const image = document.createElement('img');
        image.src = post.url;
        image.alt = post.title;
        image.className = "posts-image";
        const description = document.createElement('p');
        description.textContent = post.explanation;
        container.appendChild(title);
        container.appendChild(date);
        container.appendChild(image);
        container.appendChild(description);
        lastContainer.appendChild(container);
    });
}

getLastTenPosts().then(posts => displayLastPosts(posts));