---
title: SVDM
description: Multi-Dimensional Styling Variance Decomposition System
head:
  - tag: title
    content: SVDM - Styling Variance Decomposition Module
tableOfContents: false
---

![Cover](../../assets/cover.png)

:::caution
SVDM Documentation is still under development (partially finished). We are working hard to provide you with the best documentation.
:::

**SVDM** (**S**tyling **V**ariance **D**ecomposition **M**odule) is a multi-dimensional styling variance decomposition system in TypeScript that allows you to define and manage style variations in a structured and scalable way. This module comes extremely handy when:
- you are building a complex design system with variations that affect multiple components or tags,
- you are working on a high-quality UI component library that has put so much effort on design details,
- or you are tired of defining config definition typings again and again.

This module is highly inspired by [CVA](https://cva.style/docs) (Class Variance Authority), and is mainly aimed to resolve the complex scenarios that CVA cannot handle, while having backward compatibility with the core functionality of CVA.

Part of the reason why I name it SVDM is because of SVD (Singular Value Decomposition), which simplifies the complex matrix decomposition. Similarly, SVDM is designed to simplify the complex variance decomposition through a structured way in complex yet standardized UI implementations. But please keep in mind that SVDM is not related to SVD in any mathematical sense.

## TL;DR

- You should use SVDM if:
  - You are implementing a complex design system into consistent, reusable components.
  - You are building a high-quality UI component library that cares design details.
  - You are writing config definition typings repeatedly and want to make it cleaner.
- You get full type safety and type hinting in your IDE, without even defining the typings for most of the cases.
- You can use it not only on classes but also on any object-oriented approaches, such as nested classes (for complex variances), preset configs, inline styles, or even CSS-in-JS.

## How does SVDM work?

- Read [installation guide](logistics/installation) to install SVDM into your project.
- Read [why SVDM](logistics/why) to understand the motivation behind SVDM. This will help you better understand how you can utilize the full potential of SVDM.
- Read [use case snippets](logistics/use-case-snippets) to see how we use SVDM in our project to give you some inspiration.
- Read [TypeScript guide](logistics/typescript) to understand how SVDM works with TypeScript and how it enforces schema and type hinting.
- Check sidebar for more detailed documentation and usage examples.
