import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../header";
import ProfileProvider from "../providers/profileProvider";

const PrivateRoute = () => {
  const { auth } = useAuth();
  // const navigate = useNavigate()
  return (
    <>
      {auth.authToken ? (
        <>
          <ProfileProvider>
            <Header />
            <Outlet />
          </ProfileProvider>
        </>
      ) : (
        <Navigate to="/login"></Navigate>
      )}
    </>
  );
};

export default PrivateRoute;
