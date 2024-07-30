import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import PageHeader from "./../../components/shared/PageHeader/PageHeader";
import Button from "../../components/shared/Button/Button";
import useAuth from "../../hooks/useAuth";
import { AuthInfoProps, Inputs } from "./../../CommonTypes/CommonTypes";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useScrollToTop from "./../../hooks/useScrollToTop";

const LoginPage: React.FC = () => {
  useScrollToTop();
  const { register, handleSubmit } = useForm<Inputs>();
  const { loginUser, loginWithGoogle }: AuthInfoProps = useAuth();
  const navigate: NavigateFunction = useNavigate();

  const handleUserLoginForm: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    try {
      await loginUser(email, password);
      navigate("/");
      toast.success("Login Success!!");
    } catch (error: unknown) {
      toast.error(error?.message);
    }
  };

  const handleLoginWithGoogle = async () => {
    await loginWithGoogle();
    toast.success("Login Success!!");
    navigate("/");
  };

  return (
    <>
      <PageHeader url="/login" label="Login">
        Login
      </PageHeader>
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white p-8 border border-gray-200 rounded">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form
            onSubmit={handleSubmit(handleUserLoginForm)}
            className="space-y-3"
          >
            <div className="space-y-1.5">
              <label>
                <strong>Email</strong>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                className="focus:outline-none focus:border focus:border-primary-color bg-transparent py-2 px-4 w-full border rounded outline-none"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label>
                <strong>Password</strong>
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="Enter your password"
                className="focus:outline-none focus:border focus:border-primary-color bg-transparent py-2 px-4 w-full border rounded outline-none"
                required
              />
            </div>

            <div className="form-control mt-6 w-full">
              <Button>Login</Button>
            </div>
          </form>
          <div>
            <h2 className="text-center italic pt-4 pb-2">Or</h2>
            <Button
              clickHandler={handleLoginWithGoogle}
              customClass="flex justify-center gap-2  bg-green-600 bg-opacity-80 items-center w-full hover:bg-green-700 hover:bg-opacity-80 transition duration-300"
            >
              <FaGoogle />
              Login with Google
            </Button>
          </div>
          <div className="text-center mt-4">
            <button>
              Don't have an account?{" "}
              <Link to={"/register"} className="link link-primary">
                Register
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
