import React from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export const SignIn = () => (
    <View
        style={{
            flex: 3,
            margin: 24,
        }}
    >
        <View
            style={{
                marginVertical: 8,
                flex: 3,
                justifyContent: "space-around",
            }}
        >
            <View>
                <Text style={{ fontWeight: "bold" }} variant="headlineSmall">
                    Welcome to Paradise
                </Text>
                <Text variant="bodyMedium">
                    Please sign in to your account to continue.
                </Text>
            </View>
            <View style={{ justifyContent: "center" }}>
                <TextInput style={{ marginBottom: 24 }} label="Email" />
                <TextInput label="Password" />
            </View>
            <View style={{ flexDirection: "row" }}>
                <Text>Forgot your password? </Text>
                <Text variant="labelLarge">Click here.</Text>
            </View>
            <Button mode="contained">Sign in</Button>
        </View>
        <View
            style={{
                marginVertical: 16,
                width: "auto",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text> or </Text>
        </View>
        <View
            style={{
                flex: 2,
                justifyContent: "center",
            }}
        >
            <Text style={{ marginBottom: 8 }} variant="headlineSmall">
                New here ?
            </Text>
            <Text style={{ marginBottom: 32 }} variant="bodyLarge">
                Sign up now and be part of Paradise.
            </Text>
            <Button mode="contained">Sign up now</Button>
        </View>
    </View>
);
