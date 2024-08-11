import React from "react";

function Cards({ item, className }) {
  return (
    <>
      <div className=" my-6 pl-3 ">
        <div
          className={`card bg-base-100 shadow shadow-gray-600 hover:scale-105 duration-300 lg:${className} bg-slate-200 text-black dark:bg-slate-900 dark:text-slate-300`}
        >
          <figure>
            <img src={item.image} alt="card-image" />
          </figure>
          <div className="card-body shadow shadow-gray-600 rounded-2xl">
            <h2 className="card-title">
              {item.genre}
              <div className="badge bg-blue-600 outline-2 border-blue-600 text-white">
                {item.category}
              </div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge outline-1 border-white p-3 hover:bg-blue-600 hover:text-white duration-300 transition-all ease-in">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
