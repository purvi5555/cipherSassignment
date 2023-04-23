import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LoaderSpin } from "../loader/Loader";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { setUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  // const location = useLocation();
  // const from = location?.state?.from?.pathname || '/';
  const navigate = useNavigate();

  // if (token) {
  //     navigate(from, { replace: true })
  // }

  // user login-------------------
  const handleLogin = (data) => {
    setLoading(true);

    // sava information to the database----------
    fetch(`http://localhost:5000/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result?.status === 200) {
          setLoading(false);
          setLoginError("");
          toast.success(`${result?.message}`);
          console.log(result?.user);
          // save local
          const newUser = {
            firstName: result?.user?.firstName,
            lastName: result?.user?.lastName,
            email: result?.user?.email,
            image: result?.user?.image,
            phone: result?.user?.phone,
          };
          setUser(newUser);
          localStorage.setItem("user", JSON.stringify(newUser));
          const aboutMe = {
            about: result?.user?.about,
          };
          localStorage.setItem("about", JSON.stringify(aboutMe));
          const OnTheWeb = {
            LinkedIn: result?.user?.LinkedIn,
            Github: result?.user?.Github,
            Facebook: result?.user?.Facebook,
            Twitter: result?.user?.Twitter,
            Instagram: result?.user?.Instagram,
            Website: result?.user?.Website,
          };
          localStorage.setItem("OnTheWeb", JSON.stringify(OnTheWeb));
          const proInfor = {
            highestEdu: result?.user?.highestEdu,
            current: result?.user?.current,
          };
          localStorage.setItem("proInfor", JSON.stringify(proInfor));
          const interests = { interests: result?.user?.interests };
          localStorage.setItem("interests", JSON.stringify(interests));

          navigate("/myProfile");
        } else {
          setLoginError(`${result?.message}`);
          setLoading(false);
        }
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div className="w-96 p-7 shadow-xl mx-2">
        <h2 className="text-4xl py-4 text-center text-info font-bold">
          Sign In
        </h2>
        <p>
          <small>Email:</small>{" "}
          <strong className="ml-2 md:ml-16">tanwarpurnima05@gmail.com</strong>
        </p>
        <p>
          <small>Password:</small> <strong className="ml-10">Demo@05</strong>
        </p>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-x">
            <label className="label">
              {" "}
              <span className="label-text ">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Your email"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text ">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
              placeholder="********"
            />

            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>

          <button
            className="mx-0  mt-5 btn btn-accent text-white w-full max-w-xs"
            type="submit"
          >
            {loading ? <LoaderSpin className={"text-white"} /> : "Sign In"}
          </button>
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p className="my-2 ">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
