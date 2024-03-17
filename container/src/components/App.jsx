import React, { lazy, Suspense } from "react";

const HomeApp = lazy(() => import("Home/homeApp"));

export default function App() {
  return (
    <div>
      <h1>You are in host app</h1>
      <Suspense fallback={<span>Loading...</span>}>
        <HomeApp />
      </Suspense>
    </div>
  );
}
