"use client";
import Image from "next/image";
// import Me from "../../../public/me7.jpg";

const Biography = ({ image, profession, looking_for }) => {
  return (
    <section
      className="principal-img flex justify-between gap-4 flex-col h-full p-4 cursor-pointer"
      id="biography-section"
    >
      <div className="grid gap-2">
        <h2 className="text-base text-end font-thin">Biography</h2>
        <Image
          src={image}
          width={100}
          height={150}
          alt="my biography photo"
          quality={100}
          priority={false}
          className="rounded-md w-full"
          unoptimized
        />
      </div>
      <div className="flex flex-col gap-0">
        <p className="text-base font-thin">{profession}</p>
        <p className="text-base font-thin text-subtitle">{looking_for}</p>
      </div>
    </section>
  );
};

export default Biography;
