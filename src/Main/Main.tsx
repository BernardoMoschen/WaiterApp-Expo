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
import { Cart } from "../components/Cart/Cart";
import { CartItem } from "../types/CartItem";
import { products } from "../mocks/products";

export const Main = () => {
    const [tableNumber, setTableNumber] = useState("");
    const [isTableModalVisible, setIsTableModalVisible] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            quantity: 2,
            product: products.at(1),
        },
        {
            quantity: 1,
            product: products.at(0),
        },
    ]);

    const handleCancelOrder = () => {
        setTableNumber("");
    };

    const handleSaveTable = (selectedTable: string) => {
        setTableNumber(selectedTable);
        setIsTableModalVisible(false);
    };

    return (
        <>
            <Container>
                <Header
                    selectedTable={tableNumber}
                    onCancelOrder={handleCancelOrder}
                />
                <CategoriesContainer>
                    <Categories />
                </CategoriesContainer>
                <MenuContainer>
                    <Menu />
                </MenuContainer>
            </Container>
            <Footer>
                <FooterContainer>
                    {!tableNumber && (
                        <Button onPress={() => setIsTableModalVisible(true)}>
                            Novo Pedido
                        </Button>
                    )}
                    {tableNumber && <Cart cart={cartItems} />}
                </FooterContainer>
            </Footer>
            <TableModal
                visible={isTableModalVisible}
                onSave={handleSaveTable}
                onClose={() => setIsTableModalVisible(false)}
            />
        </>
    );
};
