import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function BookSection() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooksData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/books");
        const data = response.data.data.filter(
          (data) => data.category === "Free"
        );
        setBooks(data);
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem? Lorem, ipsum dolor. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Eligendi, aliquid!
          </p>
        </div>
        <div className=" px-4 mb-12">
          <Slider {...settings} className="">
            {books.map((item) => (
              <Cards item={item} className={"w-96"} key={item._id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default BookSection;
