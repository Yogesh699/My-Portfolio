"use client";
import Link from "next/link";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FlagIcon, Github, LinkedinIcon, MountainIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();
  return (
    <main className="flex-1 border-t">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid max-w-5xl mx-auto items-center gap-6 lg:grid-cols-3 lg:gap-10">
            <div className="space-y-4 lg:col-span-2">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-zinc-900 px-3 py-1 text-sm dark:bg-gray-800">
                  Software Engineer
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Yogesh
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Experienced full-stack developer with a passion for creating
                  elegant solutions.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant={"outline"}
                    onClick={() =>
                      window.location.assign("https://github.com/Yogesh699")
                    }
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Github
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant={"outline"}
                    onClick={() =>
                       window.location.assign("https://www.linkedin.com/in/yog-esh6991")
                     }
                  >
                    <LinkedinIcon className="w-4 h-4 mr-2" />
                    Linkedin
                  </Button>
                </div>
              </div>
            </div>
            <img
              alt="Avatar"
              className="mx-auto rounded-full overflow-hidden object-cover object-center aspect-square lg:order-last"
              height="400"
              src="/unnamed.jpg"
              width="400"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
