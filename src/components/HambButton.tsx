import { useState } from 'react';
import { motion } from 'framer-motion';
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen((prevState) => !prevState)}
      className="max-md:block hidden space-y-1 hover:cursor-pointer max-md:px-6"
    >
      <motion.span
        animate={{ rotateZ: open ? 45 : 0, y: open ? 8 : 0 }}
        className="block bg-white w-8 h-1"
      ></motion.span>
      <motion.span
        animate={{ rotateZ: open ? -45 : 0 }}
        className="block bg-white w-8 h-1"
      ></motion.span>
      <motion.span
        animate={{ opacity: open ? 0 : 1 }}
        className="block bg-white w-8 h-1"
      ></motion.span>
    </div>
  );
}
