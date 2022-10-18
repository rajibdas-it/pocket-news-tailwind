import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/SharedPages/Footer";
import Header from "../Pages/SharedPages/Header";
import LeftSideNav from "../Pages/SharedPages/LeftSideNav";
import RightSideNav from "../Pages/SharedPages/RightSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-[90%] mx-auto grid grid-cols-12 gap-3 ">
        <div className="col-span-2 hidden lg:block">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-7">
          <Outlet></Outlet>
        </div>
        <div className="col-span-3">
          <RightSideNav></RightSideNav>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
