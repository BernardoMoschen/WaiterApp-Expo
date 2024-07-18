import { Main } from "./src/Main/Main";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { lightTheme } from "./src/themes/lightTheme/lightTheme";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerRouter } from "./src/components/Layout/Drawer/Drawer";

export default function App() {
    // const { isFontsLoaded } = useProximaNova();

    // if (!isFontsLoaded) {
    //     return null;
    // }

    return (
        <PaperProvider theme={lightTheme}>
            <NavigationContainer>
                <StatusBar style="dark" />
                <DrawerRouter />
            </NavigationContainer>
        </PaperProvider>
    );
}
