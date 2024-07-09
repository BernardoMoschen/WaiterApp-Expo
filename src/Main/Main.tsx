import React from "react";
import { Text } from "../components/Text";
import {
    CategoriesContainer,
    Container,
    Footer,
    MenuContainer,
} from "./styles";
import { Header } from "../components/Header/Header";
import { Categories } from "../components/Categories/Categories";

export const Main = () => {
    return (
        <>
            <Container>
                <Header />
                <CategoriesContainer>
                    <Categories />
                </CategoriesContainer>
                <MenuContainer />
            </Container>
            <Footer />
        </>
    );
};
