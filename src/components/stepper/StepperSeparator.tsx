import * as React from 'react';
import { cn } from '@utils/general';

// Types for props
const StepperSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'm-0.5 bg-gray-800 group-data-[orientation=horizontal]/stepper:h-0.5 group-data-[orientation=vertical]/stepper:h-12 group-data-[orientation=horizontal]/stepper:w-full group-data-[orientation=vertical]/stepper:w-0.5 group-data-[orientation=horizontal]/stepper:flex-1 group-data-[state=completed]/step:bg-blue-500',
        className,
      )}
      {...props}
    />
  );
});
StepperSeparator.displayName = 'StepperSeparator';

export { StepperSeparator };
