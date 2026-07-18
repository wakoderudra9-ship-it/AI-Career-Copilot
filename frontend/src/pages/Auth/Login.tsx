import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { loginUser } from "../../services/authService";

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  token_type: string;
}

interface ErrorResponse {
  detail: string;
}

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response: LoginResponse = await loginUser(data);

      // Save JWT token
      localStorage.setItem("token", response.access_token);

      alert("Login successful!");

      reset();

      navigate("/dashboard");
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;

      alert(
        axiosError.response?.data?.detail ??
          "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-800">
        <h1 className="text-4xl font-bold text-cyan-400 text-center">
          AI Career Copilot
        </h1>

        <p className="text-slate-400 text-center mt-3">
          Welcome back! Sign in to continue.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-5"
        >
          <div>
            <label className="block text-slate-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
              className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-cyan-500 hover:bg-cyan-600 rounded-lg py-3 font-semibold text-white disabled:opacity-50"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6">
          Don't have an account?
          <Link
            to="/register"
            className="text-cyan-400 ml-2 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;