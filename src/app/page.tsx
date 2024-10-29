import Image from "next/image";

export default function Home() {
  return (
    <div className="w-100 min-h-screen bg-orange-200">
      <div className="w-3/4 mx-auto flex justify-between">
        <div className="border w-1/2 h-screen flex justify-center items-center">
          <div>
            <Image
              src="/image/my-image.png"
              alt="logo image"
              width={300}
              height={300}
              className="rounded-full border shadow-emerald-300 drop-shadow-lg"
            />
          </div>
        </div>
        <div className="border w-1/2 h-screen flex items-center">
          <div>
            <h3 className="text-3xl py-3 font-bold text-black">
              Hi there! 👋,
            </h3>
            <h1 className="text-4xl font-bold text-black">
              I'm{" "}
              <span className="text-rose-900 font-extrabold">
                Dileep Raloti
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
