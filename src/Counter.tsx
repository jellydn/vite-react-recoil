import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const countAtom = atom({
  key: "countState",
  default: 0,
});
const doubleSelector = selector({
  key: "double",
  get: (opts) => {
    return opts.get(countAtom) * 2;
  },
});

function Double() {
  const doubleValue = useRecoilValue(doubleSelector);

  return <p>Double count is: {doubleValue}</p>;
}

export function Counter() {
  const [count, setCount] = useRecoilState(countAtom);

  return (
    <>
      <p>Hello Vite + React + Recoil!</p>
      <p>
        <button
          className="px-4 py-2 font-bold text-white bg-blue-400 rounded hover:bg-blue-dark"
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </button>
      </p>
      <Double />
    </>
  );
}
