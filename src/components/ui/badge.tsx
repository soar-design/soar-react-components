import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot as SlotPrimitive } from 'radix-ui';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  dotClassName?: string;
  disabled?: boolean;
}

export interface BadgeButtonProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeButtonVariants> {
  asChild?: boolean;
}

export type BadgeDotProps = React.HTMLAttributes<HTMLSpanElement>;

const badgeVariants = cva(
  'inline-flex items-center whitespace-nowrap justify-center border border-transparent font-medium focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 [&_svg]:-ms-px [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        success:
          'bg-success text-success-foreground',
        warning:
          'bg-warning text-warning-foreground',
        info: 'bg-info text-info-foreground',
        outline: 'bg-transparent border border-border text-secondary-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
      },
      appearance: {
        default: '',
        light: '',
        outline: '',
        ghost: 'border-transparent bg-transparent',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none',
      },
      size: {
        lg: 'rounded-full px-3 h-8 min-w-7 gap-1.5 text-xs [&_svg]:size-3.5',
        md: 'rounded-full px-2.5 h-7 min-w-6 gap-1.5 text-xs [&_svg]:size-3.5',
        sm: 'rounded-full px-2 h-6 min-w-5 gap-1 text-xs [&_svg]:size-3.5',
        xs: 'rounded-full px-1.5 h-5 min-w-4 gap-1 text-xs [&_svg]:size-3.5',
      },
      shape: {
        default: '',
        circle: 'rounded-full',
      },
    },
    compoundVariants: [
      /* Light */
      {
        variant: 'primary',
        appearance: 'light',
        className:
          'text-primary-text bg-primary/10',
      },
      {
        variant: 'secondary',
        appearance: 'light',
        className: 'bg-secondary text-secondary-foreground',
      },
      {
        variant: 'success',
        appearance: 'light',
        className:
          'text-success-text bg-success/10',
      },
      {
        variant: 'warning',
        appearance: 'light',
        className:
          'text-warning-text bg-warning/10',
      },
      {
        variant: 'info',
        appearance: 'light',
        className:
          'text-info-text bg-info/10',
      },
      {
        variant: 'destructive',
        appearance: 'light',
        className:
          'text-destructive-text bg-destructive/10',
      },
      /* Outline */
      {
        variant: 'primary',
        appearance: 'outline',
        className:
          'text-primary-text border-primary/20 bg-primary/10',
      },
      {
        variant: 'success',
        appearance: 'outline',
        className:
          'text-success-text border-success/20 bg-success/10',
      },
      {
        variant: 'warning',
        appearance: 'outline',
        className:
          'text-warning-text border-warning/20 bg-warning/10',
      },
      {
        variant: 'info',
        appearance: 'outline',
        className:
          'text-info-text border-info/20 bg-info/10',
      },
      {
        variant: 'destructive',
        appearance: 'outline',
        className:
          'text-destructive-text border-destructive/20 bg-destructive/10',
      },
      /* Ghost */
      {
        variant: 'primary',
        appearance: 'ghost',
        className: 'text-primary-text',
      },
      {
        variant: 'secondary',
        appearance: 'ghost',
        className: 'text-secondary-foreground',
      },
      {
        variant: 'success',
        appearance: 'ghost',
        className: 'text-success-text',
      },
      {
        variant: 'warning',
        appearance: 'ghost',
        className: 'text-warning-text',
      },
      {
        variant: 'info',
        appearance: 'ghost',
        className: 'text-info-text',
      },
      {
        variant: 'destructive',
        appearance: 'ghost',
        className: 'text-destructive-text',
      },

      { size: 'lg', appearance: 'ghost', className: 'px-0' },
      { size: 'md', appearance: 'ghost', className: 'px-0' },
      { size: 'sm', appearance: 'ghost', className: 'px-0' },
      { size: 'xs', appearance: 'ghost', className: 'px-0' },
    ],
    defaultVariants: {
      variant: 'primary',
      appearance: 'default',
      size: 'md',
    },
  },
);

const badgeButtonVariants = cva(
  'cursor-pointer transition-all inline-flex items-center justify-center leading-none size-3.5 [&>svg]:opacity-100! [&>svg]:size-3.5! p-0 rounded-full -me-0.5 opacity-60 hover:opacity-100',
  {
    variants: {
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Badge({
  className,
  variant,
  size,
  appearance,
  shape,
  asChild = false,
  disabled,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? SlotPrimitive.Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, appearance, shape, disabled }), className)}
      {...props}
    />
  );
}

function BadgeButton({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof badgeButtonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? SlotPrimitive.Slot : 'span';
  return (
    <Comp
      data-slot="badge-button"
      className={cn(badgeButtonVariants({ variant, className }))}
      role="button"
      {...props}
    />
  );
}

function BadgeDot({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="badge-dot"
      className={cn('size-1.5 rounded-full bg-[currentColor] opacity-75', className)}
      {...props}
    />
  );
}

export { Badge, BadgeButton, BadgeDot, badgeVariants };
