import Image from "next/image";
import records from "../MOCK_DATA.json";

function Card() {
  const ImageData = [
    { src: "/images/ice.jpg", alt: "img" },
    { src: "/images/ice.jpg", alt: "img2" },
    { src: "/images/ice.jpg", alt: "img3" },
    { src: "/images/ice.jpg", alt: "img4" },
  ];

  return (
    <div className="grid grid-cols-1 bg-neutral-200 shadow-md rounded-lg p-6  w-[460px]">
      <div className="flex items-center space-x-4">
        <div className="relative  w-[50px] h-[50px] bg-[#ccb8f3] opacity-100 overflow-hidden rounded-full flex-shrink-0 ">
          <Image
            src={records[1].avatar}
            alt="avatar"
            width={70}
            height={70}
            className="w-full h-full"
          />
        </div>
        <div className="">
          <p className="text-xs font-extrabold text-neutral-900">
            TItle Lorem ipsum dolor sit, amet consectetur adipisicing .
          </p>
          <p className="text-xs font-normal text-gray-600  font-manrope">
            01-august-2024 ,10:00 pm , today
          </p>
        </div>
      </div>

      <main className="mt-4 font-sans">
        <div className="text-sm leading-[22px] font-normal text-custom-dark p-1">
          The area surrounding the manhole cover on Town Lane at its
          intersection with Acre St has dropped significantly causing..
        </div>

        <div className="flex justify-between items-center">
          <div className="text-xs leading-[20px] font-normal text-custom-gray">
            Sent to modi ji
          </div>
          <button className=" justify-center rounded-xl text-[11px] leading-[18px] font-normal text-purple-500 bg-purple-100 opacity-100 h-[28px] px-2 ">
            Read more
          </button>
        </div>

        <div className="flex flex-wrap gap-4 max-w-full overflow-auto  ">
          {ImageData.map((image, index) => (
            <div key={index} className="w-[calc(50%-0.5rem)]  flex-shrink-0">
              <Image
                src={image.src}
                alt={image.alt}
                width={150}
                height={50}
                className="object-cover flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
export default Card;
