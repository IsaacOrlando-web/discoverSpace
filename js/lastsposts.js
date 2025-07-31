const API_KEY = 'kaQ2PR2nec5HYyHfc7brnSs3N4A62SBWD9Kawhyn';
const lastContainer = document.getElementById('lastTenPosts');
const findBtn = document.getElementById('find-btn');
const dateContainer = document.getElementById('enter-date');

async function getLastTenPosts(){
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10`);
        if(!response.ok){
            throw new error('HTTP Error! status' + response.status);
        }
        const json =await response.json();
        return json
        
    } catch (error) {
        console.log('error: ', error);
    }
}

async function getPostByDate(dateP) { //the only parameter is the date that the user wrote
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${dateP}`); //Look the information of that date introduced
        if(!response.ok){
            throw new error('HTTP Error! status' + response.status);
        }
        const json =await response.json();
        return json
        
    } catch (error) {
        console.log('error: ', error);
    }
}

//Function to display the posts
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

//Function to display one post by date
function displayPost(post){
    lastContainer.textContent = '';
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
}

getLastTenPosts().then(posts => displayLastPosts(posts));

//Function for the Button of find post
findBtn.addEventListener('click', () => {
    //Take the value introduced. the date
    const date = document.getElementById('post-date').value;
    getPostByDate(date).then(post => displayPost(post));//Display that post

    //Create a button to refresh the page
    const refreshBtn = document.createElement('button')//Create an element button
    refreshBtn.classList.add('refresh-btn');//Add a class to the button
    refreshBtn.textContent = 'Refresh Page'; //Add text to the button.
    dateContainer.append(refreshBtn);
    refreshBtn.addEventListener('click', () => {
        location.reload();
    });
});

