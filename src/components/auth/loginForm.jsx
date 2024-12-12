import Filed from "../common/filed";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitForm = (formData) => {
    console.log(formData);
    navigate("/home");
  };
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
