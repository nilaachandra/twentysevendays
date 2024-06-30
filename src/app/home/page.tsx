"use client";

import React, { useEffect, useState } from "react";
import useUser from "../hook/useUser";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/browserclient";
import { useMutation } from "@tanstack/react-query";
import { generateStrategies } from "./actions";
import { useStrategy } from "@/contexts/StrategyContext";
import { set } from "zod";
import { Skeleton } from "@/components/ui/skeleton";

const Homepage: React.FC = () => {
  const { isFetching, refetch, data } = useUser();
  const { output, setOutput, loading, setLoading } = useStrategy();
  const router = useRouter();
  const [addiction, setAddiction] = useState<string>("");

  useEffect(() => {
    if (!isFetching && (!data || data.length === 0)) {
      router.push("/error");
    }
  }, [isFetching, data, router]);
  //function to create and save addiction
  const saveAddiction = async (addiction: string, userId: string) => {
    try {
      const supabase = createClient();
      const { error } = await supabase
        .from("profile")
        .update({ addiction: addiction })
        .eq("id", userId)
        .select();
      const { data } = await generateStrategies(addiction || "");
      setLoading(false);
      setOutput(data);
      setAddiction("");
      refetch();
    } catch (error) {
      toast.error("Error Adding Addictions");
    }
  };

  // const mutation = useMutation({
  //   mutationFn: () => saveAddiction(addiction, data ? data[0]?.id : ""),
  //   onSuccess: () => {
  //     toast.success("Your Addiction Was Added!");
  //     refetch();
  //     async () => {
  //       setLoading(true);
  //       try {
  //         const { data } = await generateStrategies(
  //           addiction || ""
  //         );
  //         setLoading(false);
  //         setOutput(data);
  //         console.log(data);
  //       } catch (error) {
  //         toast.error("Could Not generate")
  //       }
  //     }

  //   },
  //   onError: (error: any) => {
  //     console.error("Error Updating Addiction", error);
  //     toast.error("There was an error updating your addiction.");
  //   },
  // });

  //function to send the addiction data to the backend
  // const handleGenerate = async () => {};

  if (isFetching) {
    return (
      <div className="w-full min-h-[60vh] grid lg:grid-cols-2 gap-2 grid-cols-1 lg:grid-rows-1 grid-rows-2">
        <div className="leftdiv w-full lg:pr-8 pr-0">
          <Skeleton className="h-3 w-full bg-slate-400" />
          <Skeleton className="h-3 w-full mt-2 bg-slate-400" />
          <Skeleton className="h-3 mt-6 w-full bg-slate-400" />
          <Skeleton className="h-28 mt-2 w-full bg-slate-400" />
          <Skeleton className="h-7 mt-2 w-full bg-slate-400" />
        </div>
        <div className="rightdiv tips w-full lg:pt-24 pt-3 h-full and motivation lg:border-l lg:pl-8 pl-0 lg:border-t-0 border-t border-orange-700">
          <Skeleton className="h-5 w-full bg-slate-400" />
          <Skeleton className="h-3 mt-3 w-full bg-slate-400" />
          <Skeleton className="h-3 mt-2 w-full bg-slate-400" />
          <Skeleton className="h-3 mt-2 w-full bg-slate-400" />
        </div>
      </div>
    );
  }

  if (data && data.length > 0) {
    const user = data[0];
    return (
      <div className="w-full min-h-[60vh] grid lg:grid-cols-2 gap-2 grid-cols-1 lg:grid-rows-1 grid-rows-2">
        <div className="w-full lg:pr-8 pr-0">
          <p>
            Welcome to 27days,{" "}
            <span className="font-semibold text-orange-500">
              {user.display_name}!
            </span>
          </p>
          <p>We are happy to help you fight💪 your Addictions!</p>

          <>
            <p className="mt-3">Please Tell Us About Your Addiction</p>
            <textarea
              value={addiction}
              onChange={(e) => setAddiction(e.target.value)}
              rows={4}
              placeholder="eg.: I have an addiction of smoking"
              className="border-orange-500 p-2 border w-full rounded-md focus:outline-orange-500 "
            ></textarea>
            <Button
              disabled={addiction ? false : true}
              className="w-full mt-2"
              onClick={() => saveAddiction(addiction, user.id)}
            >
              Generate Strategies to get rid of My Addiction
            </Button>
          </>

          <div>
            {/* <Card className="motivation p-3 flex justify-center items-center min-h-28 mt-3 border-orange-500">
              <p className="font-semibold text-lg">
                Success is not for the faint of heart. It's for those who get
                knocked down, dust themselves off, and refuse to stay down. Keep
                going, no matter what.
              </p>
            </Card> */}
            <div className="">
              {/* <p className="mt-3 font-semibold">Your Progress : 1/27 Days</p> */}
              {/* progress bar */}
            </div>
          </div>
        </div>
        <div className="tips w-full h-full and motivation lg:border-l lg:pl-8 pl-0 lg:border-t-0 border-t border-orange-700">
          {output.data.length === 0 && (
            <div className="w-full lg:pt-24 pt-3 flex flex-col justify-center items-center p-4">
              <h1 className="text-xl font-semibold text-orange-500">
                You Have Not Generated Any Strategies 🙄
              </h1>
              <p className="mt-2 text-center text-gray-700">
                Oh, so you thought the strategies would just magically appear?
                <br />
                Give it a try and hit that button already! 🪄✨
              </p>
            </div>
          )}
          {output.data.length > 0 && (
            <>
              {loading ? (
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-8 w-full bg-slate-400" />
                  <Skeleton className="h-3 w-full bg-slate-400" />
                  <Skeleton className="h-3 w-full bg-slate-400" />
                  <Skeleton className="h-3 w-full bg-slate-400" />
                  <Skeleton className="h-3 w-full bg-slate-400" />
                  <Skeleton className="h-3 w-full bg-slate-400" />
                  <Skeleton className="h-3 w-full bg-slate-400" />
                  <Skeleton className="h-3 w-full bg-slate-400" />
                  <Skeleton className="h-3 w-full bg-slate-400" />
                  <Skeleton className="h-7 mt-3 w-full bg-slate-400" />

                </div>
              ) : (
                <div>
                  <p className="font-bold text-lg">
                    As if life is not complicated enough, here are your next
                    thrilling challenges. Enjoy!
                  </p>
                  <ul>
                    {output.data.map((item, index) => (
                      <li className="font-medium list-disc text-lg" key={index}>
                        {item.strategy}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-4 w-full"
                    onClick={async () => {
                      setLoading(true);
                      try {
                        const { data } = await generateStrategies("done");
                        setLoading(false);
                        setOutput(data);
                      } catch (error) {}
                    }}
                  >
                    Mark As Done
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default Homepage;
