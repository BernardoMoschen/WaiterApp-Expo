import styled from "styled-components/native";
import { LogoMobile } from "./assets/LogoMobile/LogoMobile";
// import logoMobile from "./assets/logo-mobile.svg";

export const LogoContainer = styled.View`
    margin: 24px 24px 0;
`;

// export const LogoContainer = styled.ImageBackground`
// width: 100%;
/* height: 200px; */
// align-items: flex-start;
// `;

export const Logo = () => {
    return (
        <LogoContainer>
            <LogoMobile />
        </LogoContainer>
    );
};
