import React, { useState } from "react";
import type { Emne } from "../data/weekData";
import WeekList from "./WeekList";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  emner: Emne[];
}

const EmneList: React.FC<Props> = ({ emner }) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {emner.map((emne) => (
        <div
          key={emne.id}
          className="bg-orange-100 rounded-2xl overflow-hidden shadow-md"
        >
          <button
            onClick={() => setSelected(selected === emne.id ? null : emne.id)}
            className="w-full text-left px-5 py-4 font-semibold text-lg text-orangeBrand flex justify-between items-center hover:bg-orange-200 transition"
          >
            <span>{emne.name}</span>
            <span
              className={`transition-transform ${
                selected === emne.id ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          <AnimatePresence>
            {selected === emne.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-4"
              >
                <WeekList weeks={emne.weeks} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default React.memo(EmneList);
