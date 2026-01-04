




const state = {
    step: 1, //1 2 3
    colorResult: null,
    locationResult: null,
    hasTriedNext: false,
    affirmations: {
        Head: "It's okay to slow your thoughts",
        Chest: "Your feelings deserve space",
        Stomach: "Trust what your body is telling you",
        Shoulders: "You don't have to carry everything alone"
    },
    triedNext: {
        1: false,
        2: false
    }
}
const stepOneResultsText = document.getElementById('results-step1');
const innerTitle = document.getElementById('inner-title');
const stepOneResult = document.getElementById('mood-colors');
const nextBt = document.getElementById('step1-next-bt');
const locationBox = document.getElementById('location-boxes');
document.getElementById('step1-next-bt').addEventListener('click', function (e) {
    if (state.step == 2) {
        if (state.locationResult == null) {
            state.triedNext[2] = true;
        } else {
            state.triedNext[2] = false;
            state.step = 3;
        }
        // state.colorResult = null;
        // state.step = 1;
    } else if (state.step == 1) {
        if (state.colorResult == null) {
            state.triedNext[1] = true;
        } else {
            state.triedNext[1] = false;
            state.step = 2;
        }


    } else if (state.step == 3) {
        state.triedNext = {
            1: false,
            2: false
        };
        state.colorResult = null;
        state.locationResult = null;
        state.step = 1;
    }
    console.log(state.step);
    render();
})

const boxes = document.querySelectorAll('.color-box');
const locations = document.querySelectorAll('.location-box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        document.body.style.background = `${box.style.background}`;
        boxes.forEach(b => b.classList.remove('selected'))
        box.classList.add('selected');
        state.colorResult = box.getAttribute('data-mood');

    });
});

locations.forEach(box => {
    const tmpLocation = box.getAttribute('data-location')
    box.style.backgroundImage = `url('data/img/${tmpLocation.toLowerCase()}.png')`;

    box.addEventListener('click', () => {
        state.locationResult = tmpLocation;
        console.log(`url('/data/img/${state.locationResult.toLowerCase()}.png')`);

        // document.body.style.background = `${box.style.background}`;
        locations.forEach(b => b.classList.remove('selected'))
        box.classList.add('selected');
        innerTitle.innerHTML = `You feel this mostly in your ${tmpLocation.toLowerCase()}`;


    });
});


function render() {
    const tmpState = state.step;
    if (tmpState == 1) {
        renderPick();
    } else if (tmpState == 2) {
        // renderResults();
        renderLocation();
    } else if (tmpState == 3) {
        // renderResults();
        renderResults();
    }

}

function renderPick() {
    locationBox.style.display = 'none';

    innerTitle.innerHTML = state.triedNext[1] ?
        'Pick a color below:' : 'Pick a color that matches your current mood:';

    stepOneResult.style.display = 'grid';
    stepOneResultsText.innerHTML = '';
    nextBt.innerHTML = 'Next';
    document.body.style.backgroundImage = `var(--default-bg)`;
    boxes.forEach(b => b.classList.remove('selected'));
}
function renderLocation() {
    // Where do you feel this most?
    /**Head

Chest

Stomach

Shoulders */
    innerTitle.innerHTML = state.triedNext[2] ?
        'Pick a location below:' : 'Where do you feel this the most:';

    stepOneResult.style.display = 'none';
    // innerTitle.innerHTML = 'Where do you feel this the most'
    locationBox.style.display = 'grid';
    nextBt.innerHTML = 'Next';


}
function renderResults() {
    stepOneResult.style.display = 'none';
    locationBox.style.display = 'none';
    stepOneResultsText.innerHTML = `<h2>${state.colorResult}</h2><p>${state.affirmations[state.locationResult]}<br><br><br>(Thanks for trying the demo!)</p>`;

    nextBt.innerHTML = 'Redo';
    innerTitle.innerHTML = 'Your likely mood:'
}
