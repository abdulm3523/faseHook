import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../../header";

const PrivateRoute = () => {
  const { auth } = useAuth();
  // const navigate = useNavigate()
  return (
    <>
      {auth.user ? (
        <>
          <Header />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login"></Navigate>
      )}
    </>
  );
};

export default PrivateRoute;
