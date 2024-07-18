import { FC, isValidElement, ReactNode } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import { SysLink } from "../../../../components/Link/Link";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
    title: string;
    content: ReactNode;
    link?: {
        to: string;
        title: string;
    };
};

export const Section: FC<Props> = ({ title, content, link }) => {
    return (
        <Card
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                padding: 16,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 700,
                        textAlign: "left",
                        color: "#111827",
                    }}
                >
                    {title}
                </Text>
                {link && (
                    <SysLink to={{ screen: link.to }}>
                        <>
                            {link.title}
                            <MaterialCommunityIcons
                                name="chevron-right"
                                color="#123038"
                                size={16}
                            />
                        </>
                    </SysLink>
                )}
            </View>
            <Card.Content
                style={{
                    marginTop: 8,
                    paddingHorizontal: 0,
                }}
            >
                {content}
            </Card.Content>
        </Card>
    );
};
