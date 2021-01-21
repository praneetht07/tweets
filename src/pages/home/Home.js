import React from "react";
import Description from "./components/Description";

import Lists from "./components/Lists";

const Home = () => (
  <section className="section-display">
    <div className="home">
      <div className="home__left"><Lists /></div>
      <div className="home__right"><Description /></div>
    </div>
  </section>
);

export default Home;
