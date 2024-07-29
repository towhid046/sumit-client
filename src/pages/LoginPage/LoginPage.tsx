import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageHeader from "./../../components/shared/PageHeader/PageHeader";
import Button from "../../components/shared/Button/Button";

const LoginPage: React.FC = () => {
  return (
    <>
      <PageHeader url="/login" label="Login">
        Login
      </PageHeader>
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white p-8 border border-gray-200 rounded">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form className="space-y-3">
            <div className="space-y-1.5">
              <label>
                <strong>Email</strong>
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
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
              <Button customClass="flex justify-center gap-2 bg-base-content items-center w-full hover:bg-gray-700">
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
