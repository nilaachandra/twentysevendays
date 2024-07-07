import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { createClient } from "@/lib/supabase/browserclient";
import { toast } from "sonner";
import { ReloadIcon } from "@radix-ui/react-icons";
const Waitlist = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleWaitlist = async (email: string) => {
    // Simple regex to check for @ symbol
    const containsAtSymbol = /@+/;

    if (!email || !containsAtSymbol.test(email)) {
      toast.error("Please provide a valid email!");
    } else {
      setLoading(true);
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from("waitlist")
          .insert({ email: email })
          .select();

        if (error) {
          throw error;
        }

        toast.success(
          "Congratulations, You have Successfully Joined the Waitlist! Meanwhile Try Our MVP"
        );
        setLoading(false);
        setEmail("");
      } catch (error) {
        toast.error("Could Not Join the Waitlist! Please try again.");
        setLoading(false); // Ensure loading is turned off in case of an error
      }
    }
  };

  return (
    <label
      htmlFor=""
      className="w-full flex flex-col gap-3 items-center justify-center"
    >
      <Input
        type="email"
        placeholder="enter your email"
        className="lg:w-1/2 w-full border-2 border-gray-400 p-2 rounded-md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {loading ? (
        <Button disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button onClick={() => handleWaitlist(email)}>Join the Waitlist</Button>
      )}
    </label>
  );
};

export default Waitlist;
