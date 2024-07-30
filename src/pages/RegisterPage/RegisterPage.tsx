import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import Button from "../../components/shared/Button/Button";
import PageHeader from "./../../components/shared/PageHeader/PageHeader";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "./../../hooks/useAuth";
import { toast } from "react-toastify";
import { Inputs } from "../../CommonTypes/CommonTypes";
import useScrollToTop from "../../hooks/useScrollToTop";

const RegisterPage: React.FC = () => {
  useScrollToTop();
  const { register, handleSubmit } = useForm<Inputs>();
  const { registerUser, updateUserProfile } = useAuth();
  const navigate: NavigateFunction = useNavigate();

  const handleUserRegisterForm: SubmitHandler<Inputs> = async (data) => {
    const { name, email, imgObject, password } = data;
    const imgUrl =
      "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600";

    try {
      await registerUser(email, password);
      await updateUserProfile(name, imgUrl);
      toast.success("Registration Success!!");
      navigate("/");
    } catch (error: unknown) {
      toast.error(error?.message);
    }
  };

  return (
    <>
      <PageHeader url="/register" label="Register">
        Registration
      </PageHeader>
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white p-8 border border-gray-200 rounded">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <form
            onSubmit={handleSubmit(handleUserRegisterForm)}
            className="space-y-3"
          >
            <div className="space-y-1.5">
              <label>
                <strong>Your Name</strong>
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="Enter your name"
                className="focus:outline-none focus:border focus:border-primary-color bg-transparent py-2 px-4 w-full border rounded outline-none"
                required
              />
            </div>
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
                <strong>Profile Photo</strong>
              </label>
              <input
                type="file"
                {...register("imgObject")}
                placeholder="Enter your Photo"
                className="focus:outline-none focus:border focus:border-primary-color bg-transparent py-1.5 cursor-pointer px-4 w-full border rounded outline-none"
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
              <Button>Register</Button>
            </div>
          </form>
          <div className="text-center mt-4">
            <button>
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Login
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
