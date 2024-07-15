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
import { Product } from "../types/Product";

export const Main = () => {
    const [tableNumber, setTableNumber] = useState("");
    const [isTableModalVisible, setIsTableModalVisible] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const handleResetOrder = () => {
        setTableNumber("");
        setCartItems([]);
    };

    const handleSaveTable = (selectedTable: string) => {
        setTableNumber(selectedTable);
        setIsTableModalVisible(false);
    };

    const handleAddToCart = (product: Product) => {
        if (!tableNumber) {
            setIsTableModalVisible(true);
        }
        setCartItems((prevState) => {
            const itemIndex = prevState.findIndex(
                (carItem) => carItem.product._id === product._id
            );
            if (itemIndex < 0) {
                return prevState.concat({
                    quantity: 1,
                    product,
                });
            }

            const newCart = [...prevState];
            const item = prevState.at(itemIndex);
            newCart[itemIndex] = {
                ...item,
                quantity: item.quantity + 1,
            };
            return newCart;
        });
    };

    const handleDecrementCart = (product: Product) => {
        setCartItems((prevState) => {
            const itemIndex = prevState.findIndex(
                (carItem) => carItem.product._id === product._id
            );
            const item = prevState[itemIndex];
            const newCart = [...prevState];

            if (item.quantity === 1) {
                newCart.splice(itemIndex, 1);
                return newCart;
            }
            newCart[itemIndex] = {
                ...item,
                quantity: item.quantity - 1,
            };
            return newCart;
        });
    };

    return (
        <>
            <Container>
                <Header
                    selectedTable={tableNumber}
                    onCancelOrder={handleResetOrder}
                />
                <CategoriesContainer>
                    <Categories />
                </CategoriesContainer>
                <MenuContainer>
                    <Menu onAddToCart={handleAddToCart} />
                </MenuContainer>
            </Container>
            <Footer>
                <FooterContainer>
                    {!tableNumber && (
                        <Button onPress={() => setIsTableModalVisible(true)}>
                            Novo Pedido
                        </Button>
                    )}
                    {tableNumber && (
                        <Cart
                            cart={cartItems}
                            onAdd={handleAddToCart}
                            onDecrement={handleDecrementCart}
                            onConfirmOrder={handleResetOrder}
                        />
                    )}
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
