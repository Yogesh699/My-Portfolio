"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

function page() {
  return (
    <div className="w-full py-12 md:py-24  border-t ">
      <div className=" mx-14">
        <h2 className="text-2xl mb-4 font-bold tracking-tighter sm:text-3xl">
          Projects
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <img
                alt="Image"
                className="aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                height="225"
                src="/charity.png"
                width="600"
              />
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-2">
                <h3 className="font-bold">Project One: Charity App</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A charity app with admin panel and integeted stripe
                </p>
              </div>
              <Button
                size="sm"
                onClick={() =>
                  window.location.assign("https://charity-client.onrender.com/")
                }
              >
                View Project
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <img
                alt="Image"
                className="aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                height="225"
                src="/jate.png"
                width="600"
              />
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-2">
                <h3 className="font-bold">Project Two: JATE text Editor</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A web based text editor that also work on offline mode
                </p>
              </div>
              <Button
                size="sm"
                onClick={() =>
                  window.location.assign("https://jate-editor.onrender.com/")
                }
              >
                View Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default page;
