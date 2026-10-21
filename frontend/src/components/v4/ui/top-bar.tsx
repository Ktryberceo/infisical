import * as React from "react";

import { cn } from "../lib/utils";
import { Breadcrumb, type BreadcrumbCrumb } from "./breadcrumb";

import styles from "./top-bar.module.css";

export function AppShell({
  className,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { ref?: React.Ref<HTMLDivElement> }) {
  return <div ref={ref} data-slot="app-shell" className={cn(styles.shell, className)} {...props} />;
}
AppShell.displayName = "AppShell";

export function AppInset({
  className,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<"main"> & { ref?: React.Ref<HTMLElement> }) {
  return (
    <main
      ref={ref}
      data-slot="app-inset"
      data-scroll-fade="y"
      className={cn(styles.inset, className)}
      {...props}
    />
  );
}
AppInset.displayName = "AppInset";

export function PageGutter({
  className,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={ref} data-slot="page-gutter" className={cn(styles.gutter, className)} {...props} />
  );
}
PageGutter.displayName = "PageGutter";

export type TopBarProps = Omit<React.ComponentPropsWithoutRef<"header">, "children"> & {
  breadcrumb: readonly BreadcrumbCrumb[];
  actions?: React.ReactNode;
  label?: string;
};

export function TopBar({
  breadcrumb,
  actions,
  label = "Location",
  className,
  ref,
  ...props
}: TopBarProps & { ref?: React.Ref<HTMLElement> }) {
  return (
    <header ref={ref} data-slot="top-bar" className={cn(styles.topBar, className)} {...props}>
      <Breadcrumb
        aria-label={label}
        variant="product"
        items={breadcrumb}
        className={styles.trail}
      />
      {actions && <div className={styles.actions}>{actions}</div>}
    </header>
  );
}
TopBar.displayName = "TopBar";
