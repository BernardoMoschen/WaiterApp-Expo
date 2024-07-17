import { useFonts } from "expo-font";
import { Main } from "./src/Main/Main";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { lightTheme } from "./src/themes/lightTheme/lightTheme";
import { useProximaNova } from "./src/themes/hooks/useFonts";
import { Text } from "./src/components";

declare module "@mui/material/styles" {
    interface Palette {
        theme: CustomPalette;
    }

    interface PaletteOptions {
        theme: CustomPalette;
    }

    interface TypographyVariants extends StylesEnhanced {}

    interface TypographyVariantsOptions extends Partial<StylesEnhanced> {}

    interface BreakpointOverrides {
        xxl: true;
    }
}

export default function App() {
    // const { isFontsLoaded } = useProximaNova();

    // if (!isFontsLoaded) {
    //     return null;
    // }

    return (
        <PaperProvider theme={lightTheme}>
            <StatusBar style="dark" />
            <Main />
        </PaperProvider>
    );
}
