const myBox = document.getElementById('ship');
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener('keydown', event => {
    if (event.key.startsWith("Arrow")) {
        
        switch (event.key) {
            case "ArrowUp":
                if(y > 0) y -= moveAmount;
                break;
            case "ArrowDown":
                if(y < 520)y += moveAmount;
                break;
            case "ArrowLeft":
                if(x >= -10)x -= moveAmount;
                break;
            case "ArrowRight":
                if(x <= 740)x += moveAmount;
                break;
        }
            console.log(`x: ${x}, y: ${y}`);

            myBox.style.top = `${y}px`;
            myBox.style.left = `${x}px`;
        }
        
    
});