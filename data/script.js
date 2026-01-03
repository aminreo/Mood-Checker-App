




const state = {
    colorResult:''
}
const stepOneResultsText = document.getElementById('results-step1');

const innerTitle = document.getElementById('inner-title');
const stepOneResult = document.getElementById('mood-colors');
const nextBt = document.getElementById('step1-next-bt');
document.getElementById('step1-next-bt').addEventListener('click', function (e) {

    console.log(stepOneResult.style.display);
    if (stepOneResult.style.display == 'none') {
        handleReset();
    } else {
        handleStepOneResults();

    }
})
function handleReset() {
    stepOneResult.style.display = 'grid';
    stepOneResultsText.innerHTML= '';
    nextBt.innerHTML = 'Next';
    innerTitle.innerHTML = 'Pick a color that matches your current mood:'
    document.body.style.backgroundImage =`var(--default-bg)`;
}
function handleStepOneResults() {
    if (state.colorResult== ''){
        innerTitle.innerHTML = 'Pick a color below:';
        return;
    }
    stepOneResult.style.display = 'none';
    stepOneResultsText.innerHTML= `<h2>${state.colorResult}</h2>`;

    nextBt.innerHTML = 'Redo';
    innerTitle.innerHTML = 'Your likely mood:'
    state.colorResult='';

}
const boxes = document.querySelectorAll('.color-box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        console.log('ok');
        // box.style.background='#fbf8ff';
        document.body.style.background = `${box.style.background}`;
        boxes.forEach(b => b.classList.remove('selected'))
        box.classList.add('selected');
        state.colorResult= box.getAttribute('data-mood');

    });
});
