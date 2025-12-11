import { motion } from 'motion/react';

export default function Modal({ closeModal, className, children }) {
  return (
    <motion.div
      onMouseDown={closeModal}
      className="fixed inset-0 z-100 grid place-items-center overflow-y-auto bg-black/30 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onMouseDown={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className={className}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
