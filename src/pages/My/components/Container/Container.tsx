import { FC, ReactNode } from "react";
import styled from "styled-components/native";
import { Greetings } from "../Greetings/Greetings";

type Props = {
    children: ReactNode;
};

const SystemContainer = styled.ScrollView`
    flex: 1;
    padding: 0 14px;
    background-color: #f3f4f6;
`;

export const Container: FC<Props> = ({ children }) => (
    <>
        <SystemContainer
            contentContainerStyle={{
                gap: 16,
                alignItems: "center",
            }}
        >
            <Greetings />
            {children}
        </SystemContainer>
    </>
);
