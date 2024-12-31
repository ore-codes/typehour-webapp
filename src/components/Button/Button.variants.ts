import { cva } from 'class-variance-authority';

import type { VariantConfig } from './Button.types.ts';

export const buttonVariants = cva<VariantConfig>(
  'inline-flex h-11 items-center justify-center whitespace-nowrap rounded-xl text-sm' +
    ' font-semibold ring-offset-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-brand hover:brightness-75',
        subtle: 'bg-[#E8E8E8] hover:brightness-95',
        outline: 'border border-secondary text-secondary hover:bg-secondary hover:text-white',
        ghost: 'hover:bg-neutral-200',
        link: 'text-brand underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  }
);
