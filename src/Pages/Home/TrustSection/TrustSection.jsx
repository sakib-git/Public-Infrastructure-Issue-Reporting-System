import { ShieldCheck, Award, HardHat } from 'lucide-react';

const TrustSection = () => {
  const features = [
    {
      id: 1,
      icon: <ShieldCheck className="w-12 h-12 text-green-500" />,
      title: "Identity Verified",
      desc: "100% background and NID checks for all service partners."
    },
    {
      id: 2,
      icon: <Award className="w-12 h-12 text-blue-500" />,
      title: "Skill Certified",
      desc: "Only trained and experienced professionals handle your requests."
    },
    {
      id: 3,
      icon: <HardHat className="w-12 h-12 text-orange-500" />,
      title: "Safety Protocols",
      desc: "Our experts follow strict hygiene and safety guidelines."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Safety is Our Top Priority</h2>
        <p className="text-gray-500 mb-12">Every CityFix expert is rigorously screened for your peace of mind.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div key={item.id} className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;