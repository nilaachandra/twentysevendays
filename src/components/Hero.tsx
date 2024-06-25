import React from "react";
import Button from "./Button";
import Waitlist from "./Waitlist";
import Disclaimer from "./Disclaimer";


const Hero = () => {
  return (
    <div className="w-full border-b border-black pb-8 flex flex-col justify-center items-center gap-3">
      <h1 className="w-full lg:w-1/2 text-4xl text-center font-bold">
        Start Your Journey to Be Addiction-Free Today!
      </h1>
      <p className="text-center font-medium">
        27Days is your ultimate baby step 👶 in ditching addictions. With
        AI-generated strategies 🤖 and daily motivation 💪, we’ll virtually hold
        your hand 🖐️ through this 27-day adventure. Because who doesn’t love a
        challenge? 😏 Ready for a better, addiction-free life? Let’s get started
        – you’ve only got your addiction to lose. 🚀
      </p>
      <Button>Check Out the mini MVP</Button>
      <p className="font-semibold mt-8">Also Join the Waitlist for the final Product</p>
      <Waitlist/>
      <Disclaimer/>
    </div>
  );
};

export default Hero;
