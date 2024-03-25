import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

function page() {
  return (
    <section className="w-full  py-28 md:py-40  border-t">
      <div className="container  px-16 md:px-40">
        <div className="  m-auto items-start gap-6 ">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                About Me
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                I am a passionate full-stack developer with a focus on creating
                elegant and user-friendly web applications. With experience in a
                variety of programming languages and frameworks, she is always
                eager to take on new challenges and learn new technologies.
              </p>
            </div>
            <div className="space-y-4 lg:w-[50%]">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Skills
              </h2>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-4 ">
                <div className="inline-block rounded-lg bg-zinc-900  px-3 py-1 text-sm dark:bg-gray-800">
                  HTML
                </div>
                <div className="inline-block rounded-lg bg-zinc-900  px-3 py-1 text-sm dark:bg-gray-800">
                  CSS
                </div>
                <div className="inline-block rounded-lg bg-zinc-900  px-3 py-1 text-sm dark:bg-gray-800">
                  JavaScript
                </div>
                <div className="inline-block rounded-lg bg-zinc-900  px-3 py-1 text-sm dark:bg-gray-800">
                  React
                </div>
                <div className="inline-block rounded-lg bg-zinc-900  px-3 py-1 text-sm dark:bg-gray-800">
                  Node.js
                </div>
                <div className="inline-block rounded-lg bg-zinc-900  px-3 py-1 text-sm dark:bg-gray-800">
                  MongoDB
                </div>
                <div className="inline-block rounded-lg bg-zinc-900  px-3 py-1 text-sm dark:bg-gray-800">
                  TypeScript
                </div>
                <div className="inline-block rounded-lg bg-zinc-900  px-3 py-1 text-sm dark:bg-gray-800">
                  Next.js
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
