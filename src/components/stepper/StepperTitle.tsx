import * as React from 'react';
import { cn } from '@utils/general';

// Types for props
const StepperTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-sm font-medium text-white', className)}
    {...props}
  />
));
StepperTitle.displayName = 'StepperTitle';

export { StepperTitle };
