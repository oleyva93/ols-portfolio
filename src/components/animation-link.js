"use client";
import useAnimatedRouter from "@/hooks/useAnimatedRouter";
import Link from "next/link";
import React from "react";

export default function AnimatedLink({ href, children }) {
  const { animatedRoute } = useAnimatedRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        console.log("Animated link clicked!");
        animatedRoute(href);
      }}
      passHref
      // prefetch={true}
    >
      {children}
    </Link>
  );
}
