import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>리액트 기초</h1>
      <nav>
        <Link to="/movieApp">task_1</Link>
        <br/>
        <Link to="/parent">task_2</Link>
        <br/>
        <Link to="/globalState">task_3</Link>
        <br/>
        <Link to="/movieList">task_4</Link>
        <br/>
        <Link to="/exceptionMovie">task_6</Link>
        <br/>
        <Link to="/tsMovie">task_8</Link>
      </nav>
    </div>
  );
};

export default Home;
