"use client";
import Image from "next/image";
// import Me from "../../../public/me7.jpg";

const Biography = ({ profession, capabilities }) => {
  return (
    <section
      className="principal-img flex justify-between gap-4 flex-col h-full p-4 cursor-pointer"
      id="biography-section"
    >
      <div className="grid gap-2">
        <h2 className="text-base text-end font-thin">Biography</h2>
        <Image
          src="https://i.pinimg.com/564x/50/cc/71/50cc719dc279aaeea54ff4ddb34bf595.jpg"
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
        <p className="text-base font-thin text-subtitle">{capabilities}</p>
      </div>
    </section>
  );
};

export default Biography;
