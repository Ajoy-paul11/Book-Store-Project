import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function BookSection() {
  const [books, setBooks] = useState([]);
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    const getBooksData = async () => {
      try {
        const response = await axios.get(
          "https://book-store-backend-3an0.onrender.com/api/v1/books"
        );
        const data = response.data.data.filter(
          (data) => data.category === "Free"
        );
        setBooks(data);
        setSpin(false);
      } catch (error) {
        console.log("Error occurred to fetch the book data", error);
      }
    };
    getBooksData();
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "black",
          borderRadius: "99px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "black", borderRadius: "99px" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="  max-w-screen-2xl container mx-auto md:px-20 px-4 bg-slate-200 text-black dark:bg-slate-900 dark:text-slate-300">
        <div>
          <h1 className=" text-xl font-semibold pb-2">Free Offered Courses </h1>
          <p>Here are some freely available books that you can download</p>
        </div>
        <div className=" px-4 mb-12">
          {spin ? (
            <>
              <span className="loading loading-spinner text-primary"></span>
              <span className="loading loading-spinner text-secondary"></span>
              <span className="loading loading-spinner text-accent"></span>
              <span className="loading loading-spinner text-neutral"></span>
              <span className="loading loading-spinner text-info"></span>
              <span className="loading loading-spinner text-success"></span>
              <span className="loading loading-spinner text-warning"></span>
              <span className="loading loading-spinner text-error"></span>
            </>
          ) : (
            <>
              <Slider {...settings} className="">
                {books.map((item) => (
                  <Cards item={item} className={"w-96"} key={item._id} />
                ))}
              </Slider>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BookSection;
