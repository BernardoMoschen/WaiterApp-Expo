import { some } from "lodash";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { accountAtom } from "../../../recoil";
import { useTogglePassword } from "../../../hooks/useTogglePassword";

type CognitoResponse = {
    challengeName: string;
};

type FormData = {
    email: string;
    password: string;
};

export const useFormSignIn = () => {
    const form = useForm<FormData>();
    const password = useTogglePassword();
    const setAccount = useSetRecoilState(accountAtom);
    const isLoading = false;
    // const { operation, isLoading, error, responseError } =
    //     useAsyncOperation<CognitoResponse>();
    const error = {
        // name: "PasswordResetRequiredException",
        name: "",
    };
    const responseError = {
        // name: "PasswordResetRequiredException",
        name: "",
    };
    const handleSignIn = async (data: FormData) => {
        // setAccount(data);
        console.log("handleSignIn");
        // const { response, setResponseError } = await operation(
        //     async () => (await signIn(data)) as Promise<CognitoResponse>
        // );
        // if (response?.challengeName === "NEW_PASSWORD_REQUIRED") {
        //     setResponseError({ name: "NewPasswordRequired", message: "" });
        // }
    };

    const errors = {
        request: error,
        incorrect: error?.name.includes("NotAuthorizedException"),
        resetRequired: error?.name.includes("PasswordResetRequiredException"),
        newPassword: responseError?.name.includes("NewPasswordRequired"),
    };

    return {
        form,
        formFacade: {
            handleSubmit: form.handleSubmit(handleSignIn),
            isSubmitSuccessful:
                !some(errors) && form.formState.isSubmitSuccessful,
            password,
        },
        request: {
            isLoading,
            errors,
        },
    };
};
