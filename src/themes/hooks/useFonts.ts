import { useFonts } from "expo-font";

export const useProximaNova = () => {
    const [isFontsLoaded] = useFonts({
        ProximaNovaLight: require("../assets/proximaNovaLight.woff2"),
        ProximaNovaRegular: require("../assets/proximaNovaRegular.woff2"),
        ProximaNovaMedium: require("../assets/proximaNovaMedium.woff2"),
        ProximaNovaSemiBold: require("../assets/proximaNovaSemiBold.woff2"),
        ProximaNovaBold: require("../assets/proximaNovaBold.woff2"),
        ProximaNovaBlack: require("../assets/proximaNovaBlack.woff2"),
    });

    return { isFontsLoaded };
};
