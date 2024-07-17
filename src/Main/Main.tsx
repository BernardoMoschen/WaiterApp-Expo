import React from "react";
import { Container } from "./styles";
import { Logo } from "../components/Logo/Logo";
import { Home } from "../pages/My/pages/Home/Home";
import { SignIn } from "../pages/SignIn/SignIn";

export const Main = () => {
    return (
        <>
            <Container>
                <Logo />
                {/* <Home /> */}
                <SignIn />
            </Container>
            {/* <Footer>
                <FooterContainer></FooterContainer>
            </Footer> */}
        </>
    );
};
