import styled from "styled-components/native";

export const Item = styled.View`
    flex-direction: row;
    padding: 8px 0;
    align-items: center;
    justify-content: space-between;
`;

export const ItemContainer = styled.View`
    flex-direction: row;
`;

export const ItemImage = styled.Image`
    width: 48px;
    height: 40px;
    border-radius: 6px;
`;

export const ItemQuantity = styled.View`
    min-width: 20px;
    margin: 0 8px 0 12px;
`;

export const ItemDetails = styled.View``;

export const Actions = styled.View`
    flex-direction: row;
`;

export const Summary = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TotalContainer = styled.View`
    flex: 1;
    margin-right: 32px;
`;
