import React from "react";
import AdmissionForm from "./AdmissionForm";

const Home = React.forwardRef<HTMLDivElement>((_,ref)  => {
  return (
    <div ref={ref} className="flex flex-col items-center">
      {/* Header */}

      {/* Hero Section (Padding added for fixed header) */}
      <div className="w-full bg-white pt-10 px-0 sm:px-14 rounded-lg shadow-lg">
        <h1 className="text-center text-3xl font-bold text-gray-700">
          ADMISSIONS OPEN 2025
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 mt-8 p-4">
          <div className="relative w-full text-center">
            {/* Desktop View (≥1024px) */}
            <div className="hidden md:grid grid-cols-2 gap-4 h-[70vh]">
              <img
                src="./imgs/home4.jpg"
                alt="Students"
                className="w-full h-[70vh] rounded-lg"
              />
              <div className="flex flex-col gap-4">
                <div className="bg-purple-700 text-white p-4 rounded-lg flex items-center justify-center text-center">
                  <p>
                    Fill out the application form in just a few minutes and
                    secure your admission! →
                  </p>
                </div>
                <img
                  src="./imgs/home5.jpg"
                  alt="Group of Students"
                  className="w-full h-[57vh] rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Mobile View (<1024px) */}
            <div className="block md:hidden">
              <img
                src="./imgs/home.png"
                alt="Students"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <AdmissionForm />
          </div>
        </section>
      </div>
    </div>
  );
});

export default Home;
