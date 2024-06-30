import { IsUnion } from "./types";

type UnionTypeError =
  "Error: You need to ensure all values within one variant are of the same type.";
type NoRecordError =
  "Error: You need to ensure the variant is an object (a record).";

/**
 * This type is the expected input value of a variant singleton.
 */
type VariantSingletonInput<T> =
  T extends Record<string, infer U>
    ? IsUnion<U> extends true
      ? UnionTypeError
      : T
    : NoRecordError;

/**
 * This type is the expected output value of a variant singleton when it will be injected into the core module.
 *
 * TODO: Add a new function that will accept a pre-defined type for singleton to deal with typing edge cases.
 */
type VariantSingletonOutput<T> =
  T extends Record<string, infer U>
    ? IsUnion<U> extends true
      ? UnionTypeError
      : Record<keyof T, U>
    : NoRecordError;

/**
 * This type is the expected output value of a variant singleton when it will be outputted to the response.
 */
type VariantSingletonValue<T> =
  T extends Record<string, infer U>
    ? IsUnion<U> extends true
      ? never
      : U
    : never;

/**
 * Singleton function is used to override the default type enforcement to your own type.
 * This function will give you an object that you can call `use` to inject your variant singleton with custom type.
 *
 * Usage:
 * ```ts
 * // Inject your custom type and put your type-safe variant singleton into dots.
 * singleton<CustomPayloadType>.use({ ... });
 * ```
 */
function singleton<Singleton>() {
  function singletonModifier<V extends Record<string, Singleton>>(
    selfDefinedSingleton: Record<keyof V, Singleton>,
  ): Record<keyof V, Singleton> {
    return selfDefinedSingleton;
  }
  return { use: singletonModifier };
}

/**
 * Combines multiple variants singleton into all variants.
 */
type CompoundedVariantsSchema<T> = {
  [K in keyof T]: VariantSingletonInput<T[K]>;
};

type CompoundedVariantsOutput<T> = {
  [K in keyof T]: VariantSingletonValue<T[K]>;
};

type SVDProps<Schema> = {
  [K in keyof Schema]: keyof Schema[K];
};

type StylingVarianceDecompositionParams<Schema> = {
  variants: CompoundedVariantsSchema<Schema>;
  defaultVariants: SVDProps<Schema>;
};

type StylingVarianceDecomposition<Schema> = (
  _: Partial<SVDProps<Schema>>,
) => CompoundedVariantsOutput<Schema>;

/**
 * [SVDM] Styling Variance Decomposition Module. This function takes your configuration of variants,
 * and gives you a function that will decompose the variants props into the final styling.
 *
 * @param params - The configuration of variants.
 */
function svd<Variants>(
  params: StylingVarianceDecompositionParams<Variants>,
): StylingVarianceDecomposition<Variants> {
  return (props: Partial<SVDProps<Variants>>) => {
    const keys = Object.keys(params.variants);
    const output: Partial<CompoundedVariantsOutput<Variants>> = {};
    for (const key of keys) {
      const typedKey = key as keyof Variants;
      const variant = (props[typedKey] ||
        params.defaultVariants[
          typedKey
        ]) as keyof CompoundedVariantsSchema<Variants>[keyof Variants];
      output[key] = params.variants[typedKey][variant];
    }
    return output as CompoundedVariantsOutput<Variants>;
  };
}

export { svd, singleton };
export type { SVDProps };
