import { toast } from 'kitzo/react';
import { PhoneCall } from 'lucide-react';
import { FaPhone } from "react-icons/fa";

const EmergencyCTA = () => {
  const call = () => {
    toast.success(<FaPhone /> )
  }
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-5xl rounded-3xl bg-red-600 p-8 text-center text-white shadow-2xl shadow-red-200 md:p-12">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Have an Urgent Repair?
        </h2>
        <p className="mb-8 text-lg text-red-100">
          Get an emergency expert at your doorstep in under 60 minutes!
        </p>
        <button onClick={call} className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xl font-bold text-red-600 transition-colors hover:bg-gray-100">
          <PhoneCall size={24} />
          Call Emergency Hotline
        </button>
      </div>
    </section>
  );
};

export default EmergencyCTA;
