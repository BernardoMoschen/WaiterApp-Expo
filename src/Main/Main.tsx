import React, { useState } from "react";
import { Text, Button, Categories, Header, Menu } from "../components";
import {
    CategoriesContainer,
    Container,
    Footer,
    FooterContainer,
    MenuContainer,
} from "./styles";
import { TableModal } from "../components/TableModal/TableModal";

export const Main = () => {
    const [isTableModalVisible, setIsTableModalVisible] = useState(false);

    return (
        <>
            <Container>
                <Header />
                <CategoriesContainer>
                    <Categories />
                </CategoriesContainer>
                <MenuContainer>
                    <Menu />
                </MenuContainer>
            </Container>
            <Footer>
                <FooterContainer>
                    <Button onPress={() => setIsTableModalVisible(true)}>
                        Novo Pedido
                    </Button>
                </FooterContainer>
            </Footer>
            <TableModal
                visible={isTableModalVisible}
                onClose={() => setIsTableModalVisible(false)}
            />
        </>
    );
};
