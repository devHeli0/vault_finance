import { useContext } from "react";
import  Login  from "../../pages/Login";
import { CAuth } from "./CAuth";

export const CRequire = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(CAuth);
    if (!auth.user) {
        return <Login />;
    }
    return children;
}