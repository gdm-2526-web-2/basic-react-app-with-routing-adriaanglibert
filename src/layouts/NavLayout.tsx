import { Outlet } from "react-router";
import Nav from "../components/Nav/Nav";
import Line from "../components/Line/Line";

const NavLayout = () => {
  return (
    <>
      <Nav />

      <main className="container">
        <Line />
        <Outlet />
      </main>
    </>
  );
};

export default NavLayout;
