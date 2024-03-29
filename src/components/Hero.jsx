import React from "react";
import background from "../assets/images/background.png";
import { Link } from "react-scroll";
import Button from "./common/Botton";

const Hero = () => {
  return (
    <div className="lg:pt-0 pt-20" >
      <div className=" relative">
        <img
          src={background}
          loading="lazy"
          className="w-full h-full"
          alt="background"
        />
        <div
          data-aos="fade-right"
          class="bg-gradient-to-r sm:relative md:relative lg:absolute lg:bottom-12 lg:left-14 from-green-400 to-blue-500 p-4 lg:w-1/2 "
        >
          <h1 className="sm:text-[32px]  md:text-[45px] lg:text-[35px] xl:text-[45px] font-bold text-white">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </h1>

          <div>
            <Button>
              <Link to="targetSection">GET FREE CONSULTATION</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;