import React from "react";
import image_development from "../assets/images/image_development.png";
import image_strategy from "../assets/images/image_strategy.png";
import { Link } from "react-scroll";
import Button from "./common/Botton";

const About = () => {
  return (
    <div>
      <div
        name="about-us"
        className="bg-radial-at-r from-sky-400 to-indigo-900 w-full  bg-white text-gray-300 snap-start"
      >
        <div className="flex flex-col justify-center items-center w-full mt-10">
          <div className="max-w-[1000px] w-full grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 px-4 mt-10">
            <div data-aos="fade-zoom-in" className="md:text-right text-4xl font-bold">
              <img
                src={image_development}
                alt="logo"
                style={{ width: "100%" }}
              />
            </div>
            <div data-aos="fade-left" className="flex flex-col ">
              <h1 className=" pb-3 text-[27px] md:text-left text-center font-bold text-[#6B3CC9] ">
                Web and Mobile App Development
              </h1>
              <div>
                <p className="pr-0 md:pr-7  text-center md:text-left text-black">
                  Your web and mobile Apps are pieces of the puzzle to grow your
                  business. We use frameworks which tailor content and
                  engagement methods to respond to different intents shown by
                  your potential customers who interact with your business
                  online.
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <Button>
                  <Link to="targetSection">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        name="contact-us"
        className="bg-radial-at-r from-sky-400 to-indigo-900 w-full  bg-white text-gray-300 snap-start mb-40"
      >
        <div className="flex flex-col justify-center items-center w-full  mt-40 ">
          <div className="max-w-[1000px] w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  gap-8 px-4">
            <div
              data-aos="fade-right"
              className="md:text-right order-2 md:order-1"
            >
              <h1 className="pl-0 md:pl-7 pb-3 text-[27px] md:text-left text-center font-bold text-[#6B3CC9] ">
                Digital Strategy Consulting
              </h1>
              <div>
                <p className="pl-0 md:pl-7 text-center md:text-left text-black">
                  Your digital strategy should complement the overall marketing
                  strategy of the company. In online marketing, each component
                  will never work in isolation and every business needs a
                  different mix. We provide a clear concept and strategic
                  overview to find the most efficient model for your business.
                </p>
              </div>
              <div className="flex pl-7 justify-center md:justify-start">
                <Button>
                  <Link to="targetSection">Learn More</Link>
                </Button>
              </div>
            </div>

            <div data-aos="fade-zoom-in" className="flex flex-col order-1 md:order-2">
              <img src={image_strategy} alt="logo" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
