import React, { useState, useEffect } from "react";

// import image
import Image from "../assets/img/foto-baru/bg-benarr.jpg";

const About = () => {
  return (
    <section id="about" className="section bg-secondary ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-8 before:hidden before:lg:block">
                Ferryawan
              </h2>
              <p className="mb-4 text-accent"> Freelance Web Develover</p>
              <hr className="mb-4 opacity-100" />
              <p className="mb-8">
                Confident, passionate and creative Graphic Designer and Data
                Analyst Programmer with extensive experience working with print{" "}
                <br />
                and digital media as well as being a top value Student.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover rounded-md">
              {" "}
              <a
                href="https://wa.me/+6281389810440"
                title="No Handphone"
                target="_blank"
              >
                contact me
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
