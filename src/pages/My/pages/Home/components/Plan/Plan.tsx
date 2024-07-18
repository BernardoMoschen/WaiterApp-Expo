import { Text } from "react-native";
import { Section } from "../../../../components/Section/Section";

export const Plan = () => {
    //   const { bundle } = useRecoilValue(subscriptionSelector)
    const bundle = {
        id: "2",
        name: "BundleMock",
        description: "BundleMockDescription",
        price: 125,
        fees: 25,
    };
    return (
        <Section
            title="My plan"
            link={{ title: "Manage", to: "/my/services" }}
            content={
                <Text
                    style={{
                        fontWeight: 600,
                        fontSize: 20,
                        color: "#111827",
                    }}
                >
                    {bundle.name.replace(" PROMO", "")}
                </Text>
            }
        ></Section>
    );
};
