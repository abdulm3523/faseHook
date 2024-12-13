import Filed from "../common/filed";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
const LoginForm = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  // HANDEL FORM DATA
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  // HANDEL LOGIN ON SUBMIT
  const onSubmitForm = async (formData) => {
    // const user = { ...formData };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );

      // IF response is succesfully received

      if (response.status === 200) {
        console.log(response.status);
        const { user, token } = response.data;
        if (token) {
          const authToked = token.token;
          const refreshToken = token.refreshToken;
          console.log(authToked);
          setAuth({ user, authToked, refreshToken });
          navigate("/"); // NAVIGATE TO HOME PAGE AFTER LOGIN
        }
      }
    } catch (error) {
      console.log(error);
      setError("root.LoginError", {
        type: "LoginError",
        message: "Please Enter valid information",
      });
    }
  };
  console.log("hello");
  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      action=""
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
    >
      <Filed label={"Email"} htmlFor="email" error={errors.email}>
        <input
          {...register("email", { required: "Email id is required" })}
          type="email"
          name="email"
          id="email"
          className="auth-input"
        />
      </Filed>
      <Filed label={"Password"} htmlFor="password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password id is required",
            minLength: {
              value: 8,
              message: "Minimum length is 8",
            },
          })}
          type="password"
          name="password"
          id="password"
          className="auth-input"
        />
      </Filed>
      <p>{errors?.root?.LoginError?.message}</p>
      <Filed>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </Filed>
    </form>
  );
};

export default LoginForm;
