import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  href: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, href }) => {
  const isDisabled = !href || href.trim() === "";

  return (
    <motion.a
      href={isDisabled ? undefined : href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: isDisabled ? 1 : 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={`relative flex flex-col items-center justify-center rounded-2xl p-4 m-2 w-full sm:w-[220px] h-[120px] shadow-md transition-all duration-200 
        ${isDisabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white hover:shadow-xl hover:bg-orange-50"}`}
    >
      <span className="text-center font-medium text-gray-800 text-sm sm:text-base px-2">
        {title || "Uten navn"}
      </span>
      {!isDisabled && (
        <div className="absolute bottom-2 right-2 text-orange-500 text-xs">
          → Åpne
        </div>
      )}
    </motion.a>
  );
};
