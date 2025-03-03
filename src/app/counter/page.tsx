import { Metadata } from "next";
import Counter from "./Counter";

export const metadata: Metadata = {
  title: {
    absolute: "Counter",
  },
}

export default function CounterPage() {
  return (
    <div>
      <Counter />
    </div>
  )
}
