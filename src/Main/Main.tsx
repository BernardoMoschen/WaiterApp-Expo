import React from "react";
import { Text } from "../components/Text";
import {
    CategoriesContainer,
    Container,
    Footer,
    MenuContainer,
} from "./styles";
import { Header } from "../components/Header/Header";

export const Main = () => {
    return (
        <>
            <Container>
                <Header />
                <CategoriesContainer />
                <MenuContainer />
            </Container>
            <Footer />
        </>
    );
};
