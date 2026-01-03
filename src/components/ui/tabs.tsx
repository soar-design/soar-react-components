'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Tabs as TabsPrimitive } from 'radix-ui';

// Variants for TabsList
const tabsListVariants = cva('flex items-center shrink-0', {
  variants: {
    variant: {
      default: 'bg-accent p-1',
      button: '',
      line: 'border-b-0 shadow-[inset_0_-1px_0_0_var(--border)]',
    },
    shape: {
      default: '',
      pill: '',
    },
    size: {
      lg: 'gap-2.5',
      md: 'gap-2',
      sm: 'gap-1.5',
      xs: 'gap-1',
    },
  },
  compoundVariants: [
    { variant: 'default', size: 'lg', className: 'p-1.5 gap-2.5' },
    { variant: 'default', size: 'md', className: 'p-1 gap-2' },
    { variant: 'default', size: 'sm', className: 'p-1 gap-1.5' },
    { variant: 'default', size: 'xs', className: 'p-0.5 gap-1' },

    {
      variant: 'default',
      shape: 'default',
      size: 'lg',
      className: 'rounded-lg',
    },
    {
      variant: 'default',
      shape: 'default',
      size: 'md',
      className: 'rounded-lg',
    },
    {
      variant: 'default',
      shape: 'default',
      size: 'sm',
      className: 'rounded-md',
    },
    {
      variant: 'default',
      shape: 'default',
      size: 'xs',
      className: 'rounded-md',
    },

    { variant: 'line', size: 'lg', className: 'gap-9' },
    { variant: 'line', size: 'md', className: 'gap-8' },
    { variant: 'line', size: 'sm', className: 'gap-4' },
    { variant: 'line', size: 'xs', className: 'gap-4' },

    {
      variant: 'default',
      shape: 'pill',
      className: 'rounded-full [&_[role=tab]]:rounded-full',
    },
    {
      variant: 'button',
      shape: 'pill',
      className: 'rounded-full [&_[role=tab]]:rounded-full',
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'lg',
  },
});

// Variants for TabsTrigger
const tabsTriggerVariants = cva(
  'shrink-0 cursor-pointer whitespace-nowrap inline-flex justify-center items-center font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:shrink-0 [&_svg]:text-muted-foreground [&:hover_svg]:text-primary [&[data-state=active]_svg]:text-primary',
  {
    variants: {
      variant: {
        default:
          'text-muted-foreground hover:text-foreground data-[state=active]:text-foreground relative z-10',
        button:
          'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg text-accent-foreground hover:text-foreground data-[state=active]:bg-accent data-[state=active]:text-foreground',
        line: 'border-b-2 text-muted-foreground border-transparent data-[state=active]:border-primary hover:text-primary data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:text-primary',
      },
      size: {
        lg: 'gap-2.5 [&_svg]:size-5 text-sm',
        md: 'gap-2 [&_svg]:size-4 text-sm',
        sm: 'gap-1.5 [&_svg]:size-3.5 text-sm',
        xs: 'gap-1 [&_svg]:size-3.5 text-sm',
      },
    },
    compoundVariants: [
      { variant: 'default', size: 'lg', className: 'py-2 px-4 rounded-md' },
      { variant: 'default', size: 'md', className: 'py-1.5 px-3 rounded-md' },
      { variant: 'default', size: 'sm', className: 'py-0.5 px-2.5 rounded-sm' },
      { variant: 'default', size: 'xs', className: 'py-0.5 px-2 rounded-sm' },

      { variant: 'button', size: 'lg', className: 'py-3.5 px-4 rounded-lg' },
      { variant: 'button', size: 'md', className: 'py-2.5 px-3 rounded-lg' },
      { variant: 'button', size: 'sm', className: 'py-1.5 px-2.5 rounded-md' },
      { variant: 'button', size: 'xs', className: 'py-1 px-2 rounded-md' },

      { variant: 'line', size: 'lg', className: 'py-[13px]' },
      { variant: 'line', size: 'md', className: 'py-[9px]' },
      { variant: 'line', size: 'sm', className: 'py-[5px]' },
      { variant: 'line', size: 'xs', className: 'py-[3px]' },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'lg',
    },
  },
);

// Variants for TabsContent
const tabsContentVariants = cva(
  'mt-2.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
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

// Context
type TabsContextType = {
  variant?: 'default' | 'button' | 'line';
  size?: 'lg' | 'sm' | 'xs' | 'md';
};
const TabsContext = React.createContext<TabsContextType>({
  variant: 'default',
  size: 'lg',
});

// Components
function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot="tabs" className={cn('', className)} {...props} />;
}

function TabsList({
  className,
  variant = 'default',
  shape = 'default',
  size = 'lg',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>) {
  const listRef = React.useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = React.useState<React.CSSProperties>({});

  React.useEffect(() => {
    if (variant !== 'default' || !listRef.current) return;

    const updateIndicator = () => {
      const currentList = listRef.current;
      if (!currentList) return;

      const activeTrigger = currentList.querySelector('[data-state="active"]') as HTMLElement;
      if (!activeTrigger) {
        setIndicatorStyle({ opacity: 0 });
        return;
      }

      const listRect = currentList.getBoundingClientRect();
      const triggerRect = activeTrigger.getBoundingClientRect();

      setIndicatorStyle({
        opacity: 1,
        left: `${triggerRect.left - listRect.left}px`,
        width: `${triggerRect.width}px`,
        height: `${triggerRect.height}px`,
        top: `${triggerRect.top - listRect.top}px`,
      });
    };

    // Initial update with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      updateIndicator();
    }, 0);

    // Update on resize and when tabs change
    const observer = new MutationObserver(() => {
      requestAnimationFrame(updateIndicator);
    });
    const currentList = listRef.current;
    if (currentList) {
      observer.observe(currentList, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['data-state'],
      });
    }

    window.addEventListener('resize', updateIndicator);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener('resize', updateIndicator);
    };
  }, [variant]);

  return (
    <TabsContext.Provider value={{ variant: variant || 'default', size: size || 'lg' }}>
      <TabsPrimitive.List
        ref={listRef}
        data-slot="tabs-list"
        className={cn(
          tabsListVariants({ variant, shape, size }),
          variant === 'default' && 'relative',
          className,
        )}
        {...props}
      >
        {variant === 'default' && (
          <span
            className={cn(
              'absolute bg-background shadow-lg transition-all duration-200 pointer-events-none z-0',
              'ease-[cubic-bezier(0.25,0.46,0.45,0.94)]',
              shape === 'pill' ? 'rounded-full' : 'rounded-md',
            )}
            style={indicatorStyle}
            aria-hidden="true"
          />
        )}
        {props.children}
      </TabsPrimitive.List>
    </TabsContext.Provider>
  );
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const { variant, size } = React.useContext(TabsContext);

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant, size }), className)}
      {...props}
    />
  );
}

function TabsContent({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content> & VariantProps<typeof tabsContentVariants>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(tabsContentVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
