import React, { FC } from "react";
import { Text } from "../Text/Text";
import { Container, Content, OrderHeader, Table } from "./styles";
import { Pressable } from "react-native";

type Props = {
    selectedTable?: string;
    onCancelOrder: () => void;
};

export const Header: FC<Props> = ({ selectedTable, onCancelOrder }) => {
    return (
        <Container>
            {!selectedTable && (
                <>
                    <Text size={14} opacity={0.9}>
                        Bem-vindo(a) ao
                    </Text>
                    <Text size={24} weight={700}>
                        WAITER<Text size={24}>App</Text>
                    </Text>
                </>
            )}
            {selectedTable && (
                <Content>
                    <OrderHeader>
                        <Text size={24} weight={600}>
                            Pedido
                        </Text>
                        <Pressable onPress={onCancelOrder}>
                            <Text size={14} weight={600} color="#D73035">
                                cancelar pedido
                            </Text>
                        </Pressable>
                    </OrderHeader>
                    <Table>
                        <Text color="#666">Mesa {selectedTable}</Text>
                    </Table>
                </Content>
            )}
        </Container>
    );
};
