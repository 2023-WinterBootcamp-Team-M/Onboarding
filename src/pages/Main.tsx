import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import Intro from "../components/Intro";

const MainPage = () => {
  return (
    <div>
      <div>
        <Title />
      </div>
      <div>
        <Intro />
      </div>
    </div>
  );
};

export default MainPage;
