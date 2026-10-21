import * as React from "react";
import { Menubar as MenubarPrimitive } from "radix-ui";

import { useV4PortalContainer } from "@app/components/v4/scope";

import { ListHighlight } from "../lib/list-highlight";
import { cn } from "../lib/utils";
import { Icon } from "./icon";
import { menuRowContent, menuShortcutContent } from "./menu-content";

import controlStyles from "./controls.module.css";
import menu from "./menu.module.css";

function Menubar({ className, ref, ...props }: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      ref={ref}
      data-slot="menubar"
      className={cn("flex items-center rounded-lg border border-[color:var(--v4-line)]", className)}
      {...props}
    />
  );
}
Menubar.displayName = "Menubar";

function MenubarMenu({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
}

function MenubarGroup({ ref, ...props }: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group ref={ref} data-slot="menubar-group" {...props} />;
}
MenubarGroup.displayName = "MenubarGroup";

function MenubarPortal({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return (
    <MenubarPrimitive.Portal
      container={useV4PortalContainer()}
      data-slot="menubar-portal"
      {...props}
    />
  );
}

function MenubarRadioGroup({
  ref,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup ref={ref} data-slot="menubar-radio-group" {...props} />;
}
MenubarRadioGroup.displayName = "MenubarRadioGroup";

function MenubarTrigger({
  className,
  ref,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      ref={ref}
      data-slot="menubar-trigger"
      className={cn(
        controlStyles.focusOutline,
        "flex items-center rounded-sm px-1.5 py-[2px] select-none hover:bg-[color:var(--v4-action-ghost-hover)] aria-expanded:bg-[color:var(--v4-action-ghost-hover)]",
        className
      )}
      {...props}
    />
  );
}
MenubarTrigger.displayName = "MenubarTrigger";

function MenubarContent({
  className,
  children,
  collisionPadding = 8,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ref,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        ref={ref}
        data-slot="menubar-content"
        collisionPadding={collisionPadding}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn("z-50", menu.surface, menu.panel, menu.inset, menu.motion, className)}
        data-scroll-fade="y"
        {...props}
      >
        {children}
        <ListHighlight />
      </MenubarPrimitive.Content>
    </MenubarPortal>
  );
}
MenubarContent.displayName = "MenubarContent";

function MenubarItem({
  className,
  inset,
  variant = "default",
  children,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
} & { ref?: React.Ref<React.ComponentRef<typeof MenubarPrimitive.Item>> }) {
  return (
    <MenubarPrimitive.Item
      ref={ref}
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(menu.row, className)}
      {...props}
    >
      {menuRowContent(children)}
    </MenubarPrimitive.Item>
  );
}
MenubarItem.displayName = "MenubarItem";

function MenubarCheckboxItem({
  className,
  children,
  checked,
  inset,
  onSelect,
  closeOnSelect = false,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem> & {
  closeOnSelect?: boolean;
} & {
  inset?: boolean;
} & { ref?: React.Ref<React.ComponentRef<typeof MenubarPrimitive.CheckboxItem>> }) {
  return (
    <MenubarPrimitive.CheckboxItem
      ref={ref}
      data-slot="menubar-checkbox-item"
      data-inset={inset}
      className={cn(menu.row, className)}
      checked={checked}
      {...props}
      onSelect={(event) => {
        onSelect?.(event);
        if (!closeOnSelect) event.preventDefault();
      }}
    >
      <span className={menu.indicator}>
        <MenubarPrimitive.ItemIndicator>
          <Icon name="check" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {menuRowContent(children)}
    </MenubarPrimitive.CheckboxItem>
  );
}
MenubarCheckboxItem.displayName = "MenubarCheckboxItem";

function MenubarRadioItem({
  className,
  children,
  inset,
  onSelect,
  closeOnSelect = false,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem> & {
  closeOnSelect?: boolean;
} & {
  inset?: boolean;
} & { ref?: React.Ref<React.ComponentRef<typeof MenubarPrimitive.RadioItem>> }) {
  return (
    <MenubarPrimitive.RadioItem
      ref={ref}
      data-slot="menubar-radio-item"
      data-inset={inset}
      className={cn(menu.row, className)}
      {...props}
      onSelect={(event) => {
        onSelect?.(event);
        if (!closeOnSelect) event.preventDefault();
      }}
    >
      <span className={menu.indicator}>
        <MenubarPrimitive.ItemIndicator>
          <Icon name="check" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {menuRowContent(children)}
    </MenubarPrimitive.RadioItem>
  );
}
MenubarRadioItem.displayName = "MenubarRadioItem";

function MenubarLabel({
  className,
  inset,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
  inset?: boolean;
} & { ref?: React.Ref<React.ComponentRef<typeof MenubarPrimitive.Label>> }) {
  return (
    <MenubarPrimitive.Label
      ref={ref}
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(menu.label, className)}
      {...props}
    />
  );
}
MenubarLabel.displayName = "MenubarLabel";

function MenubarSeparator({
  className,
  ref,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      ref={ref}
      data-slot="menubar-separator"
      className={cn(menu.separator, className)}
      {...props}
    />
  );
}
MenubarSeparator.displayName = "MenubarSeparator";

function MenubarShortcut({ className, children, ref, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      ref={ref}
      data-slot="menubar-shortcut"
      className={cn(menu.shortcut, className)}
      {...props}
    >
      {menuShortcutContent(children)}
    </span>
  );
}
MenubarShortcut.displayName = "MenubarShortcut";

function MenubarSub({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean;
} & { ref?: React.Ref<React.ComponentRef<typeof MenubarPrimitive.SubTrigger>> }) {
  return (
    <MenubarPrimitive.SubTrigger
      ref={ref}
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(menu.row, className)}
      {...props}
    >
      {menuRowContent(children)}
      <Icon name="chev-right" className={menu.trail} />
    </MenubarPrimitive.SubTrigger>
  );
}
MenubarSubTrigger.displayName = "MenubarSubTrigger";

function MenubarSubContent({
  className,
  children,
  collisionPadding = 8,
  ref,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      ref={ref}
      data-slot="menubar-sub-content"
      collisionPadding={collisionPadding}
      className={cn("z-50", menu.surface, menu.panel, menu.sub, menu.inset, menu.motion, className)}
      data-scroll-fade="y"
      {...props}
    >
      {children}
      <ListHighlight />
    </MenubarPrimitive.SubContent>
  );
}
MenubarSubContent.displayName = "MenubarSubContent";

export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
};
