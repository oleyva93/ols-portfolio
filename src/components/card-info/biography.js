"use client";
import Image from "next/image";
import AnimatedLink from "../animation-link";

const Biography = ({ image, profession, looking_for }) => {
  return (
    <AnimatedLink href="/biography">
      <section
        className="principal-img flex justify-between gap-4 flex-col h-full p-4 cursor-pointer main-header"
        id="biography-section"
      >
        <div className="grid gap-2">
          <h2 className="text-base text-end font-thin main-header-text">
            Biography
          </h2>
          <Image
            src={image}
            width={100}
            height={150}
            alt="my biography photo"
            quality={100}
            priority={false}
            className="rounded-md w-full gallery"
            unoptimized
          />
        </div>
        <div className="flex flex-col gap-0">
          <p className="text-base font-thin">{profession}</p>
          <p className="text-base font-thin text-subtitle">{looking_for}</p>
        </div>
      </section>
    </AnimatedLink>
  );
};

export default Biography;
