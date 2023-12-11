// src/components/Menu.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 p-4 container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <div className="md:ml-auto md:mr-auto flex flex-wrap items-end text-base justify-items-end">
        <a className="mr-2 text-slate-50">Home</a>
        <a className="mr-5 text-slate-50">Skills</a>
        <a className="mr-5 text-slate-50">Projects</a>
        <a className="mr-5 text-slate-50">Education</a>
        <a className="mr-5 text-slate-50">Contact</a>
      </div>
    </header>
  );
};

export default Header;
