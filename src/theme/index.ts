import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#2d6a4f",
      600: "#1b4332",
      700: "#143326",
      800: "#0d2818",
      900: "#081c11",
    },
    earth: {
      50: "#fef7ee",
      100: "#fdecd7",
      200: "#fad5ae",
      300: "#f6b87a",
      400: "#f19144",
      500: "#ee7722",
      600: "#df5d18",
      700: "#b94616",
      800: "#933819",
      900: "#773018",
    },
    terra: {
      50: "#fdf8f6",
      100: "#f2e8e5",
      200: "#eaddd7",
      300: "#e0cec7",
      400: "#d2bab0",
      500: "#bfa094",
      600: "#a18072",
      700: "#886358",
      800: "#6f4f43",
      900: "#5a3f36",
    },
    leaf: {
      50: "#f4fdf4",
      100: "#e6f7e6",
      200: "#c2ecc2",
      300: "#8eda8e",
      400: "#55c455",
      500: "#2d9a2d",
      600: "#1f7a1f",
      700: "#1a611a",
      800: "#174d17",
      900: "#143f14",
    },
    cream: "#faf8f5",
    sand: "#f5f0e8",
    soil: "#3d2b1f",
  },
  fonts: {
    heading: `'Inter', system-ui, -apple-system, sans-serif`,
    body: `'Inter', system-ui, -apple-system, sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "cream",
        color: "soil",
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "brand",
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: "white",
          borderRadius: "xl",
          boxShadow: "sm",
          border: "1px solid",
          borderColor: "terra.100",
        },
      },
    },
    Select: {
      defaultProps: {
        focusBorderColor: "brand.500",
      },
    },
  },
});

export default theme;
