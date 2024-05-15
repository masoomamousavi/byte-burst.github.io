import { Navigate } from "react-router-dom";
import Panel from "../Pages/panel/Panel";
import { isLogin } from "../utils";
function PrivateRoute() {
    return (
        <>
            {isLogin() ? <Panel /> : <Navigate to='/login' />}
        </>
    )
}
export default PrivateRoute;