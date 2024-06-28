import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Waitlist = () => {
  

  return (
    <label
      htmlFor=""
      className="w-full flex flex-col gap-3 items-center justify-center"
    >
      <Input
        type="text"
        placeholder="enter your email"
        className="lg:w-1/2 w-full border-2 border-gray-400 p-2 rounded-md"
        
      />
      <Button >Join the Waitlist</Button>
    </label>
  );
};

export default Waitlist;
