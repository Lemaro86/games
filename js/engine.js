/**
 * 1. handle click
 * 2. if 3 click - close prev 2
 * 3. if [0] === [1] = ok - save it and disable click;
 * 4. if [0] !== [1] - close both
 * 5. add timer for close
 * */

/** ENGINE */

class MyData {
    openedImages = [];
    target = undefined;

    setTarget(target) {
        this.target = target;
    }

    addOpenedImage(value) {
        this.openedImages = [...this.openedImages, value];
    }
}

const currentData = new MyData();

const handleClick = (event) => {
    event.preventDefault();
    if (event.target.src && event.target.style.opacity !== '1') { //check is hidden and is image
        const src = event.target.src;
        event.target.classList.add('visible');

        if (currentData.target?.src === src) {
            currentData.addOpenedImage(src);
            currentData.setTarget(undefined);
        } else {
            if (!currentData.openedImages.includes(src)) {
                currentData.target?.classList?.remove('visible');
            }

            currentData.setTarget(event.target);
        }

        if (currentData.openedImages.length === 6){
            document.getElementById('youWin').classList.add('show');
        }
    }
}

const restartGame = () => {
    window.location.reload();
}

const hideGif = () => {
    document.getElementById('youWin').classList.remove('show');
}

document.addEventListener('click', handleClick);
document.getElementById('restart').addEventListener('click', restartGame);
document.getElementById('close').addEventListener('click', hideGif);
