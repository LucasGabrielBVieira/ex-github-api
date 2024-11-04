import { Outlet } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <header className="header-home">
        <Link to={'/'}>Github API</Link>
      </header>
      <Outlet />
    </>
  );
}

export default Home;
