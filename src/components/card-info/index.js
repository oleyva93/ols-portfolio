import { getUserInfo } from "@/lib/queries";

import Biography from "./biography";
import Contents from "./contents";
import Footer from "./footer";
import Interests from "./interests";
import Photography from "./photography";
import Presentation from "./presentation";
import Projects from "./projects";
import Reading from "./reading";
import Writing from "./writing";

import "./card.css";

async function Home() {
  const [user] = await getUserInfo();

  return (
    <main className="main-grid">
      <article className="[grid-area:one] section">
        <Presentation user={user} />
      </article>
      <article className="[grid-area:two] section bg-card-secondary hover:bg-card-secondary-hover">
        <Biography
          image={user.image}
          profession={user.presentation.profession}
          looking_for={user.presentation.looking_for}
        />
      </article>
      <article className="[grid-area:three] section">
        <Interests interests={user.interests} />
      </article>
      <article className="[grid-area:four] section bg-card-secondary hover:bg-card-secondary-hover">
        <Photography />
      </article>
      <article className="[grid-area:five] section bg-card-secondary hover:bg-card-secondary-hover">
        <Contents />
      </article>
      <article className="[grid-area:six] section bg-card-secondary hover:bg-card-secondary-hover">
        <Projects />
      </article>
      <article className="[grid-area:seven] section bg-card-secondary hover:bg-card-secondary-hover">
        <Reading />
      </article>
      <article className="[grid-area:eight] section bg-card-secondary hover:bg-card-secondary-hover">
        <Writing />
      </article>
      <article className="[grid-area:nine] section">
        <Footer />
      </article>
    </main>
  );
}

export default Home;
