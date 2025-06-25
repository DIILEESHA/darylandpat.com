import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Join from "../../components/join/Join";
import Soon from "../../components/soon/Soon";
import Play from "../../components/playlist/Play";
import Head from "../../components/header/Head";

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0); // Scroll to top
  // }, []);

  return (
    <div>
      <Head />
      <Join id="" />
      <Soon />
      {/* <Play id="playlist" /> */}
    </div>
  );
};

export default Home;
