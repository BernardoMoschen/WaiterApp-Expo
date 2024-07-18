import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getUser } from "@/services/aws";

export const useRedirectLoggedUser = () => {
    // const navigate = useNavigate();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const isUserLogged = async () => {
            try {
                setTimeout(() => 3000);
                return console.log("logged");
                // await getUser();
                // navigate("/my");
            } catch {
                setIsChecking(false);
            }
        };
        void isUserLogged();
    }, []);
    // [navigate]);

    return { isChecking };
};
