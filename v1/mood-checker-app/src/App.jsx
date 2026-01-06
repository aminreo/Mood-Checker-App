import './App.css'
import { useState } from 'react';

function renderAppWrapper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [color, setColor] = useState('#60A5FA');


  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep < 4 ? prevStep + 1 : 0);
  };

  return (
    <div className="app-wrapper" style={{ backgroundColor: color + '22' }}>
      {renderTitle(currentStep)}
      <hr />
      {renderContent(currentStep)}

      <hr />
      {renderButton(currentStep, nextStep)}
    </div>
  );
}

function renderTitle(step) {
  const retString = (step == 0) ? 'Welcome to Mood Checker' : `Step ${step}`;
  return <h2>{retString}</h2>;
}

function renderButton(step, nextStep) {
  const buttonText = handleButtonText(step);

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
  return (<button onClick={nextStep}>
    {buttonText}
  </button>);
}

function renderContent(step) {
  switch (step) {
    case 0:
      return renderWelcome();
    case 1:
      return renderStepOne();
    case 2:
      return renderStepTwo();
    case 3:
      return renderStepThree();
    case 4:
      return renderResults();
    default:
      return <div className="inner-content">Invalid Step</div>;
  }
}

function renderWelcome() {
  return (
    <div className="inner-content">
      Welcome to Mood Checker App!
    </div>);
}

function renderStepOne() {
  return (<div className="inner-content">
    one</div>);
}
function renderStepTwo() {
  return (<div className="inner-content">two</div>);
}
function renderStepThree() {
  return (<div className="inner-content">three</div>);
}
function renderResults() {
  return (<div className="inner-content">results</div>);
}

function App() {
  return (renderAppWrapper());
}

export default App