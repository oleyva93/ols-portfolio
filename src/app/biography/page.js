import AnimatedLink from "@/components/animation-link";
import { getUserInfo } from "@/lib/queries";
import Image from "next/image";

export default async function Biography() {
  const [user] = await getUserInfo();

  return (
    <main>
      <header className="pt-10 pl-10 pb-4 flex gap-4 items-end">
        <h1 className="text-2xl font-thin uppercase">
          <AnimatedLink href="/">{`${user?.name} ${user?.last_name}`}</AnimatedLink>
        </h1>
        <h3 className="text-base font-thin uppercase">
          <label className="text-subtitle">Index</label>
          <label className="main-header-text"> / Biography</label>
        </h3>
      </header>
      <section className="flex [grid-template-columns:repeat(auto-fit,minmax(0,2fr))] p-4 gap-4">
        <article
          className="flex w-full bg-card-secondary justify-between gap-4 flex-col h-full p-4 cursor-pointer main-header"
          id="biography-section"
        >
          <Image
            src={user.image}
            width={350}
            height={350}
            alt="my biography photo"
            quality={100}
            priority={false}
            className="rounded-md gallery"
            unoptimized
          />
        </article>
      </section>
    </main>
  );
}
