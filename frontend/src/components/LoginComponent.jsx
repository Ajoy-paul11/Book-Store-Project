import React from "react";

function LoginComponent() {
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box bg-slate-300 text-black dark:bg-slate-900 dark:text-slate-300">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-xl  mb-4">Login</h3>
            <div className=" space-y-6">
              {/* Email field */}
              <div className=" space-y-2">
                <label className=" text-base font-semibold">Email</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your email"
                  className=" input px-3 w-96 bg-slate-300 outline-black
                   dark:outline-slate-200 outline outline-1 border-none dark:bg-slate-900 dark:text-slate-300"
                />
              </div>
              {/* Password field */}
              <div className=" space-y-2">
                <label className=" text-base font-semibold">Password</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your password"
                  className=" input px-3 w-96 bg-slate-300 outline-black
                   dark:outline-slate-200 outline outline-1 border-none dark:bg-slate-900 dark:text-slate-300"
                />
              </div>
              {/* Button field */}
              <div className=" flex justify-around">
                <button className=" px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-800 duration-300">
                  Login
                </button>
                <p>
                  Don't have an account{" "}
                  <span className=" cursor-pointer underline text-blue-500">
                    Sign up
                  </span>
                </p>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default LoginComponent;
