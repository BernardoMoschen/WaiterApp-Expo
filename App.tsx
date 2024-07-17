import { Main } from "./src/Main/Main";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { lightTheme } from "./src/themes/lightTheme/lightTheme";

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
