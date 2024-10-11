import { useState } from 'react';
import { motion } from 'framer-motion';
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div>
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
      {open && (
        <motion.div className="bg-emerald-800 border max-w-full w-full absolute right-0 h-60 mt-7 rounded-lg flex flex-col z-50">
          <div className="p-1">
            <h1 className="font-bold underline text-white mb-3 text-lg">
              Links:
            </h1>
            <a
              href={'/comments'}
              className="pl-2 text-lg p-2   text-white hover:underline"
            >
              {`->`} Comments
            </a>
          </div>
          <div className="p-1">
            <h1 className="font-bold underline text-white mb-3 text-lg">
              Quick Access:
            </h1>
            <a
              href="/comments/create"
              className="pl-2 text-lg text-white p-2  hover:underline "
            >
              {`->`} Create a comment
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
