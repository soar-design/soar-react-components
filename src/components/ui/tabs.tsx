import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const TabsListContext = React.createContext<{
  listRef: React.RefObject<HTMLDivElement | null>
  updateIndicator: () => void
}>({
  listRef: React.createRef<HTMLDivElement>(),
  updateIndicator: () => {},
})

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const [indicatorStyle, setIndicatorStyle] = React.useState<React.CSSProperties>({
    opacity: 0,
  })
  const listRef = React.useRef<HTMLDivElement>(null)

  const updateIndicator = React.useCallback(() => {
    if (!listRef.current) return

    const activeButton = listRef.current.querySelector<HTMLButtonElement>(
      '[data-state="active"]'
    )
    if (!activeButton) {
      setIndicatorStyle({ opacity: 0 })
      return
    }

    const listRect = listRef.current.getBoundingClientRect()
    const buttonRect = activeButton.getBoundingClientRect()

    setIndicatorStyle({
      left: `${buttonRect.left - listRect.left}px`,
      width: `${buttonRect.width}px`,
      opacity: 1,
    })
  }, [])

  React.useEffect(() => {
    updateIndicator()
    const observer = new MutationObserver(updateIndicator)
    if (listRef.current) {
      observer.observe(listRef.current, {
        attributes: true,
        attributeFilter: ["data-state"],
        subtree: true,
      })
    }

    window.addEventListener("resize", updateIndicator)
    return () => {
      observer.disconnect()
      window.removeEventListener("resize", updateIndicator)
    }
  }, [updateIndicator])

  return (
    <TabsListContext.Provider value={{ listRef, updateIndicator }}>
      <TabsPrimitive.List
        ref={listRef}
        data-slot="tabs-list"
        className={cn(
          "bg-accent text-muted-foreground relative inline-flex h-12 w-fit items-center justify-center rounded-full p-[3px]",
          className
        )}
        {...props}
      >
        <div
          className="bg-background dark:bg-input/30 absolute h-[calc(100%-6px)] rounded-full transition-all duration-200 ease-out shadow-sm"
          style={indicatorStyle}
          aria-hidden="true"
        />
        {children}
      </TabsPrimitive.List>
    </TabsListContext.Provider>
  )
}

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { updateIndicator } = React.useContext(TabsListContext)

  React.useEffect(() => {
    const handleClick = () => {
      setTimeout(updateIndicator, 0)
    }
    const button = ref && typeof ref !== "function" ? ref.current : null
    if (button) {
      button.addEventListener("click", handleClick)
      return () => button.removeEventListener("click", handleClick)
    }
  }, [ref, updateIndicator])

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      data-slot="tabs-trigger"
      className={cn(
        "relative z-10 dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring focus-visible:outline-ring text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-full border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
})
TabsTrigger.displayName = "TabsTrigger"

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
