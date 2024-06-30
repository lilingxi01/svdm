---
title: TypeScript
description: Multi-Dimensional Styling Variance Decomposition System
---

SVDM is battery-included with TypeScript support. This means that you can use SVDM with TypeScript to enforce schema and type checking without any configuration, and it is designed to work with TypeScript for its full potential.

This document will guide you through what you can expect from SVDM when messing up with the types, and how our typing system works.

## Schema Enforcement

Let's get started with a very simple example. We have one variant called `variant` and it has two variations: `primary` and `secondary`.

```typescript
import { svd } from 'svdm';

const variants = svd({
  variants: {
    variant: {
      primary: 'text-primary',
      secondary: 'text-secondary',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
```

In this example, if we change the value of the secondary variance to a number, it will throw a TypeScript typing error that warns you about the type mismatch.

```typescript {7-8}
import { svd } from 'svdm';

const variants = svd({
  variants: {
    variant: {
      primary: 'text-primary',
      // This will throw a TypeScript error about the type mismatch.
      secondary: 4,
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
```

Same thing happens for nested objects as well. By default, we expect that all the variations of a variant should have the same type. If you try to assign a different type to a variation, TypeScript will throw an error.

```typescript {10-14}
import { svd } from 'svdm';

const variants = svd({
  variants: {
    variant: {
      primary: {
        base: 'bg-primary hover:bg-primary-11',
        disabled: 'bg-primary-8',
      },
      // This will throw a TypeScript error about the type mismatch.
      // The key `disabled` cannot be found.
      secondary: {
        base: 'bg-primary hover:bg-primary-11',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
```
