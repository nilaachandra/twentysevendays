// "use client";

// import React, { useEffect, useState } from "react";
// import useUser from "../hook/useUser";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
// import { createClient } from "@/lib/supabase/browserclient";
// import { generateStrategies } from "./actions";
// import { useStrategy } from "@/contexts/StrategyContext";
// import { Skeleton } from "@/components/ui/skeleton";

// const Homepage: React.FC = () => {
//   const { isFetching, refetch, data } = useUser();
//   const { output, setOutput, loading, setLoading } = useStrategy();
//   const router = useRouter();
//   const [addiction, setAddiction] = useState<string>("");

//   useEffect(() => {
//     if (!isFetching && (!data || data.length === 0)) {
//       router.push("/error");
//     }
//   }, [isFetching, data, router]);
//   //function to create and save addiction
//   const saveAddiction = async (addiction: string, userId: string) => {
//     try {
//       const supabase = createClient();
//       const { error } = await supabase
//         .from("profile")
//         .update({ addiction: addiction })
//         .eq("id", userId)
//         .select();
//       const { data } = await generateStrategies(addiction || "");
//       setLoading(false);
//       setOutput(data);

//       setAddiction("");
//       refetch();
//     } catch (error) {
//       toast.error("Error Adding Addictions");
//     }
//   };

//   // const mutation = useMutation({
//   //   mutationFn: () => saveAddiction(addiction, data ? data[0]?.id : ""),
//   //   onSuccess: () => {
//   //     toast.success("Your Addiction Was Added!");
//   //     refetch();
//   //     async () => {
//   //       setLoading(true);
//   //       try {
//   //         const { data } = await generateStrategies(
//   //           addiction || ""
//   //         );
//   //         setLoading(false);
//   //         setOutput(data);
//   //         console.log(data);
//   //       } catch (error) {
//   //         toast.error("Could Not generate")
//   //       }
//   //     }

//   //   },
//   //   onError: (error: any) => {
//   //     console.error("Error Updating Addiction", error);
//   //     toast.error("There was an error updating your addiction.");
//   //   },
//   // });

//   //function to send the addiction data to the backend
//   // const handleGenerate = async () => {};

//   if (isFetching) {
//     return (
//       <div className="w-full min-h-[60vh] grid lg:grid-cols-2 gap-2 grid-cols-1 lg:grid-rows-1 grid-rows-2">
//         <div className="leftdiv w-full lg:pr-8 pr-0">
//           <Skeleton className="h-3 w-full bg-slate-400" />
//           <Skeleton className="h-3 w-full mt-2 bg-slate-400" />
//           <Skeleton className="h-3 mt-6 w-full bg-slate-400" />
//           <Skeleton className="h-28 mt-2 w-full bg-slate-400" />
//           <Skeleton className="h-7 mt-2 w-full bg-slate-400" />
//         </div>
//         <div className="rightdiv tips w-full lg:pt-24 pt-4 h-full and motivation lg:border-l lg:pl-8 pl-0 lg:border-t-0 border-t border-orange-700">
//           <Skeleton className="h-5 w-full bg-slate-400" />
//           <Skeleton className="h-3 mt-3 w-full bg-slate-400" />
//           <Skeleton className="h-3 mt-2 w-full bg-slate-400" />
//           <Skeleton className="h-3 mt-2 w-full bg-slate-400" />
//         </div>
//       </div>
//     );
//   }

//   if (data && data.length > 0) {
//     const user = data[0];
//     return (
//       <div className="w-full lg:min-h-[60vh] min-h-[30vh] grid lg:grid-cols-2 gap-2 grid-cols-1 lg:grid-rows-1 grid-rows-2">
//         <div className="lg:pr-8 pr-0">
//           <p>
//             Welcome to 27days,{" "}
//             <span className="font-semibold text-orange-500">
//               {user.display_name}!
//             </span>
//           </p>
//           <p>We are happy to help you fight💪 your Addictions!</p>

//             <p className="mt-3">Please Tell Us About Your Addiction</p>
//             <textarea
//               value={addiction}
//               onChange={(e) => setAddiction(e.target.value)}
//               rows={4}
//               placeholder="eg.: I have an addiction of smoking"
//               className="border-orange-500 p-2 border w-full rounded-md focus:outline-orange-500 "
//             ></textarea>
//             <Button
//               disabled={addiction ? false : true}
//               className="w-full mt-2"
//               onClick={() => saveAddiction(addiction, user.id)}
//             >
//               Generate Strategies to get rid of My Addiction
//             </Button>

//         </div>
//         <div className="tips w-full h-full and motivation lg:border-l lg:pl-8 pl-0 lg:border-t-0 border-t border-orange-700">
//           {output.data.length === 0 && (
//             <div className="w-full lg:pt-24 pt-3 flex flex-col justify-center items-center p-4">
//               <h1 className="text-xl text-center font-semibold text-orange-500">
//                 You Have Not Generated Any Strategies 🙄
//               </h1>
//               <p className="mt-2 text-center text-gray-700">
//                 Oh, so you thought the strategies would just magically appear?
//                 <br />
//                 Give it a try and hit that button already! 🪄✨
//               </p>
//             </div>
//           )}
//           {output.data.length > 0 && (
//             <>
//               {loading ? (
//                 <div className="flex flex-col gap-2">
//                   <Skeleton className="h-8 w-full bg-slate-400" />
//                   <Skeleton className="h-3 w-full bg-slate-400" />
//                   <Skeleton className="h-3 w-full bg-slate-400" />
//                   <Skeleton className="h-3 w-full bg-slate-400" />
//                   <Skeleton className="h-3 w-full bg-slate-400" />
//                   <Skeleton className="h-3 w-full bg-slate-400" />
//                   <Skeleton className="h-3 w-full bg-slate-400" />
//                   <Skeleton className="h-3 w-full bg-slate-400" />
//                   <Skeleton className="h-3 w-full bg-slate-400" />
//                   <Skeleton className="h-7 mt-3 w-full bg-slate-400" />

//                 </div>
//               ) : (
//                 <div className="pl-7">
//                   <p className="font-bold text-lg">
//                     As if life is not complicated enough, here are your next
//                     thrilling challenges. Enjoy!
//                   </p>
//                   <ul>
//                     {output.data.map((item, index) => (
//                       <li className="font-medium list-disc text-lg" key={index}>
//                         {item.strategy}
//                       </li>
//                     ))}
//                   </ul>
//                   <Button
//                     className="mt-4 w-full"
//                     onClick={async () => {
//                       setLoading(true);
//                       try {
//                         const { data } = await generateStrategies("done");
//                         setLoading(false);
//                         setOutput(data);
//                       } catch (error) {}
//                     }}
//                   >
//                     Mark As Done
//                   </Button>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     );
//   }

//   return null;
// };

// export default Homepage;

"use client";
import Arrow from "@/components/Arrow";
import TaskCard from "@/components/TaskCard";
import { Button } from "@/components/ui/button";
import React from "react";

const Homepage = () => {
  const tasks = 3;
  const completedTasks = 2;
  return (
    <div className="w-full min-h-screen">
      <section className="profile w-full space-y-3 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Hey Nilaa, Welcome to 27Days!</h1>
        <p>We are happy to help you fight💪 your Addictions!</p>
        <div className="picture w-full lg:min-h-[30vh] min-h-[22vh] flex justify-center items-center relative">
          <div className="border border-red-500 w-[100px] h-[100px] rounded-full absolute top-4"></div>
          <span className="lg:left-[38%] left-[16%] -top-8  absolute">
            <Arrow />
          </span>
          <span className="lg:right-[38%] right-[16%] top-12 rotate-180 absolute">
            <Arrow />
          </span>
        </div>
      </section>

      <section className="flex items-center justify-center lg:w-1/2 w-full mx-auto space-y-2 flex-col">
        <h1>Please tell us about your addiction!</h1>
        <textarea
          rows={3}
          className="w-full rounded-md border-black border"
        ></textarea>
        <Button>Generate Tasks</Button>
      </section>
      <section className="tasks space-y-3 w-full lg:w-1/2 mx-auto my-2">
        <h1 className="text-xl font-bold">Here are your tasks for today!</h1>
        <div className="w-full">
          <p className="text-xl font-semibold">
            Progress :{" "}
            <span>
              {completedTasks}/{tasks}
            </span>
          </p>
          <div className="w-full border-orange-500 border rounded-md">
            <div
              className={`h-2 bg-orange-500 rounded-md `}
              style={{ width: `${(completedTasks / tasks) * 100}%` }}
            ></div>
          </div>
        </div>
        <TaskCard emoji="🫂" task="This is a dummy task" isCompleted={true} />
        <TaskCard emoji="🫂" task="This is a dummy task" isCompleted={false} />
        <TaskCard emoji="🫂" task="This is a dummy task" isCompleted={true}/>
      </section>
    </div>
  );
};

export default Homepage;
