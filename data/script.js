




let colorResult='';
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
    document.body.style.backgroundImage =`linear-gradient(to left, #2a2a96, #a21f8d, #e53c73)`;
}
function handleStepOneResults() {
    stepOneResult.style.display = 'none';
    stepOneResultsText.innerHTML= `<h2>${colorResult}</h2>`;

    nextBt.innerHTML = 'Redo';
    innerTitle.innerHTML = 'Your likely mood:'

}
const boxes = document.querySelectorAll('.color-box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        console.log('ok');
        // box.style.background='#fbf8ff';
        document.body.style.backgroundImage = `linear-gradient(${box.style.background} 0 0)`;
        boxes.forEach(b => b.style.transform = `none`)
        box.style.transform = `scale(1.1)`;
        colorResult= box.getAttribute('data-mood');

    });
});
