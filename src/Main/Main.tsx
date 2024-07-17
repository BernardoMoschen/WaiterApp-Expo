import React from "react";
import { Container, Footer, FooterContainer } from "./styles";
import { Logo } from "../components/Logo/Logo";
import { Home } from "../pages/My/pages/Home/Home";

export const Main = () => {
    return (
        <>
            <Container>
                <Logo />
                <Home />
            </Container>
            <Footer>
                <FooterContainer></FooterContainer>
            </Footer>
        </>
    );
};
