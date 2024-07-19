import styled from "styled-components/native";
import { Section } from "../../../../components/Section/Section";

const Text = styled.Text({
    color: "black",
});

export const Bills = () => {
    // const { customer } = useCustomer();
    const mockBill = "555";

    return (
        <Section
            title="My bills"
            link={{ title: "Details", to: "Billing" }}
            content={
                <>
                    <Text
                        style={{
                            fontWeight: "400",
                            fontSize: 14,
                            color: "#232323",
                        }}
                    >
                        Total amount due
                    </Text>
                    <Text
                        style={{
                            fontWeight: "600",
                            fontSize: 24,
                            color: "#232323",
                        }}
                    >
                        ${mockBill}
                    </Text>
                    <Text
                        style={{
                            fontWeight: "400",
                            fontSize: 14,
                            color: "#232323",
                        }}
                    >
                        This is due by
                        <Text
                            style={{
                                fontWeight: "600",
                            }}
                        >
                            {" "}
                            June 05, 2024
                        </Text>
                    </Text>
                </>
            }
        />
    );
};
