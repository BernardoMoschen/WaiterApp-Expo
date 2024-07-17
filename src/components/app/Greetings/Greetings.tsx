import { FC } from "react";
import { Text, View } from "react-native";
import { NumberSelector } from "./Components/NumberSelector/NumberSelector";
import { SubscriptionStatusChip } from "./Components/SubscriptionStatusChip/SubscriptionStatusChip";
import { Section } from "../Section/Section";

type Props = {
    minimal?: boolean;
};

export const Greetings: FC<Props> = ({ minimal }) => {
    const identity = {
        preferredName: "Bernardo",
        name: "Bernardo",
    };
    const subscriptions = [
        {
            id: "1",
            bundle: {
                id: "2",
                name: "BundleMock",
                description: "BundleMockDescription",
                price: 125,
                fees: 25,
            },
            number: "1234567890",
            simtype: "ESIM",
            // "active" | "suspended" | "terminated" | "pendingActive"
            status: "active",
            consumption: 999,
        },
    ];
    const number = subscriptions[0].number;
    const status = subscriptions[0].status;
    // const { identity, subscriptions } = useRecoilValue(customerAtom);
    // const { number, status } = useRecoilValue(subscriptionSelector);

    const name = ` ${
        identity.preferredName?.trim() ? identity.preferredName : identity.name
    }`;

    const Title = () => (
        <Text
        // display="flex"
        // variant="h6"
        // color="theme.neutral.900"
        // fontWeight="semibold"
        >
            Good Day,{" "}
            <Text
            // text={[{ phrase: name }]}
            >
                {name}
            </Text>
        </Text>
    );

    const Content = () =>
        subscriptions.length > 0 ? (
            <View
                style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                {subscriptions.length > 1 ? (
                    <NumberSelector />
                ) : (
                    <Text
                    // variant="p2" color="theme.neutral.600"
                    >
                        <Text
                        // runOnce
                        // text={[{ phrase: formatNumber(number) }]}
                        >
                            {number}
                        </Text>
                    </Text>
                )}
                <SubscriptionStatusChip
                    status={status as any}
                    variant={minimal ? "icon" : "outlined"}
                />
            </View>
        ) : null;

    return minimal ? (
        <View
            style={{
                flexDirection: "column",
                flex: 1,
            }}
        >
            <Title />
            <Content />
        </View>
    ) : (
        <View
            style={{
                marginVertical: 2,
                flexDirection: "row",
            }}
        >
            <Section
                link={{ title: "Profile", to: "/my/profile" }}
                title={<Title />}
            >
                <Content />
            </Section>
        </View>
    );
};
