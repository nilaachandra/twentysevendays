import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { createClient } from "@/lib/supabase/browserclient";
import { toast } from "sonner";

const Waitlist = () => {
  const [email, setEmail] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const handleWaitlist = async (email:string) => {
    setLoading(true)
    try {
      const supabase = createClient()
      const {data, error} = await supabase.from('waitlist').insert({email: email}).select()
      toast.success("Congratulations, You have Succesfully Joined the Waitlist! Meanwhile Try Our MVP")
      setLoading(false)
      setEmail("")
    } catch (error) {
      toast.error("Could Not Join the Waitlist! Please try again.")
    }
  }

  return (
    <label
      htmlFor=""
      className="w-full flex flex-col gap-3 items-center justify-center"
    >
      <Input
        type="text"
        placeholder="enter your email"
        className="lg:w-1/2 w-full border-2 border-gray-400 p-2 rounded-md"
        value={email}
        
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={() => handleWaitlist(email)}>Join the Waitlist</Button>
    </label>
  );
};

export default Waitlist;
