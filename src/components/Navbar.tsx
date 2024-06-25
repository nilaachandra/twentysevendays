import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="w-full py-4 flex justify-between border-b border-black mb-3">
        <h1 className="text-2xl font-bold">27Days</h1>
        <Button>
            Get Started
        </Button>
    </div>
  );
};

export default Navbar;
