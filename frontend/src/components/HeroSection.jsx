import React from "react";
import banner from "/banner.png";

function HeroSection() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 bg-slate-200 text-black dark:bg-slate-900 dark:text-slate-300 flex flex-col md:flex-row my-10">
        <div className=" w-full md:w-1/2 mt-10 md:mt-28 order-2 md:order-1">
          <div className=" space-y-8">
            <h1 className=" text-4xl font-bold">
              Get lost in the world of words. Start your reading journey
              <span className=" text-blue-600"> today!!!</span>
            </h1>
            <p className="text-1xl">
              Welcome to{" "}
              <span className=" font-bold text-black dark:text-white">
                {" "}
                Paul<i className=" text-blue-600">Store</i>
              </span>{" "}
              your one-stop online bookstore. Browse through our vast selection
              of books across various genres, authors, and topics. Enjoy
              convenient shopping, fast shipping, and great deals on your
              favorite reads.
            </p>
            <label className="input input-bordered flex items-center gap-2 bg-white dark:bg-slate-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-100"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow outline-none"
                placeholder="Email"
              />
            </label>
          </div>
          <button className="btn text-white btn-primary dark:btn-primary mt-5">
            Send Email
          </button>
        </div>
        <div className=" w-full md:w-1/2 order-1 ">
          <img
            src={banner}
            className=" w-96 h-96  mx-auto md:mt-28"
            alt="banner-image"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
