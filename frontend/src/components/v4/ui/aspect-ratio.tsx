"use client";

import * as React from "react";
import { AspectRatio as AspectRatioPrimitive } from "radix-ui";

function AspectRatio({ ref, ...props }: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root ref={ref} data-slot="aspect-ratio" {...props} />;
}
AspectRatio.displayName = "AspectRatio";

export { AspectRatio };
