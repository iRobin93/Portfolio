import React, { useState } from "react";
import type { Emne } from "../data/weekData";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  weeks: Emne["weeks"];
}

const WeekList: React.FC<Props> = ({ weeks }) => {
  const [openWeek, setOpenWeek] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {weeks.map((week) => (
        <div key={week.id}>
          <button
            onClick={() => setOpenWeek(openWeek === week.id ? null : week.id)}
            className="w-full bg-white rounded-xl shadow-sm border border-orange-200 px-4 py-2 flex justify-between items-center hover:bg-orange-50 transition"
          >
            <span className="font-medium text-gray-700">Uke {week.id}</span>
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
                transition={{ duration: 0.3 }}
                className="px-6 pb-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4 w-full">
                  {week.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col justify-between rounded-xl border border-orange-100 bg-white shadow-sm 
                 hover:shadow-md hover:bg-orange-50 transition-all duration-300 
                 p-3 sm:p-4 min-h-[90px] active:scale-[0.99]"
                    >
                      <h3 className="text-orangeBrand font-semibold text-base sm:text-sm md:text-base leading-tight mb-1">
                        {link.title}
                      </h3>
                      <p className="text-xs text-gray-500 truncate break-all">{link.href}</p>
                    </a>
                  ))}
                </div>


              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default React.memo(WeekList);
