import React, { FC, useState } from "react";
import { FlatList, Pressable } from "react-native";
import { CartItem } from "../../types/CartItem";
import {
    Actions,
    Item,
    ItemContainer,
    ItemDetails,
    ItemImage,
    ItemQuantity,
    Summary,
    TotalContainer,
} from "./styles";
import { Text } from "../Text/Text";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { MinusCircle } from "../Icons/MinusCircle";
import { Button } from "../Button/Button";
import { Product } from "../../types/Product";
import { OrderConfirmedModal } from "../OnderConfirmedModal/OrderConfirmedModal";
import { api } from "../../utils/api";

type Props = {
    cart: CartItem[];
    selectedTable: string;
    onAdd: (product: Product) => void;
    onDecrement: (product: Product) => void;
    onConfirmOrder: () => void;
};

export const Cart: FC<Props> = ({
    cart,
    selectedTable,
    onAdd,
    onDecrement,
    onConfirmOrder,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const isCartFilled = cart.length > 0;
    const total = cart.reduce((acc, cartItem) => {
        return acc + cartItem.quantity * cartItem.product.price;
    }, 0);

    const handleConfirmOrder = async () => {
        setIsLoading(true);
        const payload = {
            table: selectedTable,
            products: cart.map((cartItem) => ({
                product: cartItem.product._id,
                quantity: cartItem.quantity,
            })),
        };
        await api.post("/order", payload);
        setIsLoading(false);
        setIsModalVisible(true);
    };

    const handleOnOk = () => {
        setIsModalVisible(false);
        onConfirmOrder();
    };

    return (
        <>
            {isCartFilled && (
                <FlatList
                    data={cart}
                    keyExtractor={({ product }) => product._id}
                    showsVerticalScrollIndicator={false}
                    style={{ marginBottom: 20, maxHeight: 150 }}
                    renderItem={({ item: cartItem }) => (
                        <Item>
                            <ItemContainer>
                                <ItemImage
                                    source={require("../../mocks/mockImage.png")}
                                />
                                <ItemQuantity>
                                    <Text size={14} color="#666">
                                        {cartItem.quantity}x
                                    </Text>
                                </ItemQuantity>
                                <ItemDetails>
                                    <Text size={14} weight="600">
                                        {cartItem.product.name}
                                    </Text>
                                    <Text
                                        size={14}
                                        color="#666"
                                        style={{ marginTop: 3 }}
                                    >
                                        {formatCurrency(cartItem.product.price)}
                                    </Text>
                                </ItemDetails>
                            </ItemContainer>
                            <Actions>
                                <Pressable
                                    style={{ marginRight: 24 }}
                                    onPress={() => onAdd(cartItem.product)}
                                >
                                    <PlusCircle />
                                </Pressable>
                                <Pressable
                                    onPress={() =>
                                        onDecrement(cartItem.product)
                                    }
                                >
                                    <MinusCircle />
                                </Pressable>
                            </Actions>
                        </Item>
                    )}
                />
            )}
            <Summary>
                <TotalContainer>
                    {isCartFilled ? (
                        <>
                            <Text color="#666">Total</Text>
                            <Text size={16} weight="600">
                                {formatCurrency(total)}
                            </Text>
                        </>
                    ) : (
                        <>
                            <Text color="#999">Seu carrinho está vazio</Text>
                        </>
                    )}
                </TotalContainer>
                <Button
                    isLoading={isLoading}
                    disabled={!isCartFilled}
                    onPress={handleConfirmOrder}
                >
                    Confirmar pedido
                </Button>
            </Summary>
            <OrderConfirmedModal onOk={handleOnOk} visible={isModalVisible} />
        </>
    );
};
