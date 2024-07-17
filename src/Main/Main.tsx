import React from "react";
import { Container, Footer, FooterContainer } from "./styles";
import { Logo } from "../components/Logo/Logo";
import { Greetings } from "../components/app/Greetings/Greetings";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export const Main = () => {
    return (
        <>
            <ExpoStatusBar />
            <Container>
                <>
                    <Logo />
                    <Greetings />
                </>
            </Container>
            <Footer>
                <FooterContainer></FooterContainer>
            </Footer>
            {/* <TableModal
                visible={isTableModalVisible}
                onSave={handleSaveTable}
                onClose={() => setIsTableModalVisible(false)}
            /> */}
        </>
    );
};
