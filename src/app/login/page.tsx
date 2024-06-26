import Button from "@/components/Button";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const page = () => {
  return (
    <div className="w-full min-h-[50vh] flex justify-center items-center">
      <div className="logincard flex flex-col gap-2 w-full p-4 rounded-md lg:w-1/2 border-2 border-orange-500">
        <h1 className="font-semibold text-lg leading-none">
          Create an Account by simply Logging in through these providers!
        </h1>
        <Button className="flex justify-center items-center">
          <FaGoogle size={30} />
        </Button>
        <Button className="flex justify-center items-center">
          <FaTwitter size={30} />
        </Button>
        <Button className="flex justify-center items-center">
          <FaFacebookF size={30} />
        </Button>
        <p className="text-xs leading-none text-center">
          By Creating an account you consent on giving consent about your
          addictions and agree to our{" "}
          <a href="" className="underline text-orange-500">
            Terms of Usage
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default page;
