import { Button, Text, Title } from "react-native-paper";
import { Logo } from "../../../../../components/Logo/Logo";
import { View } from "react-native";

export const CheckEmail = () => {
    return (
        <View style={{ flex: 1, marginVertical: 24, marginHorizontal: 24 }}>
            <View style={{ flex: 2, marginTop: 8 }}>
                <View style={{ flex: 1, marginBottom: 36 }}>
                    <Text variant="headlineSmall" style={{ marginBottom: 8 }}>
                        Forgot your password?
                    </Text>
                    <Text variant="bodyMedium">
                        We&apos;ll send a temporary password to the email
                        associated with your account.
                    </Text>
                    <Text variant="bodyMedium" style={{ marginTop: 16 }}>
                        If you didn&apos;t get the email, please check your spam
                        folder or click Resend(variable)
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <Button mode="contained">Continue to login</Button>
            </View>
        </View>
    );
};
