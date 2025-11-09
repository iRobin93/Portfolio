import React, { useState } from "react";
import type { Emne } from "../data/weekData";
import { motion, AnimatePresence } from "framer-motion";
import { FolderOpen, Star } from "lucide-react";

interface Props {
  weeks: Emne["weeks"];
}

const WeekList: React.FC<Props> = ({ weeks }) => {
  const [openWeek, setOpenWeek] = useState<number | null>(() => {
    // Automatically open week 17 if it exists
    const hasWeek17 = weeks.some((w) => w.id === 17);
    return hasWeek17 ? 17 : null;
  });


  return (
    <div className="space-y-3 mt-3">
      {weeks.map((week) => (
        <motion.div
          key={week.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={() => setOpenWeek(openWeek === week.id ? null : week.id)}
            className="w-full bg-gradient-to-r from-orange-100 to-yellow-50 rounded-xl shadow-md border border-orange-300 px-4 py-3 flex justify-between items-center hover:shadow-lg hover:from-orange-200 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <FolderOpen className="text-orange-600" size={18} />
              <span className="font-semibold text-gray-700">
                {week.id === 17 ? "Alle uker" : `Uke ${week.id}`}
              </span>
            </div>
            <span
              className={`transition-transform ${openWeek === week.id ? "rotate-180" : ""
                }`}
            >
              ▼
            </span>
          </button>

          <AnimatePresence>
            {openWeek === week.id && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="px-4 pb-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {week.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col justify-between rounded-xl border-2 border-orange-200 bg-gradient-to-br from-white to-orange-50 hover:from-orange-100 hover:to-white shadow-sm hover:shadow-xl transition-all duration-300 p-4 min-h-[100px]"
                    >
                      <h3 className="font-bold text-orange-700 group-hover:text-orange-800 flex items-center gap-2">
                        <Star
                          size={14}
                          className="opacity-60 group-hover:opacity-100 transition"
                        />
                        {link.title}
                      </h3>
                      <p className="text-xs text-gray-500 truncate">
                        {link.href}
                      </p>
                    </a>
                  ))}
                </div>
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default React.memo(WeekList);
