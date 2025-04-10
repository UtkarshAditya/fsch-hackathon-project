import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-mediguardian-blue/30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-mediguardian-purple/20 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight animate-fade-in">
            Start Your Proactive Health Journey Today
          </h2>
          <p className="text-xl text-gray-700 mb-10 animate-fade-in-delay-1">
            Join thousands of users who are taking control of their health with MediGuardian&apos;s comprehensive health monitoring and support system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Button className="bg-mediguardian-teal hover:bg-mediguardian-purple text-white px-8 py-6 text-lg">
              Sign Up Now
            </Button>
            <Button variant="outline" className="border-mediguardian-teal text-mediguardian-teal hover:bg-mediguardian-teal hover:text-white px-8 py-6 text-lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
