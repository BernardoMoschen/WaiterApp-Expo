import React, { FC } from "react";
import { Text } from "../Text/Text";
import { Modal } from "react-native";

type Props = {
    visible: boolean;
};

export const ProductModal: FC<Props> = ({ visible }) => {
    return (
        <Modal visible={visible}>
            <Text>ProductModal</Text>
        </Modal>
    );
};
