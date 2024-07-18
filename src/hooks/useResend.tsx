import { useState } from "react";
import { Pressable, View } from "react-native";
import { Text } from "react-native-paper";

const ResendSuccessMessage = () => (
    <View style={{ marginTop: 16 }}>
        <Text
            variant="labelLarge"
            // variant="p4" color="theme.success.600"
        >
            A new password was sent! Please check your email.
        </Text>
    </View>
);

export const useResend = (onClick: () => void) => {
    const [resendMessage, setResendMessage] = useState(false);
    const handleResend = () => {
        setResendMessage(true);
        onClick();
    };

    return (
        <Pressable onPress={handleResend}>
            <Text
                style={{
                    // variant: "p2",
                    // color: "theme.neutral.900",
                    fontWeight: 500,
                }}
            >
                resend
            </Text>
            .{resendMessage && <ResendSuccessMessage />}
        </Pressable>
    );
};
