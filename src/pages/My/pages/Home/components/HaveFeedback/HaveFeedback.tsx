import { Pressable, Text, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const HaveFeedback = () => (
    <Card
        elevation={0}
        style={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
        }}
    >
        <Card.Content
            style={{
                flexDirection: "row",
                alignItems: "center",
                width: "auto",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <Text
                style={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#111827",
                }}
            >
                Have feedback?
            </Text>
            <Button
                mode="contained"
                style={{
                    backgroundColor: "#BECDD2",
                    borderRadius: 24,
                }}
                onPress={() => console.log("Let us know")}
            >
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: 500,
                        color: "#123038",
                    }}
                >
                    Let us know
                </Text>
                <MaterialCommunityIcons
                    name="arrow-right"
                    size={16}
                    color="#123038"
                />
            </Button>
        </Card.Content>
    </Card>

    //         <Pressable
    //             // size="small"
    //             style={{
    //                 borderRadius: 24,
    //                 width: "auto",
    //                 height: "auto",
    //                 backgroundColor: "blue",
    //                 // backgroundColor: "theme.secondary.main.50",
    //
    //             }}
    //             // endIcon={<ArrowForwardRounded />}
);
