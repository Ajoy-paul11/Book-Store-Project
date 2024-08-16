import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function ContactComponent() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Message sent successful");
          form.current.reset();
        },
        (error) => {
          toast.error("Message failed to send");
          form.current.reset();
        }
      );
  };

  return (
    <>
      <div className=" h-screen flex justify-center items-center">
        <div className="modal-box  bg-slate-300 text-black dark:bg-slate-900 dark:text-slate-300 shadow-2xl shadow-slate-700/70">
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-2xl md:text-3xl pt-8  mb-4">
              Contact Us
            </h3>
            <div className=" space-y-4 md:space-y-6">
              {/* Name field */}
              <div className=" space-y-2">
                <label className=" text-base font-semibold">Name</label>
                <br />
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  className=" input px-3 w-72 md:w-96 bg-slate-300 outline-black
                       dark:outline-slate-200 outline outline-1 border-none dark:bg-slate-900 dark:text-slate-300"
                  {...register("user_name", { required: true })}
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
                  name="user_email"
                  placeholder="Enter your email"
                  className=" input px-3 w-72 md:w-96 bg-slate-300 outline-black
                       dark:outline-slate-200 outline outline-1 border-none dark:bg-slate-900 dark:text-slate-300"
                  {...register("user_email", { required: true })}
                />
                {errors.email && (
                  <span className=" text-red-500">Email is required</span>
                )}
              </div>
              {/* Password field */}
              <div className=" space-y-2">
                <label className=" text-base font-semibold">Message</label>
                <br />
                <textarea
                  type="message"
                  name="message"
                  placeholder="Enter your message"
                  className=" input h-28 px-3 w-72 md:w-96 bg-slate-300 outline-black
                       dark:outline-slate-200 outline outline-1 border-none dark:bg-slate-900 dark:text-slate-300"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className=" text-red-500">
                    Message field can't be empty
                  </span>
                )}
              </div>
              {/* Button field */}
              <div className=" flex justify-around items-center">
                <button
                  type="submit"
                  value="Send"
                  className=" px-2 md:px-3 py-1 md:py-2 rounded-md bg-blue-500 text-white hover:bg-blue-800 duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactComponent;
