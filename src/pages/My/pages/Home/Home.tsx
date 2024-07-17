import { View } from "react-native";
import { Container } from "../../components/Container/Container";
import { Plan } from "./components/Plan/Plan";
import { Bills } from "./components/Bills/Bills";
import { HaveFeedback } from "./components/HaveFeedback/HaveFeedback";
import { NotFound } from "../../../NotFound/NotFound";

export const Home = () => (
    <Container
    // pageName="Home" eventName="home"
    >
        <View style={{ flex: 1 }}>
            {/* <UsageShowcase /> */}
            <Plan />
            <Bills />
            {/* <Carousel /> */}
            <HaveFeedback />
            {/* <NotFound /> */}
        </View>
    </Container>
);
