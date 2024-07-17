import { FC, isValidElement, ReactNode } from "react";
import { Text, View } from "react-native";

type Props = {
    title: ReactNode | string;
    children: ReactNode;
    link?: {
        to: string;
        title: string;
    };
};

export const Section: FC<Props> = ({ title, children, link }) => {
    // const navigate = useNavigate();

    return (
        <View
            style={{
                padding: 16,
                borderRadius: 16,
                gap: 1,
                flex: 1,
                backgroundColor: "theme.white",
                flexDirection: "column",
            }}
        >
            <View
                style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                {isValidElement(title) ? (
                    title
                ) : (
                    <Text
                    // variant="h7"
                    // color="theme.secondary.main.base"
                    // fontWeight="medium"
                    >
                        {title}
                    </Text>
                )}
                {link && (
                    <View
                        style={{
                            gap: 1,
                            cursor: "pointer",
                        }}
                        // onClick={() => navigate(link.to)}
                    >
                        <Text
                            style={{
                                fontWeight: "medium",
                                textTransform: "none",
                                color: "blue",
                            }}
                            // variant="p2"
                        >
                            {link.title}
                        </Text>
                        {/* <View
                            style={{
                                "> svg": {
                                    color: "theme.secondary.main.base",
                                },
                            }}
                        >
                            <ArrowForwardIosRounded sx={{ width: 14 }} />
                        </View> */}
                    </View>
                )}
            </View>
            <View>{children}</View>
        </View>
    );
};
