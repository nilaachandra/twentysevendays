import React from "react";
import Button from "./Button";
import { FaHandsHelping } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="w-full py-4 flex justify-between border-b border-black mb-3">
        <h1 className="text-2xl font-bold flex gap-2 items-center border-orange-500 border p-1 rounded-md bg-orange-500 text-white"><FaHandsHelping size={24}/> 27Days</h1>
        <Button className="font-semibold">
          <a href="https://x.com/nilaacodes" target="_blank"><FaTwitter size={24}/></a>
        </Button>
    </div>
  );
};

export default Navbar;
