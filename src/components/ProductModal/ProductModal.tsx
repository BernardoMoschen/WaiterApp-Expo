import React, { FC } from "react";
import { Text } from "../Text/Text";
import { Modal } from "react-native";
import { Product } from "../../types/Product";
import { CloseButton, Image } from "./styles";
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

            <Text>ProductModal</Text>
        </Modal>
    );
};
