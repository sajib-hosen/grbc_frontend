import { Metadata } from "next";
import Stats from "./_components/stat";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Stats",
};

const StatePage = () => {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold">Stats</h1>

      <Suspense fallback={<></>}>
        <Stats />
      </Suspense>
    </div>
  );
};

export default StatePage;
