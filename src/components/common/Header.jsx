import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className=" py-3 px-5 container mx-auto">
      <nav className="flex items-center justify-between">
        <a href="/">Page logo</a>
        <div className="flex items-center gap-x-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#faq">Faq's</a>
          <div className="ml-2">
            User-Name= {user ? user.name : "Not Found"}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
