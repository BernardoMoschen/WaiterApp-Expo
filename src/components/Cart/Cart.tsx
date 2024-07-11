import React, { FC } from "react";
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

type Props = {
    cart: CartItem[];
};

export const Cart: FC<Props> = ({ cart }) => {
    return (
        <>
            <FlatList
                data={cart}
                keyExtractor={({ product }) => product._id}
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: 20 }}
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
                            <Pressable style={{ marginRight: 24 }}>
                                <PlusCircle />
                            </Pressable>
                            <Pressable>
                                <MinusCircle />
                            </Pressable>
                        </Actions>
                    </Item>
                )}
            />
            <Summary>
                <TotalContainer>
                    <Text color="#666">Total</Text>
                    <Text size={20} weight="600">
                        {formatCurrency(120)}
                    </Text>
                </TotalContainer>
                <Button onPress={() => alert("Confirmar pedido")}>
                    Confirmar pedido
                </Button>
            </Summary>
        </>
    );
};
