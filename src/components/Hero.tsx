import React from "react";
import Button from "./Button";
import Waitlist from "./Waitlist";
import Disclaimer from "./Disclaimer";

const Hero = () => {
  return (
    <div className="w-full border-b border-black pb-8 flex flex-col justify-center items-center gap-3">
      <h1 className="w-full lg:w-1/2 lg:text-5xl text-4xl text-center font-bold">
        Start Your <span className="text-orange-500">Journey</span> to Be{" "}
        <span className="text-orange-500">Addiction-Free</span> Today!
      </h1>
      <p className="text-center font-medium">
        <span className="text-orange-500 font-bold">27Days</span> is your
        ultimate baby step 👶 in ditching addiction. With AI-generated{" "}
        <span className="text-orange-500 font-bold">strategies</span> 🤖 and
        daily <span className="text-orange-500 font-bold">motivation</span>💪,
        we’ll virtually hold your hand 🖐️ through this <span className="text-orange-500 font-bold">27-day adventure</span>. Because
        who doesn’t love a challenge? 😏 Ready for a better, <span className="text-orange-500 font-bold">Addiction-Free </span> 
         life? Let’s get started – you’ve only got your <span className="text-orange-500 font-bold">addiction</span> to <span className="text-orange-500 font-bold">lose</span>. 🚀
      </p>
      <Button>Check Out the mini MVP</Button>
      <p className="font-semibold mt-8">
        Also Join the <span className="text-orange-500 font-bold">Waitlist</span> for the final Product
      </p>
      <Waitlist />
      <Disclaimer />
    </div>
  );
};

export default Hero;
