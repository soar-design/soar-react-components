import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-brand-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring dark:data-[state=unchecked]:bg-input/80 group/switch inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 h-6 w-10",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-white dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-white pointer-events-none block rounded-full ring-0 transition-transform size-4 shadow-sm data-[state=checked]:translate-x-[19px] data-[state=unchecked]:translate-x-[4px] rtl:data-[state=checked]:-translate-x-[19px] rtl:data-[state=unchecked]:-translate-x-[4px]"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
