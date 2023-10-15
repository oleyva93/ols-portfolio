import AnimatedLink from "@/components/animation-link";
import { getUserInfo } from "@/lib/queries";
import Image from "next/image";

export default async function Biography() {
  const [user] = await getUserInfo();

  return (
    <div className="flex [grid-template-columns:repeat(auto-fit,minmax(0,2fr))] p-4 gap-4">
      <div className="w-full">
        <section
          className="principal-img flex justify-between gap-4 flex-col h-full p-4 cursor-pointer main-header"
          id="biography-section"
        >
          <div className="grid gap-2">
            <h2 className="text-base text-end font-thin main-header-text">
              Biography
            </h2>
            <Image
              src={user.image}
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
            <p className="text-base font-thin">
              {user.presentation.profession}
            </p>
            <p className="text-base font-thin text-subtitle">
              {user.presentation.looking_for}
            </p>
          </div>
        </section>
        <AnimatedLink href="/">Go to Home Page</AnimatedLink>
      </div>
      <div className="w-full">Content</div>
    </div>
  );
}
