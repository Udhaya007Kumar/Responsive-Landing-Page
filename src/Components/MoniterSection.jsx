import React from 'react';
import monitorCardBg from '../assets/monitor-card.webp';
import { IoIosArrowRoundForward } from "react-icons/io";


const MoniterSection = () => {
    return (
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
          {/* left */}
          <div className="w-full md:w-1/2">
            <span className="text-orange-500 font-semibold">MONITOR</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6">
              {" "}
              Introducing best mobile carousels
            </h2>
            <p className="text-gray-600 mb-8">
              Before the ship is really back. Round, round, all around the
              world. Round, all around the world. Round, all around the world.
              Round, all around the world.
            </p>
            <a
              href="#"
              className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
            >
              Learn more about monitoring
              <IoIosArrowRoundForward className="size-8" />
            </a>
          </div>

          {/* right */}
          <div className="w-full md:w-1/2">
            <img
              src={monitorCardBg}
              alt="Statistics dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    );
};

export default MoniterSection;