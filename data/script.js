




const state = {
    colorResult: null,
    view: 'pick', //pick results
    hasTriedNext: false
}
const stepOneResultsText = document.getElementById('results-step1');

const innerTitle = document.getElementById('inner-title');
const stepOneResult = document.getElementById('mood-colors');
const nextBt = document.getElementById('step1-next-bt');
document.getElementById('step1-next-bt').addEventListener('click', function (e) {
    if (state.view == 'results') {
        state.colorResult = null;
        state.hasTriedNext = false;
        state.view = 'pick';
    } else if (state.view == 'pick') {
        if (state.colorResult == null) {
            state.hasTriedNext = true;
        } else {
            state.view = 'results';
        }


    }
    render();
})

const boxes = document.querySelectorAll('.color-box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        document.body.style.background = `${box.style.background}`;
        boxes.forEach(b => b.classList.remove('selected'))
        box.classList.add('selected');
        state.colorResult = box.getAttribute('data-mood');
        // state.view = 'picked';

    });
});


function render() {
    const tmpState = state.view;
    if (tmpState == 'pick') {
        renderPick();
    } else if (tmpState == 'results') {
        renderResults();
    }

}

function renderPick() {
    innerTitle.innerHTML = state.hasTriedNext ?
        'Pick a color below:' : 'Pick a color that matches your current mood:';

    stepOneResult.style.display = 'grid';
    stepOneResultsText.innerHTML = '';
    nextBt.innerHTML = 'Next';
    document.body.style.backgroundImage = `var(--default-bg)`;
    boxes.forEach(b => b.classList.remove('selected'));
}
function renderResults() {
    stepOneResult.style.display = 'none';
    stepOneResultsText.innerHTML = `<h2>${state.colorResult}</h2>`;

    nextBt.innerHTML = 'Redo';
    innerTitle.innerHTML = 'Your likely mood:'
    state.colorResult = null;
}