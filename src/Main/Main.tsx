import React from "react";
import { Container, Footer, FooterContainer } from "./styles";
import { Logo } from "../components/Logo/Logo";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Home } from "../pages/My/pages/Home/Home";

export const Main = () => {
    return (
        <>
            <ExpoStatusBar />
            <Container>
                <>
                    <Logo />
                    <Home />
                </>
            </Container>
            <Footer>
                <FooterContainer></FooterContainer>
            </Footer>
        </>
    );
};
