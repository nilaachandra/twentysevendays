
import Button from "./Button";

const Waitlist = () => {
  

  return (
    <label
      htmlFor=""
      className="w-full flex flex-col gap-3 items-center justify-center"
    >
      <input
        type="text"
        placeholder="enter your email"
        className="lg:w-1/2 w-full border border-black p-2 rounded-md"
        
      />
      <Button >Join the Waitlist</Button>
    </label>
  );
};

export default Waitlist;
