---
title: Installation
description: Multi-Dimensional Styling Variance Decomposition System
---

It is easy to install SVDM. You can install it via npm, yarn, pnpm, or any other package manager.

```bash
npm install svdm
```

:::note
SVDM is following the [Semantic Versioning](https://semver.org/) standard. We will try to keep the API as stable as possible. However, we may introduce breaking changes in major versions. Please read changelogs before upgrading to a new major version.
:::

Once you have installed SVDM, you can import it into your project.

```typescript
// Please note that the function is called `svd` because "m" means module.
import { svd } from "svdm";
```

If you need type hints for component props, you can import the type as well.

```typescript
import type { SVDMProps } from "svdm";
```

Or you can import both at the same time.

```typescript
import { svd, SVDMProps } from "svdm";
```
