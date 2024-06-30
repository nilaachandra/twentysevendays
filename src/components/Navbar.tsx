"use client";
import React from "react";

import { FaHandsHelping } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Link from "next/link";
import { Button } from "./ui/button";
import useUser from "@/app/hook/useUser";
import { createClient } from "@/lib/supabase/browserclient";
import { useQueryClient } from "@tanstack/react-query";
import { redirect, useRouter } from "next/navigation";
import { url } from "inspector";
const Navbar = () => {
  const { isFetching, data, refetch } = useUser();
  const queryClient = useQueryClient();
  const router = useRouter(); //make sure to import from next/navigation

  const handleLogout = async () => {
    const supabase = createClient();
    queryClient.clear();
    await supabase.auth.signOut();
    router.refresh();
    
    refetch();
  };

  return (
    <div className="w-full py-4 flex justify-between border-b border-black mb-3">
      <Link href="/">
        {" "}
        <Button className="text-2xl font-bold flex gap-2 items-center border-orange-500 border p-1 rounded-md bg-orange-500 text-white">
          <FaHandsHelping size={24} /> 27Days
        </Button>
      </Link>
      {/* <Button className="font-semibold">
        <a href="https://x.com/nilaacodes" target="_blank">
          <FaTwitter size={24} />
        </a>
      </Button> */}

      <div>
        <Link href="/login">
          {data ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Button>Login</Button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
