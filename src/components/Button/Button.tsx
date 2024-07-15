import React, { FC } from "react";
import { Container } from "./styles";
import { Text } from "../Text/Text";
import { ActivityIndicator } from "react-native";

type Props = {
    children: string;
    onPress: () => void;
    disabled?: boolean;
    isLoading?: boolean;
};

export const Button: FC<Props> = ({
    children,
    onPress,
    disabled,
    isLoading,
}) => {
    return (
        <Container onPress={onPress} disabled={disabled}>
            {!isLoading ? (
                <Text weight="600" color="#fff">
                    {children}
                </Text>
            ) : (
                <ActivityIndicator color="#fff" />
            )}
        </Container>
    );
};
