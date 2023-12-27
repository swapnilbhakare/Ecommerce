import React from "react";
import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const HomeCarousel = () => {
  const data = [
    {
      id: 1,
      img: "830b0b3bff28e292",
    },
    {
      id: 2,
      img: "850993b3fd3b450f",
    },
    {
      id: 3,
      img: "89c73e9f2b02fdae",
    },
  ];
  return (
    <Carousel>
      {data.map((item) => (
        <Carousel.Item key={item.id}>
          <Image
            src={`https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/${item.img}.jpg?q=20`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
