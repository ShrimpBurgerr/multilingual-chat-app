'use client'

import { useEffect, useState } from 'react';
import { useSubscriptionStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

function UpgradeBanner() {
  const subscription = useSubscriptionStore((state) => state.subscription);
  const isPro = subscription?.role === "pro";
  const router = useRouter();
console.log(subscription);
  if (subscription === null || isPro) return null;

  return (
    <Button
      onClick={() => router.push("/register")}
      className="w-full rounded-none bg-gradient-to-r from-[#00c9a7] to-[#8e2de2] text-center text-white px-5 py-2 hover:from-[#00c9a7] hover:to-[#8e2de2] hover:shadow-md hover:opacity-75 transition-all"
    >
      Upgrade to Pro to unlock all features!
    </Button>
  );
}

export default UpgradeBanner;
