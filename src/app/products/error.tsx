"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({ error, reset }: { error: Error, reset: () => void }) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  }
  return (
    <div>
      <p>Error : {error.message}</p>
      <button className="border py-[0.5px] px-3 rounded-sm cursor-pointer" onClick={reload}>Reset</button>
    </div>
  )
}
