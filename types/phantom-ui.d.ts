import type { PhantomUiAttributes } from "@aejkatappaja/phantom-ui";

type ExtendedPhantomUiAttributes = PhantomUiAttributes & {
  suppressHydrationWarning?: boolean;
};

declare module "react/jsx-runtime" {
  export namespace JSX {
    interface IntrinsicElements {
      "phantom-ui": ExtendedPhantomUiAttributes;
    }
  }
}
