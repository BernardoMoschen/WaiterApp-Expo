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
            link={{ title: "Details", to: "/my/billing" }}
        >
            <Text>Latest invoice</Text>
            <Text
                //   variant='h5'
                //   color='theme.shades.800'
                style={{ ontWeight: "400" }}
            >
                $
                {/* {customer.billing.invoices.length
                     ? Number(customer.billing.invoices[0]?.dueAmount).toFixed(2)
                    : "0.00"} */}
                {mockBill}
            </Text>
        </Section>
    );
};
