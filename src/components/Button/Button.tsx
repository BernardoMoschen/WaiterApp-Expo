import React, { FC } from "react";
import { Container } from "./styles";
import { Text } from "../Text/Text";

type Props = {
    children: string;
    onPress: () => void;
    disabled?: boolean;
};

export const Button: FC<Props> = ({ children, onPress, disabled }) => {
    return (
        <Container onPress={onPress} disabled={disabled}>
            <Text weight="600" color="#fff">
                {children}
            </Text>
        </Container>
    );
};
