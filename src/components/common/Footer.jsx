import React from "react";
import logo from "../../assets/images/logo.png";
import { Services_details } from "../../data/services";
import { Technologies_details } from "../../data/technologies";

const Footer = () => {
  return (
    <div className="bg-primary text-white ">
      <div className="grid  lg:grid-cols-4 xl:grid-cols-4  sm:grid-cols-2 md:grid-cols-2 gap-4 bg-primary pt-10 pr-10 pl-10 pb-8">
        <div className="sm:col-span-3  md:col-span-2 lg:col-span-2  xl:col-span-2  col-span-2 mt-7">
          <div>
            <img src={logo} alt="CompanyLogo" style={{ width: "220px" }} />
          </div>
          <div className="mt-5">
            <p className="max-w-[500px]">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve a single objective - your
              business results.
            </p>
          </div>
        </div>

        <div className="md:col-span-1  mt-7">
          <h1 className="text-xl font-bold">Our Technologies</h1>
          {Technologies_details.map((item, index) => {
            return (
              <p key={index} className="pt-2">
                {item.title}
              </p>
            );
          })}
        </div>

        <div className="md:col-span-1 col-span-3 mt-7">
          <h1 className="text-xl font-bold">Our Services</h1>
          {Services_details.map((item, index) => {
            return (
              <p key={index} className="pt-2">
                {item.title}
              </p>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center pt-5 ">
        <div className="border-t-2 border-white h-6 w-[300px] sm:w-[300px] md:w-[400px] "></div>
      </div>

      <div class="flex items-center justify-center pt-3 pb-5">
        <div class="pr-9">
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <div>|</div>
        <div class="pl-9">
          <a href="/terms-and-conditions">Terms &amp; Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
