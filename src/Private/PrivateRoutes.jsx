import { Navigate } from "react-router-dom";
import usePrivateHook from "../Hooks/usePrivateHook";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = usePrivateHook();
  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center">
        <span className=" loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoutes;