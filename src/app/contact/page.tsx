"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import Action from "./Action";
import { Loader, Loader2 } from "lucide-react";

function Page() {
  const [state, dispatch] = useFormState(Action, null);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contact Me
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Have a question or want to work together? Send me a message.
          </p>
        </div>
        <div className="mx-auto w-full max-w-[400px] space-y-2">
          <form className="space-y-2" action={dispatch}>
            <div className="grid sm:grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Email" required type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Message" required />
            </div>
            <DynamicButton />
          </form>
          {state?.message ? (
            <p className="mt-2 bg-emerald-400 text-white p-2 rounded-md">
              {state?.message}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}

function DynamicButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? <Loader2 className="animate-spin mr-2" /> : ""}
      Send Message
    </Button>
  );
}

export default Page;
