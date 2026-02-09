import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-2xl text-sm border font-medium data-[state=off]:hover:border-brand-border disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-brand-accent data-[state=on]:border-brand-border data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px] outline-none transition-all aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "border-transparent bg-transparent",
        outline:
          "border-border data-[state=on]:border-brand-border bg-transparent",
      },
      size: {
        default: "h-9 px-3 min-w-9",
        sm: "h-8 px-2.5 min-w-8",
        lg: "h-10 px-3.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
