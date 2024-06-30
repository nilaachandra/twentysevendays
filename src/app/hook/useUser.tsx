"use client";
import { createClient } from "@/lib/supabase/browserclient";
import { useQuery } from "@tanstack/react-query";

const initUser = {
  addiction: "",
  created_at: "",
  display_name: "",
  email: "",
  id: "",
  img_url: "",
};

const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const supabase = createClient();
      const { data } = await supabase.auth.getSession();
      if (data.session?.user) {
        //fetch user info
        const { data: user } = await supabase
          .from("profile")
          .select("*")
          .eq("id", data.session.user.id);
        return user;
      }
    },
  });
};

export default useUser;
