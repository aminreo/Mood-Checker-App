import './App.css'
import { useState } from 'react';

const DEFAULT_BG = 'linear-gradient(to left, #2a2a96, #a21f8d, #e53c73)';

const COLORS = [
    { name: 'Energy/Passion', hex: '#E63946' },
    { name: 'Optimism/Focus', hex: '#FFB703' },
    { name: 'Growth/Healing', hex: '#2A9D8F' },
    { name: 'Calm/Clarity', hex: '#4EA8DE' },
    { name: 'Creative/Introspective', hex: '#9B5DE5' },
    { name: 'Social/Warmth', hex: '#FB8500' },
    { name: 'Neutral/Quiet', hex: '#6D6D6D' },
    { name: 'Heavy/Deep', hex: '#1B1B1B' },
    { name: 'Fresh/New', hex: '#F1FAEE' },
  ]

function createBGGradient(hexColor) {
  if (!hexColor) {
    return DEFAULT_BG;
  }
  return `linear-gradient(to left, ${hexColor}, ${hexColor}AA, ${hexColor}FF)`;
}


function renderAppWrapper(color, setColor) {
  const [currentStep, setCurrentStep] = useState(0);
  const [hastTriedToProceedWithoutColor, setHasTriedToProceedWithoutColor] = useState(false);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep < 4 ? prevStep + 1 : 0);
  };
  console.log('current step:', currentStep);

  return (
    <div className="app-wrapper-contents" style={{ backgroundColor: 'white' }}>
      {renderTitle(currentStep)}
      <hr />
      {renderContent(currentStep, setColor, color)}
      <hr />
      {renderButton(currentStep, nextStep, setColor,color)}
    </div>
  );
}

function renderTitle(step) {
  const retString = (step == 0) ? 'Welcome to Mood Checker' : `Step ${step}`;
  return <h2>{retString}</h2>;
}
function handleButtonText(step) {
    switch (step) {
      case 0:
        return 'Start';
      case 3:
        return 'See Results';
      case 4:
        return 'Restart';
      default:
        return 'Next';
    }
  }
function renderButton(step, nextStep, setColor, color) {
  const buttonText = handleButtonText(step);

  
  return (<button onClick={() => handleButtonClick()} style={{ padding: '15px', marginTop: '5px', fontSize: '16px', cursor: 'pointer' }}>
    {buttonText}
  </button>);

  function handleButtonClick() {
    if (step == 4) {
      setColor(0);
      console.log('reset color to default');
    } else if (step == 1 && !color) {
      console.log('Please select a color to proceed.');
      return;
    }

    nextStep();
    
  }
}

function renderContent(step, setColor, color) {
  switch (step) {
    case 0:
      return renderWelcome(setColor);
    case 1:
      return renderStepOne(setColor);
    case 2:
      return renderStepTwo();
    case 3:
      return renderStepThree();
    case 4:
      return renderResults(color);
    default:
      return <div className="inner-content">Invalid Step</div>;
  }
}

function renderWelcome(setColor) {
  // setColor(null);
  // document.getRootNode().documentElement.style.backgroundImage = 'linear-gradient(to left, #2a2a96, #a21f8d, #e53c73)';
  return (
    <div className="inner-content">
      Click start to begin!
    </div>);
}

function renderStepOne(setColor) {
  const errorMessage = 'Selecting a color is required to proceed';

  

  return (
    <div className="inner-content">
      <p>Select a color that represents your current mood:
      </p>
      {/* errorMessage only shown if user tries to proceed without selecting a color */}
      <div className="step-one-content">

        {COLORS.map((color) => (
          <button
            className='mood-color-button'
            key={color.hex}
            id={`${color.name}`}
            onClick={() => handleChosenColor(color.hex, setColor)}
            style={{ backgroundColor: color.hex }}
          >
          </button>
        ))}
      </div></div>);
}

function handleChosenColor(hexColor, setColor) {

  setColor(hexColor);
}
function renderStepTwo() {
  return (<div className="inner-content">two</div>);
}
function renderStepThree() {
  return (<div className="inner-content">three</div>);
}
function renderResults(color) {
  return (<div className="inner-content">
    Your current mood is likely: <br /> 
    <h3>{COLORS.find(c => c.hex === color)?.name || 'Default Mood Color'}</h3>
  </div>);
}

function App() {
  const [color, setColor] = useState(DEFAULT_BG);

  return (<div className="app-wrapper" style={{ backgroundImage: createBGGradient(color) }}>
    {renderAppWrapper(color, setColor)}
  </div>);
}

export default App