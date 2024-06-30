---
title: TypeScript & Types
description: Multi-Dimensional Styling Variance Decomposition System
---

SVDM is battery-included with TypeScript support. This means that you can use SVDM with TypeScript to enforce schema and type checking without any configuration, and it is designed to work with TypeScript for its full potential.

This document will guide you through what you can expect from SVDM when messing up with the types, and how our typing system works.

## Schema Enforcement

Let's get started with a very simple example. We have one variant called `variant` and it has two variations: `primary` and `secondary`.

```typescript
import { svd } from "svdm";

const variants = svd({
  variants: {
    variant: {
      primary: "text-primary",
      secondary: "text-secondary",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
```

In this example, if we change the value of the secondary variance to a number, it will throw a TypeScript typing error that warns you about the type mismatch.

```typescript {7-8}
import { svd } from "svdm";

const variants = svd({
  variants: {
    variant: {
      primary: "text-primary",
      // This will throw a TypeScript error about the type mismatch.
      secondary: 4,
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
```

Same thing happens for nested objects as well. By default, we expect that all the variations of a variant should have the same type. If you try to assign a different type to a variation, TypeScript will throw an error.

```typescript {10-14}
import { svd } from "svdm";

const variants = svd({
  variants: {
    variant: {
      primary: {
        base: "bg-primary hover:bg-primary-11",
        disabled: "bg-primary-8",
      },
      // This will throw a TypeScript error about the type mismatch.
      // The key `disabled` cannot be found.
      secondary: {
        base: "bg-primary hover:bg-primary-11",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
```

## Customized Singleton Typing

In some cases, you may want to have a optional types for a specific variation. You can achieve this by defining a custom type for that variation, so it won't automatically infer from the definition.

```typescript {1,4-8,12-13}
// You need an additional import `singleton` from `svdm`.
import { svd, singleton } from "svdm";

// Define your own type for explicit typing.
type CustomVariant = {
  title: string;
  subtitle?: string;
};

const variants = svd({
  variants: {
    // You need to use `singleton` function in this way!
    preset: singleton<CustomVariant>().use({
      greetings: {
        title: "Hello, World!",
        subtitle: "This is a subtitle",
      },
      briefings: {
        // The `subtitle` is optional in your type, so it won't throw an error.
        title: "Goodbye, World!",
      },
    }),
  },
  defaultVariants: {
    preset: "greetings",
  },
});
```

With this approach, you can define a custom type for a specific variation, and it will be enforced by TypeScript. The benefit? You don't have to define the framework of enforcing a config object to obey the type schema. SVDM will do it for you in a more concise way.
