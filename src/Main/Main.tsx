import React from "react";
import { Text, Button, Categories, Header } from "../components";
import {
    CategoriesContainer,
    Container,
    Footer,
    FooterContainer,
    MenuContainer,
} from "./styles";

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
            <Footer>
                <FooterContainer>
                    <Button onPress={() => alert("NovoPedido")}>
                        Novo Pedido
                    </Button>
                </FooterContainer>
            </Footer>
        </>
    );
};
