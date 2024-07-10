import React, { FC } from "react";
import { Text } from "../Text/Text";
import { FlatList, Modal } from "react-native";
import { Product } from "../../types/Product";
import {
    CloseButton,
    Header,
    Image,
    Ingredient,
    IngredientsContainer,
    ModalBody,
} from "./styles";
import { Close } from "../Icons/Close";

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
                <IngredientsContainer>
                    <Text weight={600} color="#666">
                        Ingredients
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
            </ModalBody>
        </Modal>
    );
};
