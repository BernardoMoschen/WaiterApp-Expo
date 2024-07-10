import React, { FC } from "react";
import { Text } from "../Text/Text";
import { FlatList, Modal } from "react-native";
import { Product } from "../../types/Product";
import {
    CloseButton,
    Footer,
    FooterContainer,
    Header,
    Image,
    Ingredient,
    IngredientsContainer,
    ModalBody,
    PriceContainer,
} from "./styles";
import { Close } from "../Icons/Close";
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../Button/Button";

type Props = {
    visible: boolean;
    onClose: () => void;
    product: null | Product;
};

export const ProductModal: FC<Props> = ({ visible, onClose, product }) => {
    if (!product) return null;

    return (
        <Modal
            visible={visible}
            animationType="slide"
            presentationStyle="pageSheet"
            onRequestClose={onClose}
        >
            <Image
                source={require("../../mocks/mockImageXL.png")}
                // source={{
                //     uri: `http://localhost:3001/upload/${product.imagePath}`,
                // }}
            >
                <CloseButton onPress={onClose}>
                    <Close />
                </CloseButton>
            </Image>
            <ModalBody>
                <Header>
                    <Text size={24} weight={600}>
                        {product.name}
                    </Text>
                    <Text
                        size={16}
                        weight={400}
                        color="#666"
                        style={{ marginTop: 8 }}
                    >
                        {product.description}
                    </Text>
                </Header>
                {!!product.ingredients.length && (
                    <IngredientsContainer>
                        <Text weight={600} color="#666">
                            Ingredientes
                        </Text>
                        <FlatList
                            data={product.ingredients}
                            keyExtractor={(ingredient) => ingredient._id}
                            showsVerticalScrollIndicator={false}
                            style={{ marginTop: 16 }}
                            renderItem={({ item: ingredient }) => (
                                <Ingredient>
                                    <Text>{ingredient.icon}</Text>
                                    <Text
                                        size={14}
                                        color="#666"
                                        style={{ marginLeft: 20 }}
                                    >
                                        {ingredient.name}
                                    </Text>
                                </Ingredient>
                            )}
                        />
                    </IngredientsContainer>
                )}
            </ModalBody>
            <Footer>
                <FooterContainer>
                    <PriceContainer>
                        <Text color="#666">Preço</Text>
                        <Text size={20} weight="600">
                            {formatCurrency(product.price)}
                        </Text>
                    </PriceContainer>
                    <Button onPress={() => alert("Adicionar ao pedido")}>
                        Adicionar ao pedido
                    </Button>
                </FooterContainer>
            </Footer>
        </Modal>
    );
};
