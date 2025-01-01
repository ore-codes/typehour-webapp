import { Slot } from '@radix-ui/react-slot';
import cn from 'classnames';
import { forwardRef } from 'react';

import { ButtonProps } from './Button.types';
import { buttonVariants } from './Button.variants';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      icon,
      activeIcon,
      iconSize = '1em',
      isActive = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const iconStyle = { fontSize: iconSize };

    const currentIcon = isActive && activeIcon ? activeIcon : icon;

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {currentIcon && (
          <span className="icon-container mr-2" style={iconStyle}>
            {currentIcon}
          </span>
        )}
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;
