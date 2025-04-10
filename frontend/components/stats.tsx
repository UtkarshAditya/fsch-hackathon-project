import { BarChart, Calendar, Heart, Users } from "lucide-react";

const stats = [
  {
    value: "78%",
    description: "of chronic conditions can be prevented through early intervention and lifestyle changes",
    icon: <Heart className="h-8 w-8 text-black" />
  },
  {
    value: "3.2x",
    description: "higher engagement in health management with continuous monitoring and timely reminders",
    icon: <Calendar className="h-8 w-8 text-black" />
  },
  {
    value: "68%",
    description: "of patients report improved health outcomes with proactive health management",
    icon: <BarChart className="h-8 w-8 text-black" />
  },
  {
    value: "1M+",
    description: "lives lost due to wrong diagnosis",
    icon: <Users className="h-8 w-8 text-black" />
  }
];

const StatsSection = () => {
  return (
    <section id="stats" className="py-20 px-6 md:px-12 bg-gradient-to-b from-teal-200 to-blue-200 section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16">
          Health By The Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card flex flex-col items-center text-center">
              <div className="bg-gradient-to-br from-mediguardian-teal to-mediguardian-purple p-3 rounded-full -mt-10 mb-4 shadow-lg">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-mediguardian-darkblue mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
