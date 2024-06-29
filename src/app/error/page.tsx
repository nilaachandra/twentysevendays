import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

const error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
      <h1 className="text-5xl font-bold mb-4">😕 404 😕</h1>
      <p className="text-xl font-semibold mb-8">
        Oops! Looks like you have taken a wrong turn 🚧. This page is as lost as you are. Maybe it is off finding itself 🌍 or just taking a nap 🛌.
      </p>
      <p className=" mb-8">
        Why not head back to safer grounds? Or, you know, you could always <Link href="/"><p className="text-blue-500 underline">return to the homepage</p></Link> and pretend this never happened. We won&apos;t tell anyone 🤐.
      </p>
      <p className="">
        If you think this is a mistake, feel free to <Link href="/contact"><p className="text-blue-500 underline">contact us</p></Link> and let us know. Or not. We understand, mistakes happen.
      </p>
      <div className="mt-12">
        <Link href="/">
          <Button>Take Me Home 🏠</Button>
        </Link>
      </div>
    </div>
  )
};

export default error
  