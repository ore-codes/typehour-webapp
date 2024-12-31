import type { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { buttonVariants } from './Button.variants.ts';

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export type VariantConfig = {
  variant: {
    primary: string;
    subtle: string;
    outline: string;
    ghost: string;
    link: string;
  };
  size: {
    sm: string;
    md: string;
    lg: string;
    icon: string;
  };
};
