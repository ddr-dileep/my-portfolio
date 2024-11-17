"use client";
import TypeTextAnimation from "@/components/type-animation/TypeLetters";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-100 min-h-screen bg-orange-200">
      <div className="w-3/4 mx-auto flex justify-between">
        <div className="p-1 w-1/2 h-screen flex justify-center items-center">
          <div>
            <Image
              loading="lazy"
              priority={false}
              src="/image/my-image.png"
              alt="logo image"
              width={300}
              height={300}
              className="rounded-full border shadow-emerald-300 drop-shadow-lg"
            />
          </div>
        </div>
        <div className="p-1 w-1/2 h-screen flex items-center">
          <div>
            <h3 className="text-3xl sm:text-2xl py-3 font-bold text-black">
              Hi there! 👋,
            </h3>
            <h1 className="text-4xl sm:text-3xl font-bold text-black">
              I'm{" "}
              <span className="text-rose-900 font-extrabold">
                Dileep Raloti
              </span>
            </h1>
            <div className="mt-3">
              <TypeTextAnimation />
            </div>
            <div className="mt-5">
              <button
                onClick={() => {
                  console.log("About me");
                }}
                className="border px-4 py-2 rounded-md shadow-md text-green-600 border-green-600"
              >
                About me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
