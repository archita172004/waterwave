"use client";
import { useState } from "react";
import Image from "next/image";
import records from "../MOCK_DATA.json";

const HomePage = () => {
  const ImageData = [
    { src: "/images/puddle.webp", alt: "img" },
    { src: "/images/puddle.webp", alt: "img2" },
    { src: "/images/puddle.webp", alt: "img3" },
    { src: "/images/puddle.webp", alt: "img4" },
  ];

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row w-full max-w-4xl space-x-4 bg-white shadow-md rounded-lg p-6">
        <div className="relative  w-[69px] h-[69px] bg-[#ccb8f3] opacity-100 overflow-hidden rounded-full flex-shrink-0 ">
          <Image
            src={records[1].avatar}
            alt="avatar"
            width={70}
            height={70}
            className="w-full h-full"
          />
        </div>
        <main className="flex-grow pl-1 ">
          <span className="font-bold leading-8 ">{records[0].username}</span>
          <div className="w-full ">
            {records[2].about}
            <br></br>
            {records[3].description}
          </div>
          {/* <div className="flex flex-row gap-4 w-52 h-36  "> */}
          <div className="flex flex-wrap gap-4 max-w-full overflow-auto  ">
            {ImageData.map((image, index) => (
              <div key={index} className="w-[300px] h-[150px] flex-shrink-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={150}
                  className="w-[300px] h-[150px] flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default HomePage;
