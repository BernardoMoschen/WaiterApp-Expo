import { FC } from "react";
import { Modal } from "react-native";
import { Text } from "../Text/Text";
import { Container, OkButton } from "./styles";
import { CheckCircle } from "../Icons/CheckCircle";

type Props = {
    visible: boolean;
    onOk: () => void;
};

export const OrderConfirmedModal: FC<Props> = ({ visible, onOk }) => {
    return (
        <Modal visible={visible} animationType="fade">
            <Container>
                <CheckCircle />
                <Text size={20} weight="600" color="#fff">
                    Pedido Confirmado
                </Text>
                <Text color="#fff" opacity={0.9} style={{ marginTop: "4px" }}>
                    O pedido já entrou na fila de produção!
                </Text>
                <OkButton onPress={onOk}>
                    <Text color="#D73035" weight="600">
                        Ok
                    </Text>
                </OkButton>
            </Container>
        </Modal>
    );
};
