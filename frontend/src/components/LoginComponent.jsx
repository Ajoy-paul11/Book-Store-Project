import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function LoginComponent() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("https://book-store-backend-3an0.onrender.com/api/v1/users/login", userData)
      .then((res) => {
        if (res.data.data) {
          toast.success("User logged In successfully🙏");
          localStorage.setItem("Users", JSON.stringify(res.data.data));
          navigate("/");
          window.location.reload();
        }
      })
      .catch((err) => {
        if (err.response) {
          extractErrorAndAlert(err.response.data);
        } else {
          alert("An error occurred, Please try again");
        }
      });
  };

  function extractErrorAndAlert(htmlResponse) {
    // Use a regular expression to find the error message
    const errorRegex = /<pre>Error: (.+?)<br>/;
    const match = htmlResponse.match(errorRegex);

    if (match && match[1]) {
      // If a match is found, show it in an alert
      toast.error("Error: " + match[1]);
    } else {
      // If no match is found, show a generic error message
      toast.error("An error occurred. Please try again.");
    }
  }

  return (
    <>
      <div>
        <div className=" h-screen flex justify-center items-center">
          <div className="modal-box bg-slate-300 text-black dark:bg-slate-900 dark:text-slate-300 shadow-2xl shadow-slate-700/70">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-xl  mb-4">Login</h3>
              <div className=" space-y-4 md:space-y-6">
                {/* Email field */}
                <div className=" space-y-2">
                  <label className=" text-base font-semibold">Email</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className=" input px-3 w-72 md:w-96 bg-slate-300 outline-black
                   dark:outline-slate-200 outline outline-1 border-none dark:bg-slate-900 dark:text-slate-300"
                    {...register("email", { required: true })}
                  />
                  <br className=" hidden lg:block" />
                  {errors.email && (
                    <span className=" text-red-500">Email is required</span>
                  )}
                </div>
                {/* Password field */}
                <div className=" space-y-2">
                  <label className=" text-base font-semibold">Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className=" input px-3 w-72 md:w-96 bg-slate-300 outline-black
                   dark:outline-slate-200 outline outline-1 border-none dark:bg-slate-900 dark:text-slate-300"
                    {...register("password", { required: true })}
                  />
                  <br className=" hidden lg:block" />
                  {errors.password && (
                    <span className=" text-red-500">
                      Password field is required
                    </span>
                  )}
                </div>
                {/* Button field */}
                <div className=" flex justify-around items-center">
                  <button className=" px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-800 duration-300">
                    Login
                  </button>
                  <p className=" flex flex-col items-center">
                    <span> Don't have an account❓</span>
                    <Link
                      to="/signup"
                      className=" cursor-pointer underline text-blue-500"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginComponent;
