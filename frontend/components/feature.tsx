import { Heart, Bell, Activity, Shield } from "lucide-react";

const features = [
  {
    title: "Real-time Health Monitoring",
    description: "Track vital health metrics and receive personalized insights based on your health data.",
    icon: <Activity className="h-10 w-10 text-mediguardian-teal" />,
    delay: "animate-fade-in-delay-1"
  },
  {
    title: "Personalized Reminders",
    description: "Never miss important medications, appointments, or health goals with smart reminders.",
    icon: <Bell className="h-10 w-10 text-mediguardian-teal" />,
    delay: "animate-fade-in-delay-2"
  },
  {
    title: "Comprehensive Health Records",
    description: "Store and access all your health records, lab results, and medical history in one secure place.",
    icon: <Heart className="h-10 w-10 text-mediguardian-teal" />,
    delay: "animate-fade-in-delay-1"
  },
  {
    title: "Data Security & Privacy",
    description: "Your health data is encrypted and protected with the highest security standards.",
    icon: <Shield className="h-10 w-10 text-mediguardian-teal" />,
    delay: "animate-fade-in-delay-2"
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in">
          Features Designed For Your <span className="gradient-text">Wellbeing</span>
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16 animate-fade-in-delay-1">
          MediGuardian combines cutting-edge technology with intuitive design to keep you in control of your health journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl hover-scale opacity-0 ${feature.delay}`}
            >
              <div className="bg-mediguardian-blue/20 rounded-full p-4 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;