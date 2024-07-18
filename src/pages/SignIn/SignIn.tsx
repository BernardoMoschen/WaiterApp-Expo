import React from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useFormSignIn } from "./hooks";
import { Controller } from "react-hook-form";
import { SysContainer } from "../../components/SysContainer/SysContainer";
import { SysTextInput } from "../../components/SysTextInput/SysTextInput";

export const inputs = {
    email: {
        label: "Email",
        validation: {
            required: {
                value: true,
                message: "Email is required",
            },
            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:
                    "Your email needs to be in the format: yourname@domain.com",
            },
        },
    },
    password: {
        label: "Password",
        validation: {
            required: {
                value: true,
                message: "Password is required",
            },
        },
    },
};

export const SignIn = () => {
    const {
        form: {
            control,
            formState: { errors, isValid },
        },
        formFacade: { handleSubmit, isSubmitSuccessful, password },
        request: {
            isLoading,
            errors: { incorrect, resetRequired, newPassword },
        },
    } = useFormSignIn();
    return (
        <SysContainer
            behavior="padding"
            style={{
                flex: 3,
                // margin: 24,
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
                    <Text
                        style={{ fontWeight: "bold" }}
                        variant="headlineSmall"
                    >
                        Welcome to Paradise
                    </Text>
                    <Text variant="bodyMedium">
                        Please sign in to your account to continue.
                    </Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <SysTextInput
                                {...field}
                                label="Email"
                                error={!!errors.email || incorrect}
                                helperText={errors.email?.message ?? " "}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <SysTextInput
                                {...field}
                                label={inputs.password.label}
                                error={!!errors.password || incorrect}
                                helperText={errors.password?.message ?? " "}
                            />
                        )}
                    />
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
        </SysContainer>
    );
};
