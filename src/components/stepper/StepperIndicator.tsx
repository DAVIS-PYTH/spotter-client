import * as React from 'react';
import { cn } from '@utils/general';
import { CheckIcon } from '@radix-ui/react-icons';
import { UserCircle as LoaderCircle } from 'lucide-react';
import { useStepItem } from '@contexts/StepperContext';

// Types for props
interface StepperIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const StepperIndicator = React.forwardRef<
  HTMLDivElement,
  StepperIndicatorProps
>(({ asChild = false, className, children, ...props }, ref) => {
  const { state, step, isLoading } = useStepItem();

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex size-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-xs font-medium text-gray-400 data-[state=active]:bg-blue-500 data-[state=completed]:bg-blue-500 data-[state=active]:text-white data-[state=completed]:text-white',
        className,
      )}
      data-state={state}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          <span className="transition-all group-data-[loading=true]/step:scale-0 group-data-[state=completed]/step:scale-0 group-data-[loading=true]/step:opacity-0 group-data-[state=completed]/step:opacity-0 group-data-[loading=true]/step:transition-none">
            {step}
          </span>
          <CheckIcon
            className="absolute scale-0 opacity-0 transition-all group-data-[state=completed]/step:scale-100 group-data-[state=completed]/step:opacity-100"
            fontSize={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          {isLoading && (
            <span className="absolute transition-all">
              <LoaderCircle
                className="animate-spin"
                size={14}
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>
          )}
        </>
      )}
    </div>
  );
});
StepperIndicator.displayName = 'StepperIndicator';

export { StepperIndicator };
