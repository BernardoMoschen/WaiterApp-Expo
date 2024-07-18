import React, { forwardRef } from "react";
import {
    HelperText,
    TextInput as PaperInput,
    TextInputProps,
} from "react-native-paper";

type Props = {
    error?: boolean;
    helperText?: string;
    ref: any;
} & TextInputProps;

const SysTextInput = forwardRef((props: Props, ref) => {
    const { error, helperText, ...restProps } = props;
    return (
        <>
            <PaperInput
                ref={ref}
                {...restProps}
                error={error}
                activeUnderlineColor="#6B7280"
                underlineColor="#6B7280"
                style={{ backgroundColor: "transparent", marginBottom: 24 }}
            />
            {helperText && (
                <HelperText
                    type={error ? "error" : "info"}
                    children={helperText}
                />
            )}
        </>
    );
});

export { SysTextInput };
