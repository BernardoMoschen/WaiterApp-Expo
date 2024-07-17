import { Pressable, Text, View } from "react-native";

export const HaveFeedback = () => (
    <View
        style={{
            padding: 16,
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "theme.white",
            borderRadius: 16,
            flexDirection: "row",
        }}
    >
        <>
            <Text
            // variant="p2"
            // color="theme.neutral.900"
            >
                Have feedback?
            </Text>
        </>
        <View>
            {/* <Link to="/my/feedback"> */}
            <Pressable
                // size="small"
                style={{
                    borderRadius: 24,
                    width: "auto",
                    height: "auto",
                    backgroundColor: "blue",
                    // backgroundColor: "theme.secondary.main.50",
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                }}
                // endIcon={<ArrowForwardRounded />}
            >
                <Text
                    // variant="p2"
                    // color="theme.secondary.main.base"
                    style={{
                        fontWeight: "medium",
                        textTransform: "none",
                    }}
                >
                    Let us know
                </Text>
            </Pressable>
            {/* <Link/> */}
        </View>
    </View>
);
