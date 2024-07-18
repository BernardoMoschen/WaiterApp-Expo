import { View } from "react-native";
import { Container } from "../../components/Container/Container";
import { Plan } from "./components/Plan/Plan";
import { Bills } from "./components/Bills/Bills";
import { HaveFeedback } from "./components/HaveFeedback/HaveFeedback";
import { Carrousel } from "./components/Carrousel/Carrousel";

export const Home = () => (
    <Container>
        {/* <UsageShowcase /> */}
        <Plan />
        <Bills />
        <Carrousel />
        <HaveFeedback />
    </Container>
);
