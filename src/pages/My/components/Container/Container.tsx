import { FC, ReactNode } from "react";
import styled from "styled-components/native";
import { Greetings } from "../Greetings/Greetings";

type Props = {
    children: ReactNode;
    //   eventName: EventPageView
};
// & NavbarProps;

const SystemContainer = styled.View`
    padding: 0 14px;
`;

export const Container: FC<Props> = ({
    children,
    // backButton,
    // pageName,
    //   eventName,
}) => {
    //   sendPageViewEvent(eventName)
    return (
        <>
            {/* <Navbar backButton={backButton} pageName={pageName} /> */}
            <SystemContainer>
                <Greetings />
                {children}
            </SystemContainer>
        </>
    );
};
