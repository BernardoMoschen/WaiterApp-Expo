import React, { FC, useState } from "react";
import { Modal, Pressable } from "react-native";
import { Text } from "../Text/Text";
import { Content, Form, Header, Input, Overlay } from "./styles";
import { Close } from "../Icons/Close";
import { Button } from "../Button/Button";
import { isAndroid } from "../../utils/isAndroid";

type Props = {
    visible: boolean;
    onChange: (table: string) => void;
    onSave: () => void;
    onClose: () => void;
    submitDisabled: boolean;
};

export const TableModal: FC<Props> = ({
    visible,
    onChange,
    onSave,
    onClose,
    submitDisabled,
}) => {
    const handleClose = () => {
        onChange("");
        onClose();
    };

    return (
        <Modal visible={visible} transparent animationType="fade">
            <Overlay behavior={isAndroid ? "height" : "padding"}>
                <Content>
                    <Header>
                        <Text weight="600">Informe a mesa</Text>
                        <Pressable onPress={handleClose}>
                            <Close color="#666" />
                        </Pressable>
                    </Header>
                    <Form>
                        <Input
                            placeholder="Número da mesa"
                            placeholderTextColor="#666"
                            keyboardType="number-pad"
                            onChangeText={onChange}
                        />
                        <Button disabled={submitDisabled} onPress={onSave}>
                            Salvar
                        </Button>
                    </Form>
                </Content>
            </Overlay>
        </Modal>
    );
};
