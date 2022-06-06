import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsPlayFill } from "react-icons/bs";

function Card_video_box({ data }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <>
      <Link href="/videos/video-slug">
        <div
          className="flex-1 group flex justify-center items-center 
        bg-black h-[190px] overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full  ">
            <div className="h-full w-full">
              <Image
                src={data.thumnail}
                alt={data.name}
                loading="lazy"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className={`group-hover:scale-110 duration-700 opacity-70 group-hover:opacity-100
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              }`}
                onLoadingComplete={() => setLoading(false)}
              />
              <div
                className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 z-10 text-4xl
             text-white duration-300 hover:scale-110 cursor-pointer opacity-50 group-hover:opacity-100"
              >
                <BsPlayFill />
              </div>
            </div>
          </div>
          <div className="mt-auto p-4 text-white">
            <p className="font-bold text-xl">{data.name}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card_video_box;
