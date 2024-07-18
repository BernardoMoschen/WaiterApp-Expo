import { useState } from "react";

type InputPassword = "passwordVisible" | "passwordHidden";

export const useTogglePassword = () => {
    const [visible, setVisible] = useState(false);
    const isVisible: InputPassword = visible
        ? "passwordVisible"
        : "passwordHidden";
    return {
        visibility: isVisible,
        toggleVisibility: () => setVisible((prevState) => !prevState),
    };
};
