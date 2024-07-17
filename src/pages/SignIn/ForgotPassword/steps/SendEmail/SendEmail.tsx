import { View } from "react-native";
import { Logo } from "../../../../../components/Logo/Logo";
import { Button, Text, TextInput, Title } from "react-native-paper";

export const SendEmail = () => {
    return (
        <View style={{ flex: 1, marginVertical: 24, marginHorizontal: 24 }}>
            <View style={{ flex: 2 }}>
                <View
                    style={{
                        flex: 1,
                        marginTop: 5,
                    }}
                >
                    <View style={{ marginBottom: 36 }}>
                        <Text
                            variant="headlineSmall"
                            style={{ marginBottom: 8 }}
                        >
                            Forgot your password?
                        </Text>
                        <Text variant="bodyMedium">
                            We&apos;ll send a temporary password to the email
                            associated with your account.
                        </Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <TextInput label="email" />
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <Button mode="contained" disabled={false}>
                    Continue
                </Button>
            </View>
        </View>
    );
};
