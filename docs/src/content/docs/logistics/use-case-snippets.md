---
title: Use Case Snippets
description: Multi-Dimensional Styling Variance Decomposition System
---

For completed use cases, please refer to the **Usages** section in sidebar. There are multiple real-world examples that you can use as a reference.

## Advanced Variances

```typescript
import { svd } from "svdm";

const buttonVariants = svd({
  variants: {
    variant: {
      // The main difference from CVA is that you can define an object.
      // An object can do much more than a string!
      // We have type hints to ensure consistent typing across variances.
      // Such that `primary` and `secondary` must be the same type.
      primary: {
        base: "bg-primary hover:bg-primary-11 text-primary-1",
        disabled: "bg-primary-8 text-primary-1 cursor-not-allowed",
        loadingSpinner: "text-primary-1",
      },
      secondary: {
        base: "bg-secondary hover:bg-secondary-11 text-secondary-1",
        disabled: "bg-secondary-8 text-secondary-1 cursor-not-allowed",
        loadingSpinner: "text-secondary-1",
      },
      // And more as you define, such as tertiary, destructive, etc.
    },
    size: {
      small: "h-10 px-4",
      medium: "h-12 px-5",
      large: "h-14 px-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});
```

## Use it just like CVA

You don't have to define an object at all time. I know if some components have fairly simple structures, you may only need a string. That's when SVDM is backward compatible with CVA.

Our type hints will work perfectly with this simple structure as well, as it will infer the type of `string` for the output of `variant` key.

```typescript
import { svd } from "svdm";

const buttonVariants = svd({
  variants: {
    variant: {
      // We are using Radix Colors with Tailwind CSS.
      // Check `radix-colors-tailwind` package if you are interested.
      primary: "bg-primary hover:bg-primary-11 text-primary-1",
      secondary: "bg-secondary hover:bg-secondary-11 text-secondary-1",
    },
    size: {
      small: "h-10 px-4",
      medium: "h-12 px-5",
      large: "h-14 px-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});
```
