"use client";
import clsx from 'clsx';
import { Dispatch, SetStateAction } from 'react';

type StepperProps = {
  steps: string[];
  activeStep: string;
  setActiveStep: Dispatch<SetStateAction<string>>;
};

const Stepper = ({ steps, activeStep, setActiveStep }: StepperProps) => (
  <div className="stepper">
    {steps.map(step => (
      <div
        key={step}
        className={clsx("stepper__step", { "stepper__step--active": activeStep === step })}
        role="button"
        onClick={() => setActiveStep(step)}
      />
    ))}
  </div>
);

export default Stepper;
