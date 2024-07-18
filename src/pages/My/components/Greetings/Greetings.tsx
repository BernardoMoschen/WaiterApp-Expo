import { FC } from "react";
import { Text, View } from "react-native";
import { SubscriptionStatusChip } from "./Components/SubscriptionStatusChip/SubscriptionStatusChip";
import { Section } from "../Section/Section";

export const Greetings: FC = () => {
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
    const name = ` ${
        identity.preferredName?.trim() ? identity.preferredName : identity.name
    }`;

    const title = `Good day, ${name}`;

    const Content = () =>
        subscriptions.length > 0 ? (
            <View
                style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                }}
            >
                <Text>{number}</Text>
                <SubscriptionStatusChip
                    status={status as any}
                    variant={"outlined"}
                />
            </View>
        ) : null;

    return (
        <View
            style={{
                marginVertical: 2,
                flexDirection: "row",
                width: "auto",
            }}
        >
            <Section
                title={title}
                link={{ title: "Profile", to: "Profile" }}
                content={<Content />}
            />
        </View>
    );
};
