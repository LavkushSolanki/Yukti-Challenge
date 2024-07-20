import React, { useState } from "react";
import Home from "./Components/Home";
import YuktiChallenge from "./Components/YuktiChallenge";
import TeamLeader from "./Components/TeamLeader";
import Navbar from "./Components/Navbar";
import StepNavigation from "./Components/StepNavigation";

const App = () => {
  const [step, setStep] = useState(1);
  const [formFilled, setFormFilled] = useState(false);
  const [formData1, setFormData1] = useState({
    name: "",
    email: "",
    year: "",
    branch: "",
    teamSize: "",
  });
  const [formData2, setFormData2] = useState({
    problemStatement: "",
    problemCategory: "",
    solution: "",
  });

  return (
    <div className="App flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex-grow overflow-hidden">
        {step === 1 && <Home setStep={setStep} />}
        {step === 2 && (
          <TeamLeader
            setStep={setStep}
            formData={formData1}
            setFormData={setFormData1}
            setFormFilled={setFormFilled}
          />
        )}
        {step === 3 && (
          <YuktiChallenge
            setFormData={setFormData2}
            formData={formData2}
            formFilled={formFilled}
          />
        )}
      </div>
      <div className="fixed bottom-0 left-0 right-0">
        <StepNavigation currentStep={step} setStep={setStep} />
      </div>
    </div>
  );
};

export default App;
