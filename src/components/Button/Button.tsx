import { Slot } from '@radix-ui/react-slot';
import { cx } from 'class-variance-authority';
import { forwardRef } from 'react';

import { ButtonProps } from './Button.types.ts';
import { buttonVariants } from './Button.variants.ts';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cx(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);

Button.displayName = 'Button';

export default Button;
