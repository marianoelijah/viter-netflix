import React from "react";
import Banner from "./Banner";
import SliderMovie from "./SliderMovie";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="py-24 mt-20 bg-dark">
      <SliderMovie title="Top Picks" filter="Top Picks" />
      <SliderMovie title="Fantasy" filter="Fantasy"/>
      <SliderMovie title="Drama, Thriller, Love" filter="Drama, Thriller, Love"/>
      <SliderMovie title="Asian" filter="Asian"/>

      </div>
    </div>
  );
};

export default HomePage;