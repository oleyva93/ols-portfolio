import AnimatedLink from "@/components/animation-link";
import { getUserInfo } from "@/lib/queries";
import Image from "next/image";

import "./biography.css";
import Me from "./me";

export default async function Biography() {
  const [user] = await getUserInfo();

  return (
    <main className="md:px-[1.5rem]">
      <header className="pt-10 pl-4 pb-4 flex gap-4 items-end flex-wrap main-header">
        <h1 className="text-2xl font-thin uppercase">
          <AnimatedLink href="/">{`${user?.name} ${user?.last_name}`}</AnimatedLink>
        </h1>
        <h3 className="text-base font-thin uppercase">
          <label className="text-subtitle">Index</label>
          <label className="main-header-text"> / Biography</label>
        </h3>
      </header>
      <section className="grid lg:[grid-template-columns:0.6fr_0.4fr] p-4 gap-4">
        <Me image={user.image} />
        <article
          className="flex w-full bg-card-secondary justify-between gap-4 flex-col h-full p-4 cursor-pointer main-header"
          id="biography-section"
        >
          <header>
            <label className="text-2xl font-thin">Skills</label>
          </header>
        </article>
      </section>
    </main>
  );
}
