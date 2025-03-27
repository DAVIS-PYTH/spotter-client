import * as React from 'react';
import { cn } from '@utils/general';

// Types for props
const StepperDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-gray-400', className)} {...props} />
));
StepperDescription.displayName = 'StepperDescription';

export { StepperDescription };
