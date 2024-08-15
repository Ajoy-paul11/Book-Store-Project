import React from "react";

function AboutComponent() {
  return (
    <div className="p-10 lg:p-20 mt-10 ">
      <div className="mockup-browser border border-black dark:border-white bg-slate-200 text-black dark:bg-slate-900 dark:text-slate-300">
        <div className="mockup-browser-toolbar  ">
          <div className="input text-blue-400">
            <a href="https://linkedin.com/in/ajoypaul" target="_blank">
              Visit the Codebase of this Project
            </a>
          </div>
        </div>
        <div>
          <div className=" hidden lg:block">
            <div className=" diff aspect-[16/9] h-72 mt-4 px-8 overflow-y-auto">
              <div className="diff-item-1">
                <div className="bg-primary text-primary-content grid place-content-center text-xl font-black">
                  Welcome to PaulStore, your cozy digital nook for book lovers.
                  We're not just selling books but sharing stories that inspire
                  and transform. Our carefully curated collection offers both
                  bestsellers and hidden gems. Join our community where readers
                  connect, discover new favorites, and receive personalized
                  recommendations from fellow book enthusiasts. At PaulStore, we
                  nurture the love of reading, one page at a time. Whether
                  you're a devoted bookworm or rediscovering the joy of reading,
                  PaulStore is your gateway to countless adventures. Explore our
                  virtual shelves and find your next great read.
                </div>
              </div>
              <div className="diff-item-2">
                <div className="bg-base-200 grid place-content-center text-xl text-white px-6">
                  Welcome to PaulStore, your cozy digital nook for book lovers.
                  We're not just selling books but sharing stories that inspire
                  and transform. Our carefully curated collection offers both
                  bestsellers and hidden gems. Join our community where readers
                  connect, discover new favorites, and receive personalized
                  recommendations from fellow book enthusiasts. At PaulStore, we
                  nurture the love of reading, one page at a time. Whether
                  you're a devoted bookworm or rediscovering the joy of reading,
                  PaulStore is your gateway to countless adventures. Explore our
                  virtual shelves and find your next great read.
                </div>
              </div>
              <div className="diff-resizer"></div>
            </div>
          </div>
          <div className=" px-4 block lg:hidden">
            <div
              tabIndex={0}
              className="collapse collapse-arrow border-base-300 bg-base-200 border"
            >
              <div className="collapse-title text-xl font-medium text-white">
                Know more About Us
              </div>
              <div className="collapse-content">
                <p className=" text-white">
                  Welcome to PaulStore, your cozy digital nook for book lovers.
                  We're not just selling books but sharing stories that inspire
                  and transform. Our carefully curated collection offers both
                  bestsellers and hidden gems. Join our community where readers
                  connect, discover new favorites, and receive personalized
                  recommendations from fellow book enthusiasts. At PaulStore, we
                  nurture the love of reading, one page at a time. Whether
                  you're a devoted bookworm or rediscovering the joy of reading,
                  PaulStore is your gateway to countless adventures. Explore our
                  virtual shelves and find your next great read.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center gap-x-4 px-4 py-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className=" h-10 w-10 mix-blend-darken"
            id="github"
          >
            <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className=" h-10 w-10"
            id="Linked"
          >
            <g fill="#000000" class="color000000 svgShape">
              <path
                d="M16 0C7.163 0 0 7.163 0 16c0 8.836 7.163 16 16 16s16-7.164 16-16c0-8.837-7.163-16-16-16z"
                fill="#000000"
                class="color000000 svgShape"
              ></path>
              <path
                fill="#06a8e3"
                d="M24.294 22.942v-6.137c0-3.288-1.755-4.818-4.096-4.818-1.889 0-2.735 1.039-3.206 1.768v-1.517h-3.558c.047 1.005 0 10.704 0 10.704h3.558v-5.978c0-.319.023-.639.117-.867.257-.639.842-1.301 1.825-1.301 1.288 0 1.803.981 1.803 2.42v5.727l3.557-.001zM9.685 10.777c1.24 0 2.013-.823 2.013-1.85-.023-1.05-.773-1.849-1.99-1.849s-2.012.799-2.012 1.849c0 1.028.772 1.85 1.967 1.85h.022zm1.779 12.165V12.238H7.907v10.704h3.557z"
                class="colorffffff svgShape"
              ></path>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 102 102"
            className=" w-10 h-10"
            id="instagram"
          >
            <defs>
              <radialGradient
                id="a"
                cx="6.601"
                cy="99.766"
                r="129.502"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".09" stop-color="#fa8f21"></stop>
                <stop offset=".78" stop-color="#d82d7e"></stop>
              </radialGradient>
              <radialGradient
                id="b"
                cx="70.652"
                cy="96.49"
                r="113.963"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#8c3aaa"></stop>
              </radialGradient>
            </defs>
            <path
              fill="url(#a)"
              d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
            ></path>
            <path
              fill="url(#b)"
              d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
            ></path>
            <path
              fill="#fff"
              d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
              transform="translate(-422.637 -426.196)"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
