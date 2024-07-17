import React from "react";
import { Container } from "./styles";
import { Logo } from "../components/Logo/Logo";
import { Home } from "../pages/My/pages/Home/Home";
import { SignIn } from "../pages/SignIn/SignIn";
import { ForgotPassword } from "../pages/SignIn/ForgotPassword/ForgotPassword";

export const Main = () => {
    return (
        <>
            <Container>
                <Logo />
                {/* <Home /> */}
                {/* <SignIn /> */}
                <ForgotPassword />
            </Container>
            {/* <Footer>
                <FooterContainer></FooterContainer>
            </Footer> */}
        </>
    );
};
