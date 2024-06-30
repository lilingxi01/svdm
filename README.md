![Cover](https://imagedelivery.net/Dr98IMl5gQ9tPkFM5JRcng/6be57b6f-97d1-41ac-bce6-07750a204900/Ultra)

# SVDM Monorepo

Checkout full documents: https://svdm.dev/

## What is SVDM?

**SVDM** (**S**tyling **V**ariance **D**ecomposition **M**odule) is a multi-dimensional styling variance decomposition system in TypeScript that allows you to define and manage style variations in a structured and scalable way. This module comes extremely handy when:

- you are building a complex design system with variations that affect multiple components or tags,
- you are working on a high-quality UI component library that has put so much effort on design details,
- or you are tired of defining config definition typings again and again.

This module is highly inspired by [CVA](https://cva.style/docs) (Class Variance Authority), and is mainly aimed to resolve the complex scenarios that CVA cannot handle, while having backward compatibility with the core functionality of CVA.

Part of the reason why I name it SVDM is because of SVD (Singular Value Decomposition), which simplifies the complex matrix decomposition. Similarly, SVDM is designed to simplify the complex variance decomposition through a structured way in complex yet standardized UI implementations. But please keep in mind that SVDM is not related to SVD in any mathematical sense.

## Installation

It is easy to install SVDM. You can install it via npm, yarn, pnpm, or any other package manager.

```bash
npm install svdm
```

## How to Use SVDM?

This is an example of how you can use SVDM to define advanced variances for your components. More examples can be found in the [documentation](https://svdm.dev/).

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

Alternatively, you can use it just like CVA:

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

Have you observed the difference? SVDM allows you to define an object for each variance, which is much more powerful than CVA. However, you can still use it just like CVA if you prefer (for future scalability considerations).

We have a full set of TypeScript typings to help you be more productive and avoid runtime errors. If you try to assign different types to different variations of a variant, TypeScript will throw an error. This is a great way to ensure consistent typing across variances. Read more about this in the [documentation](https://svdm.dev/).
