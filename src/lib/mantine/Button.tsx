import type { ButtonProps } from '@mantine/core';
import { Button as MantineButton } from '@mantine/core';
import { cloneElement, forwardRef } from 'react';

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps &
    React.ComponentPropsWithoutRef<'button'> & {
      dent?: boolean;
    }
>(({ sx, dent, ...props }, ref) => {
  return cloneElement(<MantineButton />, {
    sx: {
      ...sx,
      '&:not(:disabled):active': dent ? undefined : { transform: 'none' },
    },
    ref,
    ...props,
  });
});

Button.displayName = 'Button';
