import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cards from "./Cards";
import axios from "axios";

function CourseComponent() {
  const [books, setBooks] = useState([]);

  const bookData = useLoaderData();

  useEffect(() => {
    setBooks(bookData.data);
  }, [bookData]);

  if (!bookData) {
    return <dev>Loading</dev>;
  }

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div className="pt-36 flex flex-col justify-center items-center text-center ">
        <h1 className=" font-semibold text-2xl md:text-4xl">
          We're delighted to have you{" "}
          <span className=" text-blue-600">Here!:)</span>
        </h1>
        <p className=" mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          exercitationem fuga ab aspernatur tempore corrupti, maiores, placeat
          cumque fugit culpa beatae ratione minima earum est odio distinctio
          accusantium doloremque blanditiis! Harum esse enim quia.
        </p>
        <button className=" mt-6 px-2 py-1 md:px-4 md:py-2 bg-blue-600 text-white text-xl rounded-md hover:bg-blue-800 duration-300">
          <Link to="/">Back</Link>
        </button>
      </div>
      <div className=" mt-12 grid grid-cols-1 md:grid-cols-4 place-items-center mb-4">
        {books.map((item) => (
          <Cards item={item} className={"w-72"} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default CourseComponent;

export const getAllBooksLoader = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/v1/books");
    return response.data;
  } catch (error) {
    console.error("Error to get books ", error);
    return { error: "Failed to load books" };
  }
};
