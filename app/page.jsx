import Link from "next/link";
import Image from "next/image";
import Offers from "./ui/Offers";
import Demands from "./ui/Demands";

const page = () => {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between w-full mb-4 bg-primary">
        <div className="md:w-1/2 p-4 text-quaternary">
          <h1 className="text-6xl font-bold mb-4">Welcome to kachabazar.</h1>
          <p className="text-3xl font-semibold">
            Bangladesh's biggest online fresh produce market.
          </p>
        </div>
        {/* images */}
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="relative w-1/3 h-72">
            <Image
              src="/farmer4.avif"
              alt="Farmer 4"
              fill
              className="object-cover object-[25%]"
            />
          </div>

          <div className="relative w-1/3 h-72">
            <Image
              src="/truck.png"
              alt="Truck"
              fill
              className="object-cover object-[30%]"
            />
          </div>

          <div className="relative w-1/3 h-72">
            <Image src="/store.jpg" alt="Store" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 w-full px-4">
        <Link href="/auth/signup" className="sign-up-button">
          Sell at kachabazar
        </Link>
        <Link href="/auth/signup" className="sign-up-button">
          Buy at kachabazar
        </Link>
      </div>

      <div className="w-full p-4 space-y-6 flex flex-col justify-center items-center">
        <Offers />
        <Demands />
      </div>
    </main>
  );
};

export default page;
