import * as React from 'react';
import { cn } from '@utils/general';
import {
  StepItemContext,
  useStepper,
  StepState,
} from '@contexts/StepperContext';

// Types for props
interface StepperItemProps extends React.HTMLAttributes<HTMLDivElement> {
  step: number;
  completed?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const StepperItem = React.forwardRef<HTMLDivElement, StepperItemProps>(
  (
    {
      step,
      completed = false,
      disabled = false,
      loading = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const { activeStep } = useStepper();

    const state: StepState =
      completed || step < activeStep
        ? 'completed'
        : activeStep === step
          ? 'active'
          : 'inactive';

    const isLoading = loading && step === activeStep;

    return (
      <StepItemContext.Provider
        value={{ step, state, isDisabled: disabled, isLoading }}
      >
        <div
          ref={ref}
          className={cn(
            'group/step flex items-center group-data-[orientation=horizontal]/stepper:flex-row group-data-[orientation=vertical]/stepper:flex-col',
            className,
          )}
          data-state={state}
          {...(isLoading ? { 'data-loading': true } : {})}
          {...props}
        >
          {children}
        </div>
      </StepItemContext.Provider>
    );
  },
);
StepperItem.displayName = 'StepperItem';

export { StepperItem };
