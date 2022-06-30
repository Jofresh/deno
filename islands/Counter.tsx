/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`;

  useEffect(() => {
    if (count > 0)
      console.log("Positive value")
    else if (count < 0)
      console.log("Negative value")
    else
      console.log("Zero")
  }, [count])

  return (
    <div class={tw`flex gap-2 w-full`}>
      <p class={tw`flex-grow-1 font-bold text-xl`}>{count}</p>
      <button
        class={btn}
        onClick={() => setCount(count - 1)}
        disabled={!IS_BROWSER}
      >
        -1
      </button>
      <button
        class={btn}
        onClick={() => setCount(count + 1)}
        disabled={!IS_BROWSER}
      >
        +1
      </button>
    </div>
  );
}
