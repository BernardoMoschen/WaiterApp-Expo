import React, { useEffect, useState } from "react";
import { Button, Categories, Header, Menu, Text } from "../components";
import {
    CategoriesContainer,
    CenteredContainer,
    Container,
    Footer,
    FooterContainer,
    MenuContainer,
} from "./styles";
import { TableModal } from "../components/TableModal/TableModal";
import { Cart } from "../components/Cart/Cart";
import { CartItem } from "../types/CartItem";
import { Product } from "../types/Product";
import { ActivityIndicator } from "react-native";
import { Category } from "../types/Category";
import { api } from "../utils/api";

export const Main = () => {
    const [tableNumber, setTableNumber] = useState("");
    const [isTableModalVisible, setIsTableModalVisible] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingProducts, setIsLoadingProducts] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        setIsLoading(true);
        Promise.all([api.get("/categories"), api.get("/products")]).then(
            ([categoriesRes, productsRes]) => {
                setCategories(categoriesRes.data);
                setProducts(productsRes.data);
                setIsLoading(false);
            }
        );
    }, []);

    const handleSelectCategory = async (categoryId: string) => {
        setIsLoadingProducts(true);
        const route = !categoryId
            ? `/products`
            : `/categories/products/${categoryId}`;
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const { data } = await api.get(route);
        setIsLoadingProducts(false);
        setProducts(data);
    };

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
                {isLoading ? (
                    <CenteredContainer>
                        <ActivityIndicator size="large" color="#D73035" />
                    </CenteredContainer>
                ) : (
                    <>
                        <CategoriesContainer>
                            <Categories
                                categories={categories}
                                onSelectCategory={handleSelectCategory}
                            />
                        </CategoriesContainer>
                        {isLoadingProducts ? (
                            <CenteredContainer>
                                <ActivityIndicator
                                    size="large"
                                    color="#D73035"
                                />
                            </CenteredContainer>
                        ) : (
                            <>
                                {products.length > 0 ? (
                                    <MenuContainer>
                                        <Menu
                                            products={products}
                                            onAddToCart={handleAddToCart}
                                        />
                                    </MenuContainer>
                                ) : (
                                    <CenteredContainer>
                                        <Text>Nenhum produto encontrado.</Text>
                                    </CenteredContainer>
                                )}
                            </>
                        )}
                    </>
                )}
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
                            selectedTable={tableNumber}
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
