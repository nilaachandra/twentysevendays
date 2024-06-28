"use client"

import Link from "next/link"
import { FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { createClient } from "@/lib/supabase/browserclient";

export default function LoginForm() {

    const handleOAuthLogin = (provider: "github" | "google") => {
        const supabase = createClient()
        supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: location.origin + "/auth/callback?next=/home"
            }
        })
    }

    
  return (
    <div className="w-full min-h-[70vh] flex justify-center items-center">
      <Card className="mx-auto max-w-sm border-2 border-orange-500">
      <CardHeader>
        <CardTitle className="text-xl">Log In to 27Days</CardTitle>
        <CardDescription>
          Please Log In with this provider to continue to our app!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Button onClick={() => handleOAuthLogin("google")} className="w-full flex justify-center items-center gap-2 font-bold">
            <FaGoogle size={18}/> <span>Google</span>
          </Button>

          {/* todo: fix github login */}
          {/* <Button onClick={() => handleOAuthLogin("github")}  className="w-full flex justify-center items-center gap-2 font-bold">
          <FiGithub size={18}/> <span>Github</span>

          </Button> */}
        </div>
        <CardDescription className="mt-3">
          By loging in you give consent on sharing information about your addiction on our platform.
        </CardDescription>
      </CardContent>
    </Card>
    </div>
  )
}
