import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignupComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className=" h-screen flex justify-center items-center">
        <div className="modal-box  bg-slate-300 text-black dark:bg-slate-900 dark:text-slate-300 shadow-2xl shadow-slate-700/70">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-xl  mb-4">Signup</h3>
            <div className=" space-y-4 md:space-y-6">
              {/* Name field */}
              <div className=" space-y-2">
                <label className=" text-base font-semibold">Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your email"
                  className=" input px-3 w-72 md:w-96 bg-slate-300 outline-black
                   dark:outline-slate-200 outline outline-1 border-none dark:bg-slate-900 dark:text-slate-300"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className=" text-red-500">Name field is required</span>
                )}
              </div>
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
                {errors.password && (
                  <span className=" text-red-500">
                    Password field is required
                  </span>
                )}
              </div>
              {/* Button field */}
              <div className=" flex justify-around items-center">
                <button className=" px-2 md:px-3 py-1 md:py-2 rounded-md bg-blue-500 text-white hover:bg-blue-800 duration-300">
                  Signup
                </button>
                <p>
                  Have an account❗{" "}
                  <Link
                    to="/login"
                    //   onClick={() =>
                    //     document.getElementById("my_modal_3").showModal()
                    //   }
                    className=" cursor-pointer underline text-blue-500"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupComponent;
