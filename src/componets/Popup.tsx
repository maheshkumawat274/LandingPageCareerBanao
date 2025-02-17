import React from "react";
import AdmissionForm from "./AdmissionForm";

const Home = React.forwardRef<HTMLDivElement>(() => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen">
        {/* Background Image */}
        <img
          src="./imgs/group-student-walking-through-park-after-class-enjoy-talking-together.jpg"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay for better readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Content Section */}
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center md:justify-evenly xl:justify-end px-0 sm:px-4 z-20">
          {/* Semi-transparent background container */}
          <div className="w-full sm:w-3/4 md:w-2/5 p-2 sm:p-6">
            <h1 className="text-center text-2xl sm:text-3xl font-bold text-white mb-4">
              ADMISSIONS OPEN 2025
            </h1>
            <AdmissionForm />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
