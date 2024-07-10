import React, { FC } from "react";
import { Text } from "../Text/Text";
import { Modal } from "react-native";
import { Product } from "../../types/Product";

type Props = {
    visible: boolean;
    onClose: () => void;
    product: null | Product;
};

export const ProductModal: FC<Props> = ({ visible, onClose, product }) => {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            presentationStyle="pageSheet"
            onRequestClose={onClose}
        >
            <Text>ProductModal</Text>
        </Modal>
    );
};
