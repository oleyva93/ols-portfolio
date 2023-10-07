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

const Home = () => {
  return (
    <main className="main-grid">
      <article className="[grid-area:one] section">
        <Presentation />
      </article>
      <article className="[grid-area:two] section bg-card-secondary hover:bg-card-secondary-hover">
        <Biography />
      </article>
      <article className="[grid-area:three] section">
        <Interests />
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
};

export default Home;
