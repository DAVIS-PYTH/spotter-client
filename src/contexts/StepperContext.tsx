import { createContext, useContext } from 'react';

// Types
export type StepperContextValue = {
  activeStep: number;
  setActiveStep: (step: number) => void;
  orientation: 'horizontal' | 'vertical';
};

export type StepItemContextValue = {
  step: number;
  state: StepState;
  isDisabled: boolean;
  isLoading: boolean;
};

export type StepState = 'active' | 'completed' | 'inactive' | 'loading';

// Contexts
export const StepperContext = createContext<StepperContextValue | undefined>(
  undefined,
);
export const StepItemContext = createContext<StepItemContextValue | undefined>(
  undefined,
);

export const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error('useStepper must be used within a Stepper');
  }
  return context;
};

export const useStepItem = () => {
  const context = useContext(StepItemContext);
  if (!context) {
    throw new Error('useStepItem must be used within a StepperItem');
  }
  return context;
};
