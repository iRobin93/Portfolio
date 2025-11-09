import React from "react";
import { emner } from "./data/weekData";
import EmneList from "./components/EmneList";
import CommentSection from "./components/CommentSection";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 p-6 sm:p-10">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-6 sm:p-10 border border-orange-100">
        <h1 className="text-3xl sm:text-4xl font-bold text-orangeBrand mb-8 text-center">
          Hei, dette er oversikt over mine oppgaver per emne og uke.
          <br />
          <span className="text-lg font-medium text-gray-600">
            Hilsen{" "}
            <a
              href="https://github.com/iRobin93"
              target="_blank"
              className="underline hover:text-orange-500 transition"
            >
              iRobin93
            </a>
          </span>
        </h1>

        <EmneList emner={emner} />

        <div className="mt-10">
          <CommentSection />
        </div>
      </div>
    </div>
  );
};

export default App;
