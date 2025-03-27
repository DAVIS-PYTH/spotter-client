import * as React from 'react';
import { cn } from '@utils/general';

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3',
      className,
    )}
    {...props}
  />
);

DialogFooter.displayName = 'DialogFooter';

export { DialogFooter };
