import { describe, expect, test } from "@jest/globals";
import { singleton, svd } from "../src";

describe("SVD Function", () => {
  const instance = svd({
    variants: {
      variant: {
        a: "a-output",
        b: "b-output",
      },
      size: {
        small: 1,
        medium: 2,
        large: 3,
      },
    },
    defaultVariants: {
      variant: "a",
      size: "small",
    },
  });
  // Test if the core picking functionality works.
  test("Core Functionality", () => {
    expect(instance({})).toEqual({ variant: "a-output", size: 1 });
    expect(instance({ variant: "b" })).toEqual({
      variant: "b-output",
      size: 1,
    });
    expect(instance({ size: "medium" })).toEqual({
      variant: "a-output",
      size: 2,
    });
    expect(instance({ variant: "b", size: "medium" })).toEqual({
      variant: "b-output",
      size: 2,
    });
  });
});

describe("SVD Function with Custom Singleton", () => {
  type CustomSingleton = {
    custom: string;
    nice?: number;
    yes?: boolean;
  };
  const instance = svd({
    variants: {
      variant: singleton<CustomSingleton>().use({
        primary: {
          custom: "custom-output",
          nice: 1,
          yes: true,
        },
        secondary: {
          custom: "custom-output",
        },
      }),
    },
    defaultVariants: {
      variant: "primary",
    },
  });
  test("Backward Compatibility", () => {
    expect(instance({}).variant).toEqual({
      custom: "custom-output",
      nice: 1,
      yes: true,
    });
    expect(instance({ variant: "primary" }).variant).toEqual({
      custom: "custom-output",
      nice: 1,
      yes: true,
    });
    expect(instance({ variant: "secondary" }).variant).toEqual({
      custom: "custom-output",
    });
  });
});
