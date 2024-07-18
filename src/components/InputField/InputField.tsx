import React, { FC, forwardRef, LegacyRef } from "react";
import {
    HelperText,
    TextInput as PaperInput,
    TextInputProps,
} from "react-native-paper";

type Props = {} & TextInputProps;

const InputField = forwardRef<LegacyRef<TextInputProps> & Props>(
    (props, ref) => {
        // const InputField = forwardRef<LegacyRef<TE>, TextInputProps>(
        const [text, setText] = React.useState("");

        const onChangeText = (text) => setText(text);

        const hasErrors = () => {
            return !text.includes("@");
        };

        return (
            <>
                <PaperInput
                    ref={ref as any}
                    label="Email"
                    value={text}
                    onChangeText={onChangeText}
                />
                <HelperText type="error" visible={hasErrors()}>
                    Email address is invalid!
                </HelperText>
            </>
        );
    }
);
InputField.displayName = "InputField";

export { InputField };
