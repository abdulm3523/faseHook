import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import "./App.css";
import PrivateRoute from "./assets/privateRoute/privateRoute";
function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/me/:user" element={<Profile />} />
          <Route path="/" element={<HomePage />} exact />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
