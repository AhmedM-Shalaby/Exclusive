"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function TimeDown() {
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const diff = Math.max(0, endOfDay - now);
      const totalSeconds = Math.floor(diff / 1000);

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-10 md:my-10 mt-10 items-center justify-around flex-col-reverse md:flex-row min-h-[500px] bg-black text-white">
      <div className="flex flex-col gap-5 items-center md:items-start md:mx-12">
        <h3 className="text-green text-sm">Categories</h3>
        <h2 className="xl:w-[500px] text-center md:text-start text-2xl sm:text-3xl lg:text-5xl font-semibold font-inter">
          Enhance Your Listening Experience
        </h2>

        <div className="font-semibold text-base flex flex-row gap-6 text-black">
          <div className="flex flex-col items-center justify-center py-3 bg-white rounded-full">
            <span>{timeLeft.hours}</span>
            <span className="font-light text-xs w-[62px] text-center">
              Hours
            </span>
          </div>
          <div className="flex flex-col items-center justify-center py-3 bg-white rounded-full">
            <span>{timeLeft.minutes}</span>
            <span className="font-light text-xs w-[62px] text-center">
              Minutes
            </span>
          </div>
          <div className="flex flex-col items-center justify-center py-3 bg-white rounded-full">
            <span>{timeLeft.seconds}</span>
            <span className="font-light text-xs w-[62px] text-center">
              Seconds
            </span>
          </div>
        </div>

        <Link href="/products">
          <button className="cursor-pointer  bg-green-500 mb-8 py-4 px-12 rounded ease-in-out duration-300 transform hover:scale-105 hover:-translate-y-1 ">
            <span>Buy Now!</span>
          </button>
        </Link>
      </div>

      <div className="mt-4">
        <Image
          src="/JBL.png"
          alt="JBL Boombox 2"
          width={500}
          height={300}
          className="transition-transform duration-300 transform hover:-translate-y-4 hover:scale-110 hover:motion-safe:animate-pulse"
        />
      </div>
    </div>
  );
}

export default TimeDown;
