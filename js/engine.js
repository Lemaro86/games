/**
 * 1. handle click
 * 2. if 3 click - close prev 2
 * 3. if [0] === [1] = ok - save it and disable click;
 * 4. if [0] !== [1] - close both
 * 5. add timer for close
 * */

/** ENGINE */

class MyData {
    counter = 0;
    openedImages = [];
    target = undefined;

    setTarget(target) {
        this.target = target;
    }

    increment() {
        this.counter = this.counter + 1;
    }

    resetCounter(val) {
        this.counter = val;
    }

    addOpenedImage(value) {
        this.openedImages = [...this.openedImages, value];
    }
}

const currentData = new MyData();

const handleClick = (event) => {
    event.preventDefault();
    if (event.target.src && event.target.style.opacity !== '1') {
        const src = event.target.src;
        currentData.increment(1);
        event.target.classList.add('visible');
        if (currentData.counter === 1) {
            currentData.setTarget(event.target);
        }

        if (currentData.counter === 2) {
            if (currentData.target.src === src) {
                currentData.addOpenedImage(src);
            } else {
                currentData.target.classList.remove('visible');
                setTimeout(() => {
                    event.target.classList.remove('visible');
                }, 1000);
                currentData.setTarget(event.target);
            }
            currentData.resetCounter(0);
        }



    }
}

const listeners = document.addEventListener('click', handleClick)
