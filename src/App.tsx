import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";

import "./App.css";
import { Counter } from "./Counter";
import { ErrorBoundary } from "./ErrorBoundary";
import { GithubProfile } from "./GithubProfile";

function App() {
  return (
    <div className="App">
      <header className="p-4">
        <div className="flex items-center justify-center bg-opacity-50">
          <div className="mx-2 text-center">
            <h1 className="text-4xl font-extrabold xs:text-5xl md:text-6xl">
              <a
                target="_blank"
                className="hover:text-blue-400"
                href="https://recoiljs.org/docs/introduction/getting-started"
              >
                Recoil
              </a>{" "}
              Example
            </h1>
          </div>
        </div>
      </header>
      <ErrorBoundary>
        {/* @ts-expect-error Type '{ children: Element[]; }' is not assignable to type 'IntrinsicAttributes & RecoilRootProps'.ts(2322) */}
        <RecoilRoot>
          <div className="flex items-center justify-center">
            <div className="p-8 mx-auto text-gray-300 bg-gray-800 border border-gray-700 rounded-lg min-w-min lg:py-12 lg:px-14">
              <div className="mb-10">
                <h1 className="text-2xl font-bold">
                  <i className="text-3xl leading-none text-yellow-300 align-bottom mdi mdi-star" />{" "}
                  Counter Example (Atom & Selector)
                </h1>
              </div>
              <div className="mb-10">
                <Counter />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
            <div className="p-8 mx-auto text-gray-300 bg-gray-800 border border-gray-700 rounded-lg min-w-min lg:py-12 lg:px-14">
              <div className="mb-10">
                <h1 className="text-2xl font-bold">
                  <i className="text-3xl leading-none text-yellow-300 align-bottom mdi mdi-star" />
                  Github Finder Example (Atom & Async Selector)
                </h1>
              </div>
              <div className="flex justify-center">
                <div className="mb-10">
                  <Suspense fallback="Loading...">
                    <GithubProfile />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </RecoilRoot>
      </ErrorBoundary>
      <footer className="w-full px-2 py-4 mt-10 bg-gray-100">
        <div className="flex items-center justify-between my-4">
          <p className="inline-flex px-2 pt-6 text-blue-500">
            Built with
            <svg
              fill="#e53e3e"
              viewBox="0 0 24 24"
              className="w-5 h-5 pt-px mx-1 text-red-600"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <a
              className="hover:text-blue-700"
              href="https://github.com/jellydn"
            >
              by Dung Huynh Duc (Kaka).
            </a>
          </p>
          <div className="flex items-center">
            <a href="mailto:dung@productsway.com">
              <svg
                fill="none"
                className="w-6 h-6 mr-6 text-blue-600"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            <a href="https://twitter.com/jellydn">
              <svg
                className="w-6 h-6 mr-6 text-blue-600 fill-current"
                viewBox="0 0 512 512"
              >
                <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
