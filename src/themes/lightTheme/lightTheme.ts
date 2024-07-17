import { DefaultTheme, MD3Theme } from "react-native-paper";
import { colors } from "./palette";

export const lightTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        ...colors,
    },
};
