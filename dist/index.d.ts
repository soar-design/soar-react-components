import { Accordion as Accordion_2 } from 'radix-ui';
import { AlertDialog as AlertDialog_2 } from 'radix-ui';
import { AssistiveDndState } from '@headless-tree/core';
import { AssistiveTreeDescription } from '@headless-tree/react';
import { AsyncDataLoaderDataRef } from '@headless-tree/core';
import { asyncDataLoaderFeature } from '@headless-tree/core';
import { AsyncDataLoaderFeatureDef } from '@headless-tree/core';
import { Avatar as Avatar_2 } from 'radix-ui';
import { buildProxiedInstance } from '@headless-tree/core';
import { buildStaticInstance } from '@headless-tree/core';
import { Cell } from '@tanstack/react-table';
import { Checkbox as Checkbox_2 } from 'radix-ui';
import { checkboxesFeature } from '@headless-tree/core';
import { CheckboxesFeatureDef } from '@headless-tree/core';
import { CheckedState } from '@headless-tree/core';
import { ClassProp } from 'class-variance-authority/types';
import { ClassValue } from 'clsx';
import { Collapsible as Collapsible_2 } from 'radix-ui';
import { Column } from '@tanstack/react-table';
import { Command as Command_2 } from 'cmdk';
import { ComponentPropsWithoutRef } from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { ControllerProps } from 'react-hook-form';
import { createOnDropHandler } from '@headless-tree/core';
import { createTree } from '@headless-tree/core';
import { CSSProperties } from 'react';
import { CustomHotkeysConfig } from '@headless-tree/core';
import { DayPicker } from 'react-day-picker';
import { default as default_2 } from 'embla-carousel-react';
import { default as default_3 } from 'react';
import { Dialog as Dialog_2 } from 'radix-ui';
import { DialogProps } from '@radix-ui/react-dialog';
import { DirectionProvider } from '@radix-ui/react-direction';
import { DndDataRef } from '@headless-tree/core';
import { DndState } from '@headless-tree/core';
import { dragAndDropFeature } from '@headless-tree/core';
import { DragAndDropFeatureDef } from '@headless-tree/core';
import { DragEndEvent } from '@dnd-kit/core';
import { DragLineData } from '@headless-tree/core';
import { DragStartEvent } from '@dnd-kit/core';
import { DragTarget } from '@headless-tree/core';
import { DragTargetPosition } from '@headless-tree/core';
import { Drawer as Drawer_2 } from 'vaul';
import { DropdownMenu as DropdownMenu_2 } from 'radix-ui';
import { EmptyFeatureDef } from '@headless-tree/core';
import { ExpandAllDataRef } from '@headless-tree/core';
import { expandAllFeature } from '@headless-tree/core';
import { ExpandAllFeatureDef } from '@headless-tree/core';
import { FeatureDef } from '@headless-tree/core';
import { FeatureImplementation } from '@headless-tree/core';
import { FieldError } from 'react-hook-form';
import { FieldPath } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { FormProviderProps } from 'react-hook-form';
import { Header } from '@tanstack/react-table';
import { HeaderGroup } from '@tanstack/react-table';
import { HotkeyConfig } from '@headless-tree/core';
import { HotkeyName } from '@headless-tree/core';
import { HotkeysConfig } from '@headless-tree/core';
import { HotkeysCoreDataRef } from '@headless-tree/core';
import { hotkeysCoreFeature } from '@headless-tree/core';
import { HotkeysCoreFeatureDef } from '@headless-tree/core';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { HTMLAttributes } from 'react';
import { insertItemsAtTarget } from '@headless-tree/core';
import { InstanceBuilder } from '@headless-tree/core';
import { isOrderedDragTarget } from '@headless-tree/core';
import { ItemInstance } from '@headless-tree/core';
import { ItemInstanceOpts } from '@headless-tree/core';
import { ItemMeta } from '@headless-tree/core';
import { JSX } from 'react/jsx-runtime';
import { KDndDataRef } from '@headless-tree/core';
import { keyboardDragAndDropFeature } from '@headless-tree/core';
import { KeyboardDragAndDropFeatureDef } from '@headless-tree/core';
import { Label as Label_2 } from 'radix-ui';
import { LucideIcon } from 'lucide-react';
import { MainFeatureDef } from '@headless-tree/core';
import { makeStateUpdater } from '@headless-tree/core';
import { Menubar as Menubar_2 } from 'radix-ui';
import { MotionProps } from 'motion/react';
import { NavigationMenu as NavigationMenu_2 } from 'radix-ui';
import { Popover as Popover_2 } from 'radix-ui';
import { Progress as Progress_2 } from 'radix-ui';
import { PropMemoizationDataRef } from '@headless-tree/core';
import { propMemoizationFeature } from '@headless-tree/core';
import { PropMemoizationFeatureDef } from '@headless-tree/core';
import { RadioGroup as RadioGroup_2 } from 'radix-ui';
import * as React_2 from 'react';
import { ReactNode } from 'react';
import * as RechartsPrimitive from 'recharts';
import { RefObject } from 'react';
import { RegisteredFeatures } from '@headless-tree/core';
import { removeItemsFromParents } from '@headless-tree/core';
import { renamingFeature } from '@headless-tree/core';
import { RenamingFeatureDef } from '@headless-tree/core';
import * as ResizablePrimitive from 'react-resizable-panels';
import { Row } from '@tanstack/react-table';
import { ScrollArea as ScrollArea_2 } from 'radix-ui';
import { searchFeature } from '@headless-tree/core';
import { SearchFeatureDataRef } from '@headless-tree/core';
import { SearchFeatureDef } from '@headless-tree/core';
import { Select as Select_2 } from 'radix-ui';
import { selectionFeature } from '@headless-tree/core';
import { SelectionFeatureDef } from '@headless-tree/core';
import { Separator as Separator_2 } from 'radix-ui';
import { SetStateFn } from '@headless-tree/core';
import { Slider as Slider_2 } from 'radix-ui';
import { Slot } from '@radix-ui/react-slot';
import { Switch as Switch_2 } from 'radix-ui';
import { syncDataLoaderFeature } from '@headless-tree/core';
import { SyncDataLoaderFeatureDef } from '@headless-tree/core';
import { Table as Table_2 } from '@tanstack/react-table';
import { Tabs as Tabs_2 } from 'radix-ui';
import { toast } from 'sonner';
import { Toaster as Toaster_2 } from 'sonner';
import { Toggle as Toggle_2 } from 'radix-ui';
import { ToggleGroup as ToggleGroup_2 } from 'radix-ui';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { TreeConfig } from '@headless-tree/core';
import { TreeDataLoader } from '@headless-tree/core';
import { TreeFeatureDef } from '@headless-tree/core';
import { TreeInstance } from '@headless-tree/core';
import { TreeInstanceOpts } from '@headless-tree/core';
import { TreeItemDataRef } from '@headless-tree/core';
import { TreeState } from '@headless-tree/core';
import { UniqueIdentifier } from '@dnd-kit/core';
import { Updater } from '@headless-tree/core';
import { UseEmblaCarouselType } from 'embla-carousel-react';
import { UseInViewOptions } from 'motion/react';
import { useTree } from '@headless-tree/react';
import { VariantProps } from 'class-variance-authority';

export declare function Accordion(props: React_2.ComponentProps<typeof Accordion_2.Root> & VariantProps<typeof accordionRootVariants> & {
    indicator?: 'arrow' | 'plus';
}): JSX.Element;

export declare function AccordionContent(props: React_2.ComponentProps<typeof Accordion_2.Content>): JSX.Element;

export declare function AccordionItem(props: React_2.ComponentProps<typeof Accordion_2.Item>): JSX.Element;

export declare function AccordionMenu({ className, matchPath, classNames, children, selectedValue, onItemClick, ...props }: React_2.ComponentPropsWithoutRef<typeof Accordion_2.Root> & AccordionMenuProps): JSX.Element;

export declare interface AccordionMenuClassNames {
    root?: string;
    group?: string;
    label?: string;
    separator?: string;
    item?: string;
    sub?: string;
    subTrigger?: string;
    subContent?: string;
    subWrapper?: string;
    indicator?: string;
}

export declare function AccordionMenuGroup({ children, className, ...props }: AccordionMenuGroupProps): JSX.Element;

declare type AccordionMenuGroupProps = React_2.ComponentPropsWithoutRef<'div'>;

export declare function AccordionMenuIndicator({ className, ...props }: AccordionMenuIndicatorProps): JSX.Element;

declare type AccordionMenuIndicatorProps = React_2.ComponentPropsWithoutRef<'span'>;

export declare function AccordionMenuItem({ className, children, variant, asChild, onClick, ...props }: React_2.ComponentPropsWithoutRef<typeof Accordion_2.Item> & VariantProps<typeof itemVariants> & {
    onClick?: React_2.MouseEventHandler<HTMLElement>;
}): JSX.Element;

export declare function AccordionMenuLabel({ children, className, ...props }: AccordionMenuLabelProps): JSX.Element;

declare type AccordionMenuLabelProps = React_2.ComponentPropsWithoutRef<'div'>;

declare interface AccordionMenuProps {
    selectedValue?: string;
    matchPath?: (href: string) => boolean;
    classNames?: AccordionMenuClassNames;
    onItemClick?: (value: string, event: React_2.MouseEvent) => void;
}

export declare function AccordionMenuSeparator({ className, ...props }: AccordionMenuSeparatorProps): JSX.Element;

declare type AccordionMenuSeparatorProps = React_2.ComponentPropsWithoutRef<'div'>;

export declare function AccordionMenuSub({ className, children, ...props }: React_2.ComponentPropsWithoutRef<typeof Accordion_2.Item>): JSX.Element;

export declare function AccordionMenuSubContent({ className, children, type, collapsible, defaultValue, parentValue, ...props }: AccordionMenuSubContentProps): JSX.Element;

declare type AccordionMenuSubContentProps = ((React_2.ComponentPropsWithoutRef<typeof Accordion_2.Content> & {
    type: 'single';
    collapsible: boolean;
    defaultValue?: string;
}) | (React_2.ComponentPropsWithoutRef<typeof Accordion_2.Content> & {
    type: 'multiple';
    collapsible?: boolean;
    defaultValue?: string | string[];
})) & {
    parentValue: string;
};

export declare function AccordionMenuSubTrigger({ className, children, }: React_2.ComponentPropsWithoutRef<typeof Accordion_2.Trigger>): JSX.Element;

declare const accordionRootVariants: (props?: ({
    variant?: "default" | "outline" | "solid" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function AccordionTrigger(props: React_2.ComponentProps<typeof Accordion_2.Trigger>): JSX.Element;

export declare function Alert({ className, variant, size, icon, appearance, close, onClose, children, ...props }: AlertProps): JSX.Element;

export declare function AlertContent({ className, ...props }: React_2.HTMLAttributes<HTMLParagraphElement>): JSX.Element;

export declare function AlertDescription({ className, ...props }: React_2.HTMLAttributes<HTMLParagraphElement>): JSX.Element;

export declare function AlertDialog({ ...props }: React_2.ComponentProps<typeof AlertDialog_2.Root>): JSX.Element;

export declare function AlertDialogAction({ className, variant, ...props }: React_2.ComponentProps<typeof AlertDialog_2.Action> & VariantProps<typeof buttonVariants>): JSX.Element;

export declare function AlertDialogCancel({ className, ...props }: React_2.ComponentProps<typeof AlertDialog_2.Cancel>): JSX.Element;

export declare function AlertDialogContent({ className, ...props }: React_2.ComponentProps<typeof AlertDialog_2.Content>): JSX.Element;

export declare function AlertDialogDescription({ className, ...props }: React_2.ComponentProps<typeof AlertDialog_2.Description>): JSX.Element;

export declare const AlertDialogFooter: ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>) => JSX.Element;

export declare const AlertDialogHeader: ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>) => JSX.Element;

export declare function AlertDialogOverlay({ className, ...props }: React_2.ComponentProps<typeof AlertDialog_2.Overlay>): JSX.Element;

export declare function AlertDialogPortal({ ...props }: React_2.ComponentProps<typeof AlertDialog_2.Portal>): JSX.Element;

export declare function AlertDialogTitle({ className, ...props }: React_2.ComponentProps<typeof AlertDialog_2.Title>): JSX.Element;

export declare function AlertDialogTrigger({ ...props }: React_2.ComponentProps<typeof AlertDialog_2.Trigger>): JSX.Element;

export declare function AlertIcon({ children, className, ...props }: AlertIconProps): JSX.Element;

declare interface AlertIconProps extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
}

declare interface AlertProps extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    close?: boolean;
    onClose?: () => void;
}

export declare function AlertTitle({ className, ...props }: React_2.HTMLAttributes<HTMLHeadingElement>): JSX.Element;

export declare function AlertToolbar({ children, className, ...props }: AlertIconProps): JSX.Element;

declare const alertVariants: (props?: ({
    variant?: "destructive" | "secondary" | "primary" | "success" | "info" | "mono" | "warning" | null | undefined;
    icon?: "destructive" | "primary" | "success" | "info" | "warning" | null | undefined;
    appearance?: "outline" | "solid" | "stroke" | "light" | null | undefined;
    size?: "lg" | "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

declare type AnimationVariant = 'fadeIn' | 'blurIn' | 'blurInUp' | 'blurInDown' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scaleUp' | 'scaleDown';

export { AssistiveDndState }

export { AssistiveTreeDescription }

export { AsyncDataLoaderDataRef }

export { asyncDataLoaderFeature }

export { AsyncDataLoaderFeatureDef }

export declare function Avatar({ className, ...props }: React_2.ComponentProps<typeof Avatar_2.Root>): JSX.Element;

export declare function AvatarFallback({ className, ...props }: React_2.ComponentProps<typeof Avatar_2.Fallback>): JSX.Element;

export declare function AvatarImage({ className, ...props }: React_2.ComponentProps<typeof Avatar_2.Image>): JSX.Element;

export declare function AvatarIndicator({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX.Element;

export declare function AvatarStatus({ className, variant, ...props }: React_2.HTMLAttributes<HTMLDivElement> & VariantProps<typeof avatarStatusVariants>): JSX.Element;

export declare const avatarStatusVariants: (props?: ({
    variant?: "online" | "offline" | "busy" | "away" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Badge({ className, variant, size, appearance, shape, asChild, disabled, ...props }: React_2.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): JSX.Element;

export declare function BadgeButton({ className, variant, asChild, ...props }: React_2.ComponentProps<'button'> & VariantProps<typeof badgeButtonVariants> & {
    asChild?: boolean;
}): JSX.Element;

declare const badgeButtonVariants: (props?: ({
    variant?: "default" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function BadgeDot({ className, ...props }: React_2.ComponentProps<'span'>): JSX.Element;

export declare const badgeVariants: (props?: ({
    variant?: "outline" | "destructive" | "secondary" | "primary" | "success" | "info" | "warning" | null | undefined;
    appearance?: "default" | "outline" | "light" | "ghost" | null | undefined;
    disabled?: boolean | null | undefined;
    size?: "lg" | "md" | "sm" | "xs" | null | undefined;
    shape?: "default" | "circle" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Breadcrumb({ ...props }: React_2.ComponentProps<'nav'> & {
    separator?: React_2.ReactNode;
}): JSX.Element;

export declare const BreadcrumbEllipsis: ({ className, ...props }: React_2.ComponentProps<"span">) => JSX.Element;

export declare function BreadcrumbItem({ className, ...props }: React_2.ComponentProps<'li'>): JSX.Element;

export declare function BreadcrumbLink({ asChild, className, ...props }: React_2.ComponentProps<'a'> & {
    asChild?: boolean;
}): JSX.Element;

export declare function BreadcrumbList({ className, ...props }: React_2.ComponentProps<'ol'>): JSX.Element;

export declare function BreadcrumbPage({ className, ...props }: React_2.ComponentProps<'span'>): JSX.Element;

export declare const BreadcrumbSeparator: ({ children, className, ...props }: React_2.ComponentProps<"li">) => JSX.Element;

export { buildProxiedInstance }

export { buildStaticInstance }

export declare function Button({ className, selected, variant, radius, appearance, mode, size, autoHeight, underlined, underline, asChild, placeholder, ...props }: React_2.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    selected?: boolean;
    asChild?: boolean;
}): JSX.Element;

export declare function ButtonArrow({ icon: Icon, className, ...props }: ButtonArrowProps_2): JSX.Element;

declare interface ButtonArrowProps extends default_3.SVGProps<SVGSVGElement> {
    icon?: LucideIcon;
}

declare interface ButtonArrowProps_2 extends React_2.SVGProps<SVGSVGElement> {
    icon?: LucideIcon;
}

export declare const buttonVariants: (props?: ({
    variant?: "outline" | "destructive" | "secondary" | "primary" | "mono" | "dashed" | "ghost" | "dim" | "foreground" | "inverse" | null | undefined;
    appearance?: "default" | "ghost" | null | undefined;
    underline?: "solid" | "dashed" | null | undefined;
    underlined?: "solid" | "dashed" | null | undefined;
    size?: "icon" | "lg" | "md" | "sm" | "xs" | null | undefined;
    autoHeight?: boolean | null | undefined;
    radius?: "md" | "full" | null | undefined;
    mode?: "default" | "input" | "link" | "icon" | null | undefined;
    placeholder?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Calendar({ className, classNames, showOutsideDays, ...props }: React_2.ComponentProps<typeof DayPicker>): JSX.Element;

export declare function Card({ className, variant, ...props }: React_2.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>): JSX.Element;

export declare function CardContent({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX.Element;

export declare function CardDescription({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX.Element;

export declare function CardFooter({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX.Element;

export declare function CardHeader({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX.Element;

export declare function CardHeading({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX.Element;

export declare function CardTable({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX.Element;

export declare function CardTitle({ className, ...props }: React_2.HTMLAttributes<HTMLHeadingElement>): JSX.Element;

export declare function CardToolbar({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX.Element;

declare const cardVariants: (props?: ({
    variant?: "default" | "accent" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Carousel({ orientation, opts, setApi, plugins, className, children, ...props }: React_2.ComponentProps<'div'> & CarouselProps): JSX.Element;

export declare type CarouselApi = UseEmblaCarouselType[1];

export declare function CarouselContent({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function CarouselItem({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function CarouselNext({ className, variant, size, ...props }: React_2.ComponentProps<typeof Button>): JSX.Element;

declare type CarouselOptions = UseCarouselParameters[0];

declare type CarouselPlugin = UseCarouselParameters[1];

export declare function CarouselPrevious({ className, variant, size, ...props }: React_2.ComponentProps<typeof Button>): JSX.Element;

declare type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: 'horizontal' | 'vertical';
    setApi?: (api: CarouselApi) => void;
};

declare type ChartConfig = {
    [k in string]: {
        label?: React_2.ReactNode;
        icon?: React_2.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};

export declare function ChartContainer({ id, className, children, config, ...props }: React_2.ComponentProps<'div'> & {
    config: ChartConfig;
    children: React_2.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>['children'];
}): JSX.Element;

export declare const ChartLegend: typeof RechartsPrimitive.Legend;

export declare function ChartLegendContent({ className, hideIcon, payload, verticalAlign, nameKey, }: React_2.ComponentProps<'div'> & Pick<RechartsPrimitive.LegendProps, 'payload' | 'verticalAlign'> & {
    hideIcon?: boolean;
    nameKey?: string;
}): JSX.Element | null;

export declare const ChartStyle: ({ id, config }: {
    id: string;
    config: ChartConfig;
}) => JSX.Element | null;

export declare const ChartTooltip: typeof RechartsPrimitive.Tooltip;

export declare function ChartTooltipContent({ active, payload, className, indicator, hideLabel, hideIndicator, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey, }: React_2.ComponentProps<typeof RechartsPrimitive.Tooltip> & React_2.ComponentProps<'div'> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: 'line' | 'dot' | 'dashed';
    nameKey?: string;
    labelKey?: string;
}): JSX.Element | null;

export declare function Checkbox({ className, size, ...props }: React_2.ComponentProps<typeof Checkbox_2.Root> & VariantProps<typeof checkboxVariants>): JSX.Element;

export { checkboxesFeature }

export { CheckboxesFeatureDef }

declare const checkboxVariants: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

export { CheckedState }

export declare function cn(...inputs: ClassValue[]): string;

export declare function Collapsible({ ...props }: default_3.ComponentProps<typeof Collapsible_2.Root>): JSX.Element;

export declare function CollapsibleContent({ className, children, ...props }: default_3.ComponentProps<typeof Collapsible_2.CollapsibleContent>): JSX.Element;

export declare function CollapsibleTrigger({ ...props }: default_3.ComponentProps<typeof Collapsible_2.CollapsibleTrigger>): JSX.Element;

export declare function Command({ className, ...props }: default_3.ComponentProps<typeof Command_2>): JSX.Element;

export declare function CommandCheck({ icon: Icon, className, ...props }: ButtonArrowProps): JSX.Element;

export declare const CommandDialog: ({ children, className, ...props }: CommandDialogProps) => JSX.Element;

declare type CommandDialogProps = DialogProps & {
    className?: string;
};

export declare function CommandEmpty({ ...props }: default_3.ComponentProps<typeof Command_2.Empty>): JSX.Element;

export declare function CommandGroup({ className, ...props }: default_3.ComponentProps<typeof Command_2.Group>): JSX.Element;

export declare function CommandInput({ className, ...props }: default_3.ComponentProps<typeof Command_2.Input>): JSX.Element;

export declare function CommandItem({ className, ...props }: default_3.ComponentProps<typeof Command_2.Item>): JSX.Element;

export declare function CommandList({ className, ...props }: default_3.ComponentProps<typeof Command_2.List>): JSX.Element;

export declare function CommandSeparator({ className, ...props }: default_3.ComponentProps<typeof Command_2.Separator>): JSX.Element;

export declare const CommandShortcut: ({ className, ...props }: default_3.HTMLAttributes<HTMLSpanElement>) => JSX.Element;

export declare function ContextMenu({ ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Root>): JSX.Element;

export declare function ContextMenuCheckboxItem({ className, children, checked, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>): JSX.Element;

export declare function ContextMenuContent({ className, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Content>): JSX.Element;

export declare function ContextMenuGroup({ ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Group>): JSX.Element;

export declare function ContextMenuItem({ className, inset, variant, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
}): JSX.Element;

export declare function ContextMenuLabel({ className, inset, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
}): JSX.Element;

export declare function ContextMenuPortal({ ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Portal>): JSX.Element;

export declare function ContextMenuRadioGroup({ ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>): JSX.Element;

export declare function ContextMenuRadioItem({ className, children, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.RadioItem>): JSX.Element;

export declare function ContextMenuSeparator({ className, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Separator>): JSX.Element;

export declare function ContextMenuShortcut({ className, ...props }: React_2.ComponentProps<'span'>): JSX.Element;

export declare function ContextMenuSub({ ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Sub>): JSX.Element;

export declare function ContextMenuSubContent({ className, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.SubContent>): JSX.Element;

export declare function ContextMenuSubTrigger({ className, inset, children, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}): JSX.Element;

export declare function ContextMenuTrigger({ ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Trigger>): JSX.Element;

export declare function CountingNumber({ from, to, duration, delay, className, startOnView, once, inViewMargin, onComplete, format, ...props }: CountingNumberProps): JSX.Element;

declare interface CountingNumberProps {
    from?: number;
    to?: number;
    duration?: number;
    delay?: number;
    className?: string;
    startOnView?: boolean;
    once?: boolean;
    inViewMargin?: UseInViewOptions['margin'];
    onComplete?: () => void;
    format?: (value: number) => string;
}

export declare const createFilter: <T = unknown>(field: string, operator?: string, values?: T[]) => Filter<T>;

export declare const createFilterGroup: <T = unknown>(id: string, label: string, fields: FilterFieldConfig<T>[], initialFilters?: Filter<T>[]) => FilterGroup<T>;

export { createOnDropHandler }

export { createTree }

export { CustomHotkeysConfig }

declare interface CustomRendererProps<T = unknown> {
    field: FilterFieldConfig<T>;
    values: T[];
    onChange: (values: T[]) => void;
    operator: string;
}

export declare function DataGrid<TData extends object>({ children, table, ...props }: DataGridProps<TData>): JSX.Element;

export declare function DataGridColumnFilter<TData, TValue>({ column, title, options }: DataGridColumnFilterProps<TData, TValue>): JSX.Element;

export declare interface DataGridColumnFilterProps<TData, TValue> {
    column?: Column<TData, TValue>;
    title?: string;
    options: {
        label: string;
        value: string;
        icon?: React_2.ComponentType<{
            className?: string;
        }>;
    }[];
}

export declare function DataGridColumnHeader<TData, TValue>({ column, title, icon, className, filter, visibility, }: DataGridColumnHeaderProps<TData, TValue>): JSX.Element;

export declare interface DataGridColumnHeaderProps<TData, TValue> extends HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>;
    title?: string;
    icon?: ReactNode;
    pinnable?: boolean;
    filter?: ReactNode;
    visibility?: boolean;
}

export declare function DataGridColumnVisibility<TData>({ table, trigger }: {
    table: Table_2<TData>;
    trigger: ReactNode;
}): JSX.Element;

export declare function DataGridContainer({ children, className, border, }: {
    children: ReactNode;
    className?: string;
    border?: boolean;
}): JSX.Element;

declare interface DataGridContextProps<TData extends object> {
    props: DataGridProps<TData>;
    table: Table_2<TData>;
    recordCount: number;
    isLoading: boolean;
}

export declare function DataGridPagination(props: DataGridPaginationProps): JSX.Element;

export declare interface DataGridPaginationProps {
    sizes?: number[];
    sizesInfo?: string;
    sizesLabel?: string;
    sizesDescription?: string;
    sizesSkeleton?: ReactNode;
    more?: boolean;
    moreLimit?: number;
    info?: string;
    infoSkeleton?: ReactNode;
    className?: string;
    rowsPerPageLabel?: string;
    previousPageLabel?: string;
    nextPageLabel?: string;
    ellipsisText?: string;
}

declare interface DataGridProps<TData extends object> {
    className?: string;
    table?: Table_2<TData>;
    recordCount: number;
    children?: ReactNode;
    onRowClick?: (row: TData) => void;
    isLoading?: boolean;
    loadingMode?: 'skeleton' | 'spinner';
    loadingMessage?: ReactNode | string;
    emptyMessage?: ReactNode | string;
    tableLayout?: {
        dense?: boolean;
        cellBorder?: boolean;
        rowBorder?: boolean;
        rowRounded?: boolean;
        stripped?: boolean;
        headerBackground?: boolean;
        headerBorder?: boolean;
        headerSticky?: boolean;
        width?: 'auto' | 'fixed';
        columnsVisibility?: boolean;
        columnsResizable?: boolean;
        columnsPinnable?: boolean;
        columnsMovable?: boolean;
        columnsDraggable?: boolean;
        rowsDraggable?: boolean;
    };
    tableClassNames?: {
        base?: string;
        header?: string;
        headerRow?: string;
        headerSticky?: string;
        body?: string;
        bodyRow?: string;
        footer?: string;
        edgeCell?: string;
    };
}

export declare function DataGridProvider<TData extends object>({ children, table, ...props }: DataGridProps<TData> & {
    table: Table_2<TData>;
}): JSX.Element;

export declare function DataGridTable<TData>(): JSX.Element;

export declare function DataGridTableBase({ children }: {
    children: ReactNode;
}): JSX.Element;

export declare function DataGridTableBody({ children }: {
    children: ReactNode;
}): JSX.Element;

export declare function DataGridTableBodyRow<TData>({ children, row, dndRef, dndStyle, }: {
    children: ReactNode;
    row: Row<TData>;
    dndRef?: React_2.Ref<HTMLTableRowElement>;
    dndStyle?: CSSProperties;
}): JSX.Element;

export declare function DataGridTableBodyRowCell<TData>({ children, cell, dndRef, dndStyle, }: {
    children: ReactNode;
    cell: Cell<TData, unknown>;
    dndRef?: React_2.Ref<HTMLTableCellElement>;
    dndStyle?: CSSProperties;
}): JSX.Element;

export declare function DataGridTableBodyRowExpandded<TData>({ row }: {
    row: Row<TData>;
}): JSX.Element;

export declare function DataGridTableBodyRowSkeleton({ children }: {
    children: ReactNode;
}): JSX.Element;

export declare function DataGridTableBodyRowSkeletonCell<TData>({ children, column }: {
    children: ReactNode;
    column: Column<TData>;
}): JSX.Element;

export declare function DataGridTableDnd<TData>({ handleDragEnd }: {
    handleDragEnd: (event: DragEndEvent) => void;
}): JSX.Element;

export declare function DataGridTableDndRowHandle({ rowId }: {
    rowId: string;
}): JSX.Element;

export declare function DataGridTableDndRows<TData>({ handleDragEnd, dataIds, }: {
    handleDragEnd: (event: DragEndEvent) => void;
    dataIds: UniqueIdentifier[];
}): JSX.Element;

export declare function DataGridTableEmpty(): JSX.Element;

export declare function DataGridTableHead({ children }: {
    children: ReactNode;
}): JSX.Element;

export declare function DataGridTableHeadRow<TData>({ children, headerGroup, }: {
    children: ReactNode;
    headerGroup: HeaderGroup<TData>;
}): JSX.Element;

export declare function DataGridTableHeadRowCell<TData>({ children, header, dndRef, dndStyle, }: {
    children: ReactNode;
    header: Header<TData, unknown>;
    dndRef?: React_2.Ref<HTMLTableCellElement>;
    dndStyle?: CSSProperties;
}): JSX.Element;

export declare function DataGridTableHeadRowCellResize<TData>({ header }: {
    header: Header<TData, unknown>;
}): JSX.Element;

export declare function DataGridTableLoader(): JSX.Element;

export declare function DataGridTableRowSelect<TData>({ row, size }: {
    row: Row<TData>;
    size?: 'sm' | 'md' | 'lg';
}): JSX.Element;

export declare function DataGridTableRowSelectAll({ size }: {
    size?: 'sm' | 'md' | 'lg';
}): JSX.Element;

export declare function DataGridTableRowSpacer(): JSX.Element;

export declare const DEFAULT_I18N: FilterI18nConfig;

export declare const DEFAULT_OPERATORS: Record<string, FilterOperator[]>;

export declare function Dialog({ ...props }: React_2.ComponentProps<typeof Dialog_2.Root>): JSX.Element;

export declare const DialogBody: ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>) => JSX.Element;

export declare function DialogClose({ ...props }: React_2.ComponentProps<typeof Dialog_2.Close>): JSX.Element;

export declare function DialogContent({ className, children, showCloseButton, overlay, variant, ...props }: React_2.ComponentProps<typeof Dialog_2.Content> & VariantProps<typeof dialogContentVariants> & {
    showCloseButton?: boolean;
    overlay?: boolean;
}): JSX.Element;

declare const dialogContentVariants: (props?: ({
    variant?: "default" | "fullscreen" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function DialogDescription({ className, ...props }: React_2.ComponentProps<typeof Dialog_2.Description>): JSX.Element;

export declare const DialogFooter: ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>) => JSX.Element;

export declare const DialogHeader: ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>) => JSX.Element;

export declare function DialogOverlay({ className, ...props }: React_2.ComponentProps<typeof Dialog_2.Overlay>): JSX.Element;

export declare function DialogPortal({ ...props }: React_2.ComponentProps<typeof Dialog_2.Portal>): JSX.Element;

export declare function DialogTitle({ className, ...props }: React_2.ComponentProps<typeof Dialog_2.Title>): JSX.Element;

export declare function DialogTrigger({ ...props }: React_2.ComponentProps<typeof Dialog_2.Trigger>): JSX.Element;

export { DirectionProvider }

export { DndDataRef }

export { DndState }

export { dragAndDropFeature }

export { DragAndDropFeatureDef }

export { DragLineData }

export { DragTarget }

export { DragTargetPosition }

export declare const Drawer: ({ shouldScaleBackground, ...props }: React_2.ComponentProps<typeof Drawer_2.Root>) => JSX.Element;

export declare function DrawerClose({ ...props }: React_2.ComponentProps<typeof Drawer_2.Close>): JSX.Element;

export declare function DrawerContent({ className, children, ...props }: React_2.ComponentProps<typeof Drawer_2.Content>): JSX.Element;

export declare function DrawerDescription({ className, ...props }: React_2.ComponentProps<typeof Drawer_2.Description>): JSX.Element;

export declare const DrawerFooter: ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>) => JSX.Element;

export declare const DrawerHeader: ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>) => JSX.Element;

export declare function DrawerOverlay({ className, ...props }: React_2.ComponentProps<typeof Drawer_2.Overlay>): JSX.Element;

export declare function DrawerPortal({ ...props }: React_2.ComponentProps<typeof Drawer_2.Portal>): JSX.Element;

export declare function DrawerTitle({ className, ...props }: React_2.ComponentProps<typeof Drawer_2.Title>): JSX.Element;

export declare function DrawerTrigger({ ...props }: React_2.ComponentProps<typeof Drawer_2.Trigger>): JSX.Element;

export declare function DropdownMenu({ ...props }: React_2.ComponentProps<typeof DropdownMenu_2.Root>): JSX.Element;

export declare function DropdownMenuCheckboxItem({ className, children, checked, ...props }: React_2.ComponentProps<typeof DropdownMenu_2.CheckboxItem>): JSX.Element;

export declare function DropdownMenuContent({ className, sideOffset, ...props }: React_2.ComponentProps<typeof DropdownMenu_2.Content>): JSX.Element;

export declare function DropdownMenuGroup({ ...props }: React_2.ComponentProps<typeof DropdownMenu_2.Group>): JSX.Element;

export declare function DropdownMenuItem({ className, inset, variant, ...props }: React_2.ComponentProps<typeof DropdownMenu_2.Item> & {
    inset?: boolean;
    variant?: 'destructive';
}): JSX.Element;

export declare function DropdownMenuLabel({ className, inset, ...props }: React_2.ComponentProps<typeof DropdownMenu_2.Label> & {
    inset?: boolean;
}): JSX.Element;

export declare function DropdownMenuPortal({ ...props }: React_2.ComponentProps<typeof DropdownMenu_2.Portal>): JSX.Element;

export declare function DropdownMenuRadioGroup({ ...props }: React_2.ComponentProps<typeof DropdownMenu_2.RadioGroup>): JSX.Element;

export declare function DropdownMenuRadioItem({ className, children, ...props }: React_2.ComponentProps<typeof DropdownMenu_2.RadioItem>): JSX.Element;

export declare function DropdownMenuSeparator({ className, ...props }: React_2.ComponentProps<typeof DropdownMenu_2.Separator>): JSX.Element;

export declare function DropdownMenuShortcut({ className, ...props }: React_2.HTMLAttributes<HTMLSpanElement>): JSX.Element;

export declare function DropdownMenuSub({ ...props }: React_2.ComponentProps<typeof DropdownMenu_2.Sub>): JSX.Element;

export declare function DropdownMenuSubContent({ className, ...props }: React_2.ComponentProps<typeof DropdownMenu_2.SubContent>): JSX.Element;

export declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React_2.ComponentProps<typeof DropdownMenu_2.SubTrigger> & {
    inset?: boolean;
}): JSX.Element;

export declare function DropdownMenuTrigger({ ...props }: React_2.ComponentProps<typeof DropdownMenu_2.Trigger>): JSX.Element;

export { EmptyFeatureDef }

export { ExpandAllDataRef }

export { expandAllFeature }

export { ExpandAllFeatureDef }

export { FeatureDef }

export { FeatureImplementation }

export declare interface Filter<T = unknown> {
    id: string;
    field: string;
    operator: string;
    values: T[];
}

export declare interface FilterFieldConfig<T = unknown> {
    key?: string;
    label?: string;
    icon?: default_3.ReactNode;
    type?: 'select' | 'multiselect' | 'date' | 'daterange' | 'text' | 'number' | 'numberrange' | 'boolean' | 'email' | 'url' | 'tel' | 'time' | 'datetime' | 'custom' | 'separator';
    group?: string;
    fields?: FilterFieldConfig<T>[];
    options?: FilterOption<T>[];
    operators?: FilterOperator[];
    customRenderer?: (props: CustomRendererProps<T>) => default_3.ReactNode;
    customValueRenderer?: (values: T[], options: FilterOption<T>[]) => default_3.ReactNode;
    placeholder?: string;
    searchable?: boolean;
    maxSelections?: number;
    min?: number;
    max?: number;
    step?: number;
    prefix?: string | default_3.ReactNode;
    suffix?: string | default_3.ReactNode;
    pattern?: string;
    validation?: (value: unknown) => boolean;
    allowCustomValues?: boolean;
    className?: string;
    popoverContentClassName?: string;
    selectedOptionsClassName?: string;
    groupLabel?: string;
    onLabel?: string;
    offLabel?: string;
    onInputChange?: (e: default_3.ChangeEvent<HTMLInputElement>) => void;
    defaultOperator?: string;
    value?: T[];
    onValueChange?: (values: T[]) => void;
}

export declare interface FilterFieldGroup<T = unknown> {
    group?: string;
    fields: FilterFieldConfig<T>[];
}

export declare type FilterFieldsConfig<T = unknown> = FilterFieldConfig<T>[] | FilterFieldGroup<T>[];

export declare interface FilterGroup<T = unknown> {
    id: string;
    label?: string;
    filters: Filter<T>[];
    fields: FilterFieldConfig<T>[];
}

export declare interface FilterI18nConfig {
    addFilter: string;
    searchFields: string;
    noFieldsFound: string;
    noResultsFound: string;
    select: string;
    true: string;
    false: string;
    min: string;
    max: string;
    to: string;
    typeAndPressEnter: string;
    selected: string;
    selectedCount: string;
    percent: string;
    defaultCurrency: string;
    defaultColor: string;
    addFilterTitle: string;
    operators: {
        is: string;
        isNot: string;
        isAnyOf: string;
        isNotAnyOf: string;
        includesAll: string;
        excludesAll: string;
        before: string;
        after: string;
        between: string;
        notBetween: string;
        contains: string;
        notContains: string;
        startsWith: string;
        endsWith: string;
        isExactly: string;
        equals: string;
        notEquals: string;
        greaterThan: string;
        lessThan: string;
        overlaps: string;
        includes: string;
        excludes: string;
        includesAllOf: string;
        includesAnyOf: string;
        empty: string;
        notEmpty: string;
    };
    placeholders: {
        enterField: (fieldType: string) => string;
        selectField: string;
        searchField: (fieldName: string) => string;
        enterKey: string;
        enterValue: string;
    };
    helpers: {
        formatOperator: (operator: string) => string;
    };
    validation: {
        invalidEmail: string;
        invalidUrl: string;
        invalidTel: string;
        invalid: string;
    };
}

export declare interface FilterOperator {
    value: string;
    label: string;
    supportsMultiple?: boolean;
}

export declare interface FilterOption<T = unknown> {
    value: T;
    label: string;
    icon?: default_3.ReactNode;
    metadata?: Record<string, unknown>;
}

export declare function Filters<T = unknown>({ filters, fields, onChange, className, showAddButton, addButtonText, addButtonIcon, addButtonClassName, addButton, variant, size, radius, i18n, showSearchInput, cursorPointer, trigger, allowMultiple, popoverContentClassName, }: FiltersProps<T>): JSX.Element;

export declare const FiltersContent: <T = unknown>({ filters, fields, onChange }: FiltersContentProps<T>) => JSX.Element;

declare interface FiltersContentProps<T = unknown> {
    filters: Filter<T>[];
    fields: FilterFieldsConfig<T>;
    onChange: (filters: Filter<T>[]) => void;
}

declare interface FiltersProps<T = unknown> {
    filters: Filter<T>[];
    fields: FilterFieldsConfig<T>;
    onChange: (filters: Filter<T>[]) => void;
    className?: string;
    showAddButton?: boolean;
    addButtonText?: string;
    addButtonIcon?: default_3.ReactNode;
    addButtonClassName?: string;
    addButton?: default_3.ReactNode;
    variant?: 'solid' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    radius?: 'md' | 'full';
    i18n?: Partial<FilterI18nConfig>;
    showSearchInput?: boolean;
    cursorPointer?: boolean;
    trigger?: default_3.ReactNode;
    allowMultiple?: boolean;
    popoverContentClassName?: string;
}

export declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React_2.JSX.Element;

export declare function FormControl({ ...props }: React_2.ComponentProps<typeof Slot>): JSX.Element;

export declare function FormDescription({ className, ...props }: React_2.HTMLAttributes<HTMLParagraphElement>): JSX.Element | null;

export declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => JSX.Element;

export declare function FormItem({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX.Element;

export declare function FormLabel({ className, ...props }: React_2.ComponentProps<typeof Label_2.Root>): JSX.Element;

export declare function FormMessage({ className, children, ...props }: React_2.HTMLAttributes<HTMLParagraphElement>): JSX.Element | null;

export { HotkeyConfig }

export { HotkeyName }

export { HotkeysConfig }

export { HotkeysCoreDataRef }

export { hotkeysCoreFeature }

export { HotkeysCoreFeatureDef }

export declare function HoverCard({ ...props }: React_2.ComponentProps<typeof HoverCardPrimitive.Root>): JSX.Element;

export declare function HoverCardContent({ className, align, sideOffset, ...props }: React_2.ComponentProps<typeof HoverCardPrimitive.Content>): JSX.Element;

export declare function HoverCardTrigger({ ...props }: React_2.ComponentProps<typeof HoverCardPrimitive.Trigger>): JSX.Element;

export declare function Input({ className, type, variant, ...props }: React_2.ComponentProps<'input'> & VariantProps<typeof inputVariants>): JSX.Element;

declare const inputVariants: (props?: ({
    variant?: "lg" | "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

export { insertItemsAtTarget }

export { InstanceBuilder }

export { isOrderedDragTarget }

export { ItemInstance }

export { ItemInstanceOpts }

export { ItemMeta }

declare const itemVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Kanban<T>({ value, onValueChange, getItemValue, children, className, onMove }: KanbanRootProps<T>): JSX.Element;

export declare function KanbanBoard({ children, className }: KanbanBoardProps): JSX.Element;

declare interface KanbanBoardProps {
    className?: string;
    children: React_2.ReactNode;
}

export declare function KanbanColumn({ value, className, children, disabled }: KanbanColumnProps): JSX.Element;

export declare function KanbanColumnContent({ value, className, children }: KanbanColumnContentProps): JSX.Element;

declare interface KanbanColumnContentProps {
    value: string;
    className?: string;
    children: React_2.ReactNode;
}

export declare function KanbanColumnHandle({ asChild, className, children, cursor }: KanbanColumnHandleProps): JSX.Element;

declare interface KanbanColumnHandleProps {
    asChild?: boolean;
    className?: string;
    children?: React_2.ReactNode;
    cursor?: boolean;
}

declare interface KanbanColumnProps {
    value: string;
    className?: string;
    children: React_2.ReactNode;
    disabled?: boolean;
}

export declare function KanbanItem({ value, asChild, className, children, disabled }: KanbanItemProps): JSX.Element;

export declare function KanbanItemHandle({ asChild, className, children, cursor }: KanbanItemHandleProps): JSX.Element;

declare interface KanbanItemHandleProps {
    asChild?: boolean;
    className?: string;
    children?: React_2.ReactNode;
    cursor?: boolean;
}

declare interface KanbanItemProps {
    value: string;
    asChild?: boolean;
    className?: string;
    children: React_2.ReactNode;
    disabled?: boolean;
}

declare interface KanbanMoveEvent {
    event: DragEndEvent;
    activeContainer: string;
    activeIndex: number;
    overContainer: string;
    overIndex: number;
}

export declare function KanbanOverlay({ children, className }: KanbanOverlayProps): JSX.Element;

declare interface KanbanOverlayProps {
    className?: string;
    children?: React_2.ReactNode | ((params: {
        value: UniqueIdentifier;
        variant: 'column' | 'item';
    }) => React_2.ReactNode);
}

declare interface KanbanRootProps<T> {
    value: Record<string, T[]>;
    onValueChange: (value: Record<string, T[]>) => void;
    getItemValue: (item: T) => string;
    children: React_2.ReactNode;
    className?: string;
    onMove?: (event: KanbanMoveEvent) => void;
}

export declare function Kbd({ className, ...props }: React.ComponentProps<'kbd'>): JSX.Element;

export declare function KbdGroup({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export { KDndDataRef }

export { keyboardDragAndDropFeature }

export { KeyboardDragAndDropFeatureDef }

export declare function Label({ className, variant, ...props }: React_2.ComponentProps<typeof Label_2.Root> & VariantProps<typeof labelVariants>): JSX.Element;

declare const labelVariants: (props?: ({
    variant?: "secondary" | "primary" | null | undefined;
} & ClassProp) | undefined) => string;

export { MainFeatureDef }

export { makeStateUpdater }

export declare function Marquee({ className, reverse, pauseOnHover, children, vertical, repeat, ariaLabel, ariaLive, ariaRole, ...props }: MarqueeProps): JSX.Element;

declare interface MarqueeProps extends ComponentPropsWithoutRef<'div'> {
    /**
     * Optional CSS class name to apply custom styles
     */
    className?: string;
    /**
     * Whether to reverse the animation direction
     * @default false
     */
    reverse?: boolean;
    /**
     * Whether to pause the animation on hover
     * @default false
     */
    pauseOnHover?: boolean;
    /**
     * Content to be displayed in the marquee
     */
    children: default_3.ReactNode;
    /**
     * Whether to animate vertically instead of horizontally
     * @default false
     */
    vertical?: boolean;
    /**
     * Number of times to repeat the content
     * @default 4
     */
    repeat?: number;
    /**
     * If true, automatically repeats children enough to fill the visible area
     */
    autoFill?: boolean;
    /**
     * ARIA label for accessibility
     */
    ariaLabel?: string;
    /**
     * ARIA live region politeness
     */
    ariaLive?: 'off' | 'polite' | 'assertive';
    /**
     * ARIA role
     */
    ariaRole?: string;
}

export declare function Menubar({ className, ...props }: React_2.ComponentProps<typeof Menubar_2.Root>): JSX.Element;

export declare function MenubarCheckboxItem({ className, children, checked, ...props }: React_2.ComponentProps<typeof Menubar_2.CheckboxItem>): JSX.Element;

export declare function MenubarContent({ className, align, alignOffset, sideOffset, ...props }: React_2.ComponentProps<typeof Menubar_2.Content>): JSX.Element;

export declare function MenubarGroup({ ...props }: React_2.ComponentProps<typeof Menubar_2.Group>): JSX.Element;

export declare function MenubarItem({ className, inset, ...props }: React_2.ComponentProps<typeof Menubar_2.Item> & {
    inset?: boolean;
}): JSX.Element;

export declare function MenubarLabel({ className, inset, ...props }: React_2.ComponentProps<typeof Menubar_2.Label> & {
    inset?: boolean;
}): JSX.Element;

export declare function MenubarMenu({ ...props }: React_2.ComponentProps<typeof Menubar_2.Menu>): JSX.Element;

export declare function MenubarPortal({ ...props }: React_2.ComponentProps<typeof Menubar_2.Portal>): JSX.Element;

export declare function MenubarRadioGroup({ ...props }: React_2.ComponentProps<typeof Menubar_2.RadioGroup>): JSX.Element;

export declare function MenubarRadioItem({ className, children, ...props }: React_2.ComponentProps<typeof Menubar_2.RadioItem>): JSX.Element;

export declare function MenubarSeparator({ className, ...props }: React_2.ComponentProps<typeof Menubar_2.Separator>): JSX.Element;

export declare const MenubarShortcut: ({ className, ...props }: React_2.ComponentProps<"span">) => JSX.Element;

export declare function MenubarSub({ ...props }: React_2.ComponentProps<typeof Menubar_2.Sub>): JSX.Element;

export declare function MenubarSubContent({ className, ...props }: React_2.ComponentProps<typeof Menubar_2.SubContent>): JSX.Element;

export declare function MenubarSubTrigger({ className, inset, children, ...props }: React_2.ComponentProps<typeof Menubar_2.SubTrigger> & {
    inset?: boolean;
}): JSX.Element;

export declare function MenubarTrigger({ className, ...props }: React_2.ComponentProps<typeof Menubar_2.Trigger>): JSX.Element;

export declare function NavigationMenu({ className, children, viewport, ...props }: React_2.ComponentProps<typeof NavigationMenu_2.Root> & {
    viewport?: boolean;
}): JSX.Element;

export declare function NavigationMenuContent({ className, ...props }: React_2.ComponentProps<typeof NavigationMenu_2.Content>): JSX.Element;

export declare function NavigationMenuIndicator({ className, ...props }: React_2.ComponentProps<typeof NavigationMenu_2.Indicator>): JSX.Element;

export declare function NavigationMenuItem({ className, ...props }: React_2.ComponentProps<typeof NavigationMenu_2.Item>): JSX.Element;

export declare function NavigationMenuLink({ className, ...props }: React_2.ComponentProps<typeof NavigationMenu_2.Link>): JSX.Element;

export declare function NavigationMenuList({ className, ...props }: React_2.ComponentProps<typeof NavigationMenu_2.List>): JSX.Element;

export declare function NavigationMenuTrigger({ className, children, ...props }: React_2.ComponentProps<typeof NavigationMenu_2.Trigger>): JSX.Element;

export declare const navigationMenuTriggerStyle: (props?: ClassProp | undefined) => string;

export declare function NavigationMenuViewport({ className, ...props }: React_2.ComponentProps<typeof NavigationMenu_2.Viewport>): JSX.Element;

export declare const Pagination: ({ className, ...props }: React_2.ComponentProps<"nav">) => JSX.Element;

export declare function PaginationContent({ className, ...props }: React_2.ComponentProps<'ul'>): JSX.Element;

export declare const PaginationEllipsis: ({ className, ...props }: React_2.ComponentProps<"span">) => JSX.Element;

export declare function PaginationItem({ className, ...props }: React_2.ComponentProps<'li'>): JSX.Element;

export declare function Popover({ ...props }: React_2.ComponentProps<typeof Popover_2.Root>): JSX.Element;

export declare function PopoverAnchor({ ...props }: React_2.ComponentProps<typeof Popover_2.Anchor>): JSX.Element;

export declare function PopoverContent({ className, align, sideOffset, ...props }: React_2.ComponentProps<typeof Popover_2.Content>): JSX.Element;

export declare function PopoverTrigger({ ...props }: React_2.ComponentProps<typeof Popover_2.Trigger>): JSX.Element;

export declare function Progress({ className, indicatorClassName, value, ...props }: React_2.ComponentProps<typeof Progress_2.Root> & {
    indicatorClassName?: string;
}): JSX.Element;

export declare function ProgressCircle({ className, indicatorClassName, trackClassName, value, size, strokeWidth, children, ...props }: React_2.ComponentProps<'div'> & {
    /**
     * Progress value from 0 to 100
     */
    value?: number;
    /**
     * Size of the circle in pixels
     */
    size?: number;
    /**
     * Width of the progress stroke
     */
    strokeWidth?: number;
    /**
     * Additional className for the progress stroke
     */
    indicatorClassName?: string;
    /**
     * Additional className for the progress track
     */
    trackClassName?: string;
    /**
     * Content to display in the center of the circle
     */
    children?: React_2.ReactNode;
}): JSX.Element;

export declare function ProgressRadial({ className, value, size, strokeWidth, startAngle, endAngle, showLabel, trackClassName, indicatorClassName, children, ...props }: React_2.ComponentProps<'div'> & {
    /**
     * Progress value from 0 to 100
     */
    value?: number;
    /**
     * Size of the radial in pixels
     */
    size?: number;
    /**
     * Width of the progress stroke
     */
    strokeWidth?: number;
    /**
     * Start angle in degrees
     */
    startAngle?: number;
    /**
     * Additional className for the progress stroke
     */
    indicatorClassName?: string;
    /**
     * Additional className for the progress track
     */
    trackClassName?: string;
    /**
     * End angle in degrees
     */
    endAngle?: number;
    /**
     * Whether to show percentage label
     */
    showLabel?: boolean;
    /**
     * Custom content to display
     */
    children?: React_2.ReactNode;
}): JSX.Element;

export { PropMemoizationDataRef }

export { propMemoizationFeature }

export { PropMemoizationFeatureDef }

export declare function RadioGroup({ className, variant, size, ...props }: React_2.ComponentProps<typeof RadioGroup_2.Root> & VariantProps<typeof radioGroupVariants>): JSX.Element;

export declare function RadioGroupItem({ className, size, ...props }: React_2.ComponentProps<typeof RadioGroup_2.Item> & VariantProps<typeof radioItemVariants>): JSX.Element;

declare const radioGroupVariants: (props?: ({
    variant?: "primary" | "mono" | null | undefined;
    size?: "lg" | "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

declare const radioItemVariants: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Rating({ rating, maxRating, size, className, starClassName, showValue, editable, onRatingChange, ...props }: React_2.ComponentProps<'div'> & VariantProps<typeof ratingVariants> & {
    /**
     * Current rating value (supports decimal values for partial stars)
     */
    rating: number;
    /**
     * Maximum rating value (number of stars to show)
     */
    maxRating?: number;
    /**
     * Whether to show the numeric rating value
     */
    showValue?: boolean;
    /**
     * Class name for the value span
     */
    starClassName?: string;
    /**
     * Whether the rating is editable (clickable)
     */
    editable?: boolean;
    /**
     * Callback function called when rating changes
     */
    onRatingChange?: (rating: number) => void;
}): JSX.Element;

declare const ratingVariants: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

export { RegisteredFeatures }

export { removeItemsFromParents }

export { renamingFeature }

export { RenamingFeatureDef }

export declare const ResizableHandle: ({ withHandle, className, ...props }: default_3.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
    withHandle?: boolean;
}) => JSX.Element;

export declare const ResizablePanel: default_3.ForwardRefExoticComponent<Omit<default_3.HTMLAttributes<HTMLDivElement | HTMLElement | HTMLButtonElement | HTMLHeadingElement | HTMLObjectElement | HTMLMapElement | HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLCanvasElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPreElement | HTMLProgressElement | HTMLSlotElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTemplateElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | HTMLTableCaptionElement | HTMLMenuElement | HTMLPictureElement>, "id" | "onResize"> & {
    className?: string;
    collapsedSize?: number | undefined;
    collapsible?: boolean | undefined;
    defaultSize?: number | undefined;
    id?: string;
    maxSize?: number | undefined;
    minSize?: number | undefined;
    onCollapse?: ResizablePrimitive.PanelOnCollapse;
    onExpand?: ResizablePrimitive.PanelOnExpand;
    onResize?: ResizablePrimitive.PanelOnResize;
    order?: number;
    style?: object;
    tagName?: keyof HTMLElementTagNameMap | undefined;
} & {
    children?: ReactNode | undefined;
} & default_3.RefAttributes<ResizablePrimitive.ImperativePanelHandle>>;

export declare const ResizablePanelGroup: ({ className, ...props }: default_3.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => JSX.Element;

declare type RevealVariant = 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'blur' | 'typewriter' | 'wave' | 'stagger' | 'rotate' | 'elastic';

export declare function ScrollArea({ className, viewportClassName, children, viewportRef, ...props }: React_2.ComponentProps<typeof ScrollArea_2.Root> & {
    viewportRef?: React_2.Ref<HTMLDivElement>;
    viewportClassName?: string;
}): JSX.Element;

export declare function ScrollBar({ className, orientation, ...props }: React_2.ComponentProps<typeof ScrollArea_2.ScrollAreaScrollbar>): JSX.Element;

export declare function Scrollspy({ children, targetRef, onUpdate, className, offset, smooth, dataAttribute, history, }: ScrollspyProps): JSX.Element;

declare type ScrollspyProps = {
    children: ReactNode;
    targetRef?: RefObject<HTMLElement | HTMLDivElement | Document | null | undefined>;
    onUpdate?: (id: string) => void;
    offset?: number;
    smooth?: boolean;
    className?: string;
    dataAttribute?: string;
    history?: boolean;
    throttleTime?: number;
};

export { searchFeature }

export { SearchFeatureDataRef }

export { SearchFeatureDef }

export declare const Select: ({ indicatorPosition, indicatorVisibility, indicator, ...props }: {
    indicatorPosition?: "left" | "right";
    indicatorVisibility?: boolean;
    indicator?: ReactNode;
} & React_2.ComponentProps<typeof Select_2.Root>) => JSX.Element;

export declare function SelectContent({ className, children, position, ...props }: React_2.ComponentProps<typeof Select_2.Content>): JSX.Element;

export declare function SelectGroup({ ...props }: React_2.ComponentProps<typeof Select_2.Group>): JSX.Element;

export declare function SelectIndicator({ children, className, ...props }: React_2.ComponentProps<typeof Select_2.ItemIndicator>): JSX.Element;

export { selectionFeature }

export { SelectionFeatureDef }

export declare function SelectItem({ className, children, ...props }: React_2.ComponentProps<typeof Select_2.Item>): JSX.Element;

export declare function SelectLabel({ className, ...props }: React_2.ComponentProps<typeof Select_2.Label>): JSX.Element;

export declare function SelectScrollDownButton({ className, ...props }: React_2.ComponentProps<typeof Select_2.ScrollDownButton>): JSX.Element;

export declare function SelectScrollUpButton({ className, ...props }: React_2.ComponentProps<typeof Select_2.ScrollUpButton>): JSX.Element;

export declare function SelectSeparator({ className, ...props }: React_2.ComponentProps<typeof Select_2.Separator>): JSX.Element;

export declare function SelectTrigger({ className, children, size, ...props }: SelectTriggerProps): JSX.Element;

declare interface SelectTriggerProps extends React_2.ComponentProps<typeof Select_2.Trigger>, VariantProps<typeof selectTriggerVariants> {
}

declare const selectTriggerVariants: (props?: ({
    size?: "lg" | "md" | "sm" | "xs" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function SelectValue({ ...props }: React_2.ComponentProps<typeof Select_2.Value>): JSX.Element;

export declare function Separator({ className, orientation, decorative, ...props }: React_2.ComponentProps<typeof Separator_2.Root>): JSX.Element;

export { SetStateFn }

export declare function Sheet({ ...props }: React_2.ComponentProps<typeof Dialog_2.Root>): JSX.Element;

export declare function SheetBody({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function SheetClose({ ...props }: React_2.ComponentProps<typeof Dialog_2.Close>): JSX.Element;

export declare function SheetContent({ side, overlay, close, className, children, ...props }: React_2.ComponentProps<typeof Dialog_2.Content> & SheetContentProps): JSX.Element;

declare interface SheetContentProps extends React_2.ComponentProps<typeof Dialog_2.Content>, VariantProps<typeof sheetVariants> {
    overlay?: boolean;
    close?: boolean;
}

export declare function SheetDescription({ className, ...props }: React_2.ComponentProps<typeof Dialog_2.Description>): JSX.Element;

export declare function SheetFooter({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function SheetHeader({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function SheetOverlay({ className, ...props }: React_2.ComponentProps<typeof Dialog_2.Overlay>): JSX.Element;

export declare function SheetPortal({ ...props }: React_2.ComponentProps<typeof Dialog_2.Portal>): JSX.Element;

export declare function SheetTitle({ className, ...props }: React_2.ComponentProps<typeof Dialog_2.Title>): JSX.Element;

export declare function SheetTrigger({ ...props }: React_2.ComponentProps<typeof Dialog_2.Trigger>): JSX.Element;

declare const sheetVariants: (props?: ({
    side?: "left" | "right" | "top" | "bottom" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function ShimmeringText({ text, duration, delay, repeat, repeatDelay, className, startOnView, once, inViewMargin, spread, color, shimmerColor, }: ShimmeringTextProps): JSX.Element;

declare interface ShimmeringTextProps {
    /** Text to display with shimmer effect */
    text: string;
    /** Animation duration in seconds */
    duration?: number;
    /** Delay before starting animation */
    delay?: number;
    /** Whether to repeat the animation */
    repeat?: boolean;
    /** Pause duration between repeats in seconds */
    repeatDelay?: number;
    /** Custom className */
    className?: string;
    /** Whether to start animation when component enters viewport */
    startOnView?: boolean;
    /** Whether to animate only once */
    once?: boolean;
    /** Margin for in-view detection (rootMargin) */
    inViewMargin?: UseInViewOptions['margin'];
    /** Shimmer spread multiplier */
    spread?: number;
    /** Base text color */
    color?: string;
    /** Shimmer gradient color */
    shimmerColor?: string;
}

export declare function Sidebar({ side, variant, collapsible, className, children, ...props }: React_2.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
}): JSX.Element;

export declare function SidebarContent({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

declare type SidebarContextProps = {
    state: "expanded" | "collapsed";
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};

export declare function SidebarFooter({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function SidebarGroup({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function SidebarGroupAction({ className, asChild, ...props }: React_2.ComponentProps<"button"> & {
    asChild?: boolean;
}): JSX.Element;

export declare function SidebarGroupContent({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function SidebarGroupLabel({ className, asChild, ...props }: React_2.ComponentProps<"div"> & {
    asChild?: boolean;
}): JSX.Element;

export declare function SidebarHeader({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function SidebarInput({ className, ...props }: React_2.ComponentProps<typeof Input>): JSX.Element;

export declare function SidebarInset({ className, ...props }: React_2.ComponentProps<"main">): JSX.Element;

export declare function SidebarMenu({ className, ...props }: React_2.ComponentProps<"ul">): JSX.Element;

export declare function SidebarMenuAction({ className, asChild, showOnHover, ...props }: React_2.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
}): JSX.Element;

export declare function SidebarMenuBadge({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function SidebarMenuButton({ asChild, isActive, variant, size, tooltip, className, ...props }: React_2.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React_2.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>): JSX.Element;

declare const sidebarMenuButtonVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "lg" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function SidebarMenuItem({ className, ...props }: React_2.ComponentProps<"li">): JSX.Element;

export declare function SidebarMenuSkeleton({ className, showIcon, ...props }: React_2.ComponentProps<"div"> & {
    showIcon?: boolean;
}): JSX.Element;

export declare function SidebarMenuSub({ className, ...props }: React_2.ComponentProps<"ul">): JSX.Element;

export declare function SidebarMenuSubButton({ asChild, size, isActive, className, ...props }: React_2.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
}): JSX.Element;

export declare function SidebarMenuSubItem({ className, ...props }: React_2.ComponentProps<"li">): JSX.Element;

export declare function SidebarProvider({ defaultOpen, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }: React_2.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}): JSX.Element;

export declare function SidebarRail({ className, ...props }: React_2.ComponentProps<"button">): JSX.Element;

export declare function SidebarSeparator({ className, ...props }: React_2.ComponentProps<typeof Separator>): JSX.Element;

export declare function SidebarTrigger({ className, onClick, ...props }: React_2.ComponentProps<typeof Button>): JSX.Element;

export declare function Skeleton({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function Slider({ className, children, ...props }: React_2.ComponentProps<typeof Slider_2.Root>): JSX.Element;

export declare function SliderThumb({ className, ...props }: React_2.ComponentProps<typeof Slider_2.Thumb>): JSX.Element;

export declare function SlidingNumber({ from, to, duration, delay, startOnView, once, className, onComplete, digitHeight, }: SlidingNumberProps): JSX.Element;

declare interface SlidingNumberProps {
    from: number;
    to: number;
    duration?: number;
    delay?: number;
    startOnView?: boolean;
    once?: boolean;
    className?: string;
    onComplete?: () => void;
    digitHeight?: number;
}

export declare function Sortable<T>({ value, onValueChange, getItemValue, children, className, onMove, strategy, onDragStart, onDragEnd, }: SortableRootProps<T>): JSX.Element;

export declare function SortableItem({ value, asChild, className, children, disabled }: SortableItemProps): JSX.Element;

export declare function SortableItemHandle({ asChild, className, children, cursor }: SortableItemHandleProps): JSX.Element;

declare interface SortableItemHandleProps {
    asChild?: boolean;
    className?: string;
    children?: React_2.ReactNode;
    cursor?: boolean;
}

declare interface SortableItemProps {
    value: string;
    asChild?: boolean;
    className?: string;
    children: React_2.ReactNode;
    disabled?: boolean;
}

declare interface SortableRootProps<T> {
    value: T[];
    onValueChange: (value: T[]) => void;
    getItemValue: (item: T) => string;
    children: React_2.ReactNode;
    className?: string;
    onMove?: (event: {
        event: DragEndEvent;
        activeIndex: number;
        overIndex: number;
    }) => void;
    strategy?: 'horizontal' | 'vertical' | 'grid';
    onDragStart?: (event: DragStartEvent) => void;
    onDragEnd?: (event: DragEndEvent) => void;
}

declare type StepIndicators = {
    active?: React_2.ReactNode;
    completed?: React_2.ReactNode;
    inactive?: React_2.ReactNode;
    loading?: React_2.ReactNode;
};

declare interface StepItemContextValue {
    step: number;
    state: StepState;
    isDisabled: boolean;
    isLoading: boolean;
}

export declare function Stepper({ defaultValue, value, onValueChange, orientation, className, children, indicators, ...props }: StepperProps): JSX.Element;

export declare function StepperContent({ value, forceMount, children, className }: StepperContentProps): JSX.Element | null;

export declare interface StepperContentProps extends React_2.ComponentProps<'div'> {
    value: number;
    forceMount?: boolean;
}

declare interface StepperContextValue {
    activeStep: number;
    setActiveStep: (step: number) => void;
    stepsCount: number;
    orientation: StepperOrientation;
    registerTrigger: (node: HTMLButtonElement | null) => void;
    triggerNodes: HTMLButtonElement[];
    focusNext: (currentIdx: number) => void;
    focusPrev: (currentIdx: number) => void;
    focusFirst: () => void;
    focusLast: () => void;
    indicators: StepIndicators;
}

export declare function StepperDescription({ children, className }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function StepperIndicator({ children, className }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function StepperItem({ step, completed, disabled, loading, className, children, ...props }: StepperItemProps): JSX.Element;

export declare interface StepperItemProps extends React_2.HTMLAttributes<HTMLDivElement> {
    step: number;
    completed?: boolean;
    disabled?: boolean;
    loading?: boolean;
}

export declare function StepperNav({ children, className }: React_2.ComponentProps<'nav'>): JSX.Element;

declare type StepperOrientation = 'horizontal' | 'vertical';

export declare function StepperPanel({ children, className }: React_2.ComponentProps<'div'>): JSX.Element;

export declare interface StepperProps extends React_2.HTMLAttributes<HTMLDivElement> {
    defaultValue?: number;
    value?: number;
    onValueChange?: (value: number) => void;
    orientation?: StepperOrientation;
    indicators?: StepIndicators;
}

export declare function StepperSeparator({ className }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function StepperTitle({ children, className }: React_2.ComponentProps<'h3'>): JSX.Element;

export declare function StepperTrigger({ asChild, className, children, tabIndex, ...props }: StepperTriggerProps): JSX.Element;

export declare interface StepperTriggerProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
}

declare type StepState = 'active' | 'completed' | 'inactive' | 'loading';

export declare function Switch({ className, thumbClassName, shape, size, ...props }: React_2.ComponentProps<typeof Switch_2.Root> & VariantProps<typeof switchVariants> & {
    thumbClassName?: string;
}): JSX.Element;

export declare function SwitchIndicator({ className, state, ...props }: React_2.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof switchIndicatorVariants>): JSX.Element;

declare const switchIndicatorVariants: (props?: ({
    state?: "off" | "on" | null | undefined;
    permanent?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

declare const switchVariants: (props?: ({
    shape?: "square" | "pill" | null | undefined;
    size?: "lg" | "md" | "sm" | "xl" | null | undefined;
    permanent?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare function SwitchWrapper({ className, children, permanent, ...props }: React_2.HTMLAttributes<HTMLDivElement> & {
    permanent?: boolean;
}): JSX.Element;

export { syncDataLoaderFeature }

export { SyncDataLoaderFeatureDef }

export declare function Table({ className, ...props }: React_2.HTMLAttributes<HTMLTableElement>): JSX.Element;

export declare function TableBody({ className, ...props }: React_2.HTMLAttributes<HTMLTableSectionElement>): JSX.Element;

export declare function TableCaption({ className, ...props }: React_2.HTMLAttributes<HTMLTableCaptionElement>): JSX.Element;

export declare function TableCell({ className, ...props }: React_2.TdHTMLAttributes<HTMLTableCellElement>): JSX.Element;

export declare function TableFooter({ className, ...props }: React_2.HTMLAttributes<HTMLTableSectionElement>): JSX.Element;

export declare function TableHead({ className, ...props }: React_2.ThHTMLAttributes<HTMLTableCellElement>): JSX.Element;

export declare function TableHeader({ className, ...props }: React_2.HTMLAttributes<HTMLTableSectionElement>): JSX.Element;

export declare function TableRow({ className, ...props }: React_2.HTMLAttributes<HTMLTableRowElement>): JSX.Element;

export declare function Tabs({ className, ...props }: React_2.ComponentProps<typeof Tabs_2.Root>): JSX.Element;

export declare function TabsContent({ className, variant, ...props }: React_2.ComponentProps<typeof Tabs_2.Content> & VariantProps<typeof tabsContentVariants>): JSX.Element;

declare const tabsContentVariants: (props?: ({
    variant?: "default" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function TabsList({ className, variant, shape, size, ...props }: React_2.ComponentProps<typeof Tabs_2.List> & VariantProps<typeof tabsListVariants>): JSX.Element;

declare const tabsListVariants: (props?: ({
    variant?: "default" | "button" | "line" | null | undefined;
    shape?: "default" | "pill" | null | undefined;
    size?: "lg" | "md" | "sm" | "xs" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function TabsTrigger({ className, ...props }: React_2.ComponentProps<typeof Tabs_2.Trigger>): JSX.Element;

export declare function Textarea({ className, variant, ...props }: React_2.ComponentProps<'textarea'> & VariantProps<typeof textareaVariants>): JSX.Element;

export declare const textareaVariants: (props?: ({
    variant?: "lg" | "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function TextReveal({ children, variant, className, style, delay, duration, staggerDelay, once, startOnView, wordLevel, }: TextRevealProps): JSX.Element;

declare interface TextRevealProps {
    children: string;
    variant?: RevealVariant;
    className?: string;
    style?: default_3.CSSProperties;
    delay?: number;
    duration?: number;
    staggerDelay?: number;
    once?: boolean;
    startOnView?: boolean;
    wordLevel?: boolean;
    onComplete?: () => void;
}

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};

export { toast }

export declare const Toaster: ({ ...props }: ToasterProps) => JSX.Element;

declare type ToasterProps = React_2.ComponentProps<typeof Toaster_2>;

export declare function Toggle({ className, variant, size, ...props }: React_2.ComponentProps<typeof Toggle_2.Root> & VariantProps<typeof toggleVariants>): JSX.Element;

export declare function ToggleGroup({ className, variant, size, children, ...props }: React_2.ComponentProps<typeof ToggleGroup_2.Root> & VariantProps<typeof toggleVariants>): JSX.Element;

export declare function ToggleGroupItem({ className, children, variant, size, ...props }: React_2.ComponentProps<typeof ToggleGroup_2.Item> & VariantProps<typeof toggleVariants>): JSX.Element;

declare type ToggleIconType = 'chevron' | 'plus-minus';

export declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "lg" | "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Tooltip({ ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Root>): JSX.Element;

export declare function TooltipContent({ className, sideOffset, children, ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Content>): JSX.Element;

export declare function TooltipProvider({ delayDuration, ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Provider>): JSX.Element;

export declare function TooltipTrigger({ ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Trigger>): JSX.Element;

export declare function Tree({ indent, tree, className, toggleIconType, ...props }: TreeProps): JSX.Element;

export { TreeConfig }

export { TreeDataLoader }

export declare function TreeDragLine({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX.Element | null;

export { TreeFeatureDef }

export { TreeInstance }

export { TreeInstanceOpts }

export declare function TreeItem<T = any>({ item, className, asChild, children, ...props }: Omit<TreeItemProps<T>, 'indent'>): JSX.Element;

export { TreeItemDataRef }

export declare function TreeItemLabel<T = any>({ item: propItem, children, className, ...props }: TreeItemLabelProps<T>): JSX.Element | null;

declare interface TreeItemLabelProps<T = any> extends React_2.HTMLAttributes<HTMLSpanElement> {
    item?: ItemInstance<T>;
}

declare interface TreeItemProps<T = any> extends React_2.HTMLAttributes<HTMLButtonElement> {
    item: ItemInstance<T>;
    indent?: number;
    asChild?: boolean;
}

declare interface TreeProps extends React_2.HTMLAttributes<HTMLDivElement> {
    indent?: number;
    tree?: any;
    toggleIconType?: ToggleIconType;
}

export { TreeState }

export declare function TypingText({ text, texts, speed, delay, showCursor, cursorClassName, cursor, loop, pauseDuration, className, onComplete, startOnView, once, inViewMargin, ...props }: TypingTextProps): JSX.Element;

declare interface TypingTextProps extends Omit<MotionProps, 'children'> {
    /** Text to animate */
    text?: string;
    /** Array of texts to cycle through */
    texts?: string[];
    /** Typing speed in milliseconds */
    speed?: number;
    /** Delay before starting animation */
    delay?: number;
    /** Whether to show cursor */
    showCursor?: boolean;
    /** Cursor character */
    cursor?: string;
    /** Cursor className */
    cursorClassName?: string;
    /** Whether to loop through texts */
    loop?: boolean;
    /** Pause duration between loops */
    pauseDuration?: number;
    /** Custom className */
    className?: string;
    /** Callback when typing completes */
    onComplete?: () => void;
    /** Whether to start animation when component enters viewport */
    startOnView?: boolean;
    /** Whether to animate only once */
    once?: boolean;
    /** The animation preset to use */
    animation?: AnimationVariant;
    /** Margin for in-view detection (rootMargin) */
    inViewMargin?: UseInViewOptions['margin'];
}

export { Updater }

declare type UseCarouselParameters = Parameters<typeof default_2>;

export declare function useDataGrid(): DataGridContextProps<any>;

export declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: FieldError;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};

export declare function useSidebar(): SidebarContextProps;

export declare function useStepItem(): StepItemContextValue;

export declare function useStepper(): StepperContextValue;

export { useTree }

export { }


declare module '@tanstack/react-table' {
    interface ColumnMeta<TData extends RowData, TValue> {
        headerTitle?: string;
        headerClassName?: string;
        cellClassName?: string;
        skeleton?: ReactNode;
        expandedContent?: (row: TData) => ReactNode;
    }
}
