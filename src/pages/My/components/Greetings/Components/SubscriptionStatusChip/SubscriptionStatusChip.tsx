import { FC } from "react";
import styled from "styled-components/native";

type ChipVariant = "filled" | "outlined" | "icon";

type Props = {
    variant: ChipVariant;
    status: "active" | "suspended" | "terminated" | "pendingActive";
};

const Chip = styled.View`
    padding: 0px 5px;
    height: 24px;
    background-color: transparent;
    border: 1px solid green;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
`;

const ChipText = styled.Text`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: green;
`;

export const SubscriptionStatusChip: FC<Props> = ({ status }) => (
    <Chip
    // type={
    //     status === "active"
    //         ? "success"
    //         : status === "suspended"
    //         ? "warning"
    //         : "error"
    // }
    // label={capitalize(status)}
    // variant={variant}
    >
        <ChipText>{status}</ChipText>
    </Chip>
);
