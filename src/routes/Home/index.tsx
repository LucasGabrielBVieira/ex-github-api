import { Outlet } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <>
      <header className="header-home">
        <h1>Github API</h1>
      </header>
      <Outlet />
    </>
  );
}

export default Home;
