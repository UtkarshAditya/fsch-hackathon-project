const WhySection = () => {
    return (
        <section id="why" className="py-20 px-6 md:px-12 bg-gray-50">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
      Why <span className="text-mediguardian-teal text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">MediGuardian</span> Matters
    </h2>
    
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div className="w-full lg:w-1/2">
        <div className="relative">
          {/* Main image or illustration */}
          <div className="bg-white rounded-2xl shadow-lg p-6 relative z-10">
  <div className="aspect-video bg-gradient-to-r from-teal-200 to-blue-200 rounded-xl flex items-center justify-center">
    <div className="text-6xl text-white font-bold">
      MediGuardian
    </div>
  </div>
</div>

          {/* Floating element */}
          <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 border-l-4 border-mediguardian-teal">
            <p className="font-medium text-mediguardian-darkblue">Proactive health management reduces healthcare costs by up to 40%</p>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2">
  <h3 className="text-2xl font-semibold mb-6 text-mediguardian-darkblue">Taking Control of Your Health Journey</h3>
  <p className="text-lg text-gray-700 mb-6">
    In today&apos;s fast-paced world, staying on top of your health can be challenging. MediGuardian bridges the gap between sporadic doctor visits, providing continuous support and monitoring.
  </p>
  
  <div className="space-y-6">
    <div className="flex items-start">
      <div className="h-6 w-6 rounded-full bg-mediguardian-teal flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0">1</div>
      <div>
        <h4 className="font-semibold text-lg mb-2 text-mediguardian-teal">Early Detection Saves Lives</h4>
        <p className="text-gray-600">Continuous monitoring helps identify potential health issues before they become serious, enabling timely intervention.</p>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="h-6 w-6 rounded-full bg-mediguardian-teal flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0">2</div>
      <div>
        <h4 className="font-semibold text-lg mb-2 text-mediguardian-teal">Personalized Health Insights</h4>
        <p className="text-gray-600">Generic health advice isn&apos;t enough. MediGuardian provides recommendations tailored to your unique health profile.</p>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="h-6 w-6 rounded-full bg-mediguardian-teal flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0">3</div>
      <div>
        <h4 className="font-semibold text-lg mb-2 text-mediguardian-teal">Empowerment Through Knowledge</h4>
        <p className="text-gray-600">Access to comprehensive health data and insights empowers you to make informed decisions about your wellbeing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      
    );
  };
  
  export default WhySection;
  