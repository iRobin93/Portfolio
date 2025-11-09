import React, { useState } from "react";
import type { Emne } from "../data/weekData";
import WeekList from "./WeekList";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  emner: Emne[];
}

const EmneList: React.FC<Props> = ({ emner }) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="space-y-6 px-2 sm:px-4">
      {emner.map((emne) => (
        <motion.div
          key={emne.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-md border border-orange-300 relative"
          style={{
            background: `linear-gradient(135deg, ${emne.color}20, #fff 90%)`,
          }}
        >
          <button
            onClick={() => setSelected(selected === emne.id ? null : emne.id)}
            className="w-full text-left px-5 py-4 flex justify-between items-center transition-all hover:brightness-110"
          >
            <div className="flex items-center gap-3">
              <Trophy
                className="text-orange-500"
                size={22}
                style={{
                  filter: "drop-shadow(0 0 4px rgba(255,165,0,0.5))",
                }}
              />
              <span className="font-bold text-lg text-gray-800 drop-shadow-sm">
                🎯 {emne.name}
              </span>
            </div>
            {selected === emne.id ? (
              <ChevronUp className="text-gray-600" />
            ) : (
              <ChevronDown className="text-gray-500" />
            )}
          </button>

          <AnimatePresence>
            {selected === emne.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="px-5 pb-5"
              >
                <WeekList weeks={emne.weeks} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* glowing XP border accent */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              boxShadow: `0 0 12px 2px ${emne.color}40 inset`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default React.memo(EmneList);
