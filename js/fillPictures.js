const images = ['blow', 'hat', 'cherry', 'snail', 'flow', 'tree', 'blow', 'hat', 'cherry', 'snail', 'flow', 'tree'];
const randomIndexes = []; // 1,3,5,7,2,4,9,0,11,10,8,6;

function fillRandomIndexes(){
    const randomNum = Math.ceil(Math.random() * 12); // random = from 0 to 1; * 12 => 1.2 до 12.5 => ceil => целую часть;

    if (!randomIndexes.includes(randomNum)){ // [1,3,5,7,2,4] => 5 => 8 => [1,3,5,7,2,4,8]
        randomIndexes.push(randomNum);
    }

    if (randomIndexes.length === 12) {
        return;
    } else {
        fillRandomIndexes();
    }
}

fillRandomIndexes(); // randomIndexes = [,7,2,4,9,11,10,8,6,12];

const imagesElements = document.querySelectorAll('img'); // [ Element - img - 12 картинок ]
for (const image of imagesElements){
    image.setAttribute('src', `./images/${images[randomIndexes[0] - 1]}.png`);
    randomIndexes.shift();
}
