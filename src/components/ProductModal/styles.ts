import styled from "styled-components/native";

export const Image = styled.ImageBackground`
    width: 100%;
    height: 200px;
    align-items: flex-end;
`;

export const CloseButton = styled.Pressable`
    width: 32px;
    height: 32px;
    background: rgba(0, 0, 0, 1);
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    margin: 24px;
`;

export const ModalBody = styled.View`
    flex: 1;
    background-color: #fafafa;
    padding: 32px 24px 0px;
`;

export const Header = styled.View``;

export const IngredientsContainer = styled.View`
    margin-top: 32px;
    flex: 1;
`;

export const Ingredient = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid rgba(204, 204, 204, 0.3);
    margin-bottom: 4px;
`;

export const Footer = styled.View`
    min-height: 110px;
    background-color: #fff;
    padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const PriceContainer = styled.SafeAreaView``;

