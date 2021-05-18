import React, { Suspense } from "react";

import { RecoilRoot } from "recoil";

import "./App.css";
import { GithubProfile } from "./GithubProfile";
import { ErrorBoundary } from "./ErrorBoundary";
import { Counter } from "./Counter";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <RecoilRoot>
          <div className="min-w-screen bg-gray-800 flex items-center justify-center">
            <div className="w-full mx-auto rounded-lg border border-gray-700 p-8 lg:py-12 lg:px-14 text-gray-300">
              <div className="mb-10">
                <h1 className="text-2xl font-bold">
                  <i className="mdi mdi-star text-yellow-300 text-3xl leading-none align-bottom" />{" "}
                  Counter Example (Atom & Selector)
                </h1>
              </div>
              <div className="mb-10">
                <Counter />
              </div>
            </div>
          </div>
          <div className="min-w-screen bg-gray-800 flex items-center justify-center">
            <div className="w-full mx-auto rounded-lg border border-gray-700 p-8 lg:py-12 lg:px-14 text-gray-300">
              <div className="mb-10">
                <h1 className="text-2xl font-bold">
                  <i className="mdi mdi-star text-yellow-300 text-3xl leading-none align-bottom" />
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

          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {" | "}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
            {" | "}
            <a
              className="App-link"
              href="https://recoiljs.org/docs/introduction/getting-started"
              target="_blank"
              rel="noopener noreferrer"
            >
              Recoil Docs
            </a>
          </p>
        </RecoilRoot>
      </ErrorBoundary>
    </div>
  );
}

export default App;
