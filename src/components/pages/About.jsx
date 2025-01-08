import React from "react";
import Nav from "../global/Nav";
import { ArrowUpRightFromSquare } from "lucide-react";
import Footer from "../global/Footer";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />
      <article className="mt-16 mb-10">
        <div className="flex flex-col items-center text-center px-6 md:px-10">
          <span className="text-pink-primary font-semibold uppercase tracking-wide">
            Know Everything About Us
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold mt-6 py-2 text-gray-800 leading-snug">
            About Rotaract Club of Bhubaneswar Sunshine
          </h1>
          <div className="mt-8 flex flex-col items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/rotaract-bbsr.appspot.com/o/slider%2Fslider-3.jpg?alt=media&token=2c1879ed-30cb-4d2c-bb8e-054c6f029db6"
              alt="Rotaract Club"
              className="w-full md:w-[60%] rounded-lg shadow-lg"
            />
          </div>
          <p className="w-full md:w-[75%] lg:w-[60%] text-gray-600 mt-10 leading-relaxed text-justify">
            Welcome to the Rotaract Club of Bhubaneswar Sunshine, a vibrant and
            socially-driven organization dedicated to creating meaningful change in
            our community. Established with the core belief of "Service Before Self," 
            our club is committed to making a difference through innovative projects, 
            community development, and charitable initiatives.
          </p>

          <p className="w-full md:w-[75%] lg:w-[60%] text-gray-600 mt-6 leading-relaxed text-justify">
            As a youth-led wing of the Rotary Club of Bhubaneswar Meadows, we stand at 
            the forefront of societal progress, driven by our passion for serving others. 
            Our members, a dynamic group of young leaders, bring diverse talents and 
            perspectives to the table, all united by a common goal: to uplift our society 
            and empower the underserved. 
          </p>

          <p className="w-full md:w-[75%] lg:w-[60%] text-gray-600 mt-6 leading-relaxed text-justify">
            Our council, newly elected in 2024, is composed of visionary leaders who are 
            deeply invested in the betterment of our community. Under their guidance, we 
            are excited to launch our first major initiative, the Vande Mataram Walkathon 2024, 
            a symbol of our dedication to uniting people for a common cause.
          </p>

          <p className="w-full md:w-[75%] lg:w-[60%] text-gray-600 mt-6 leading-relaxed text-justify">
            Join us on this journey of service and impact. Together, we can transform our 
            community and build a legacy of compassion, leadership, and social good.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfPwZENdS5zO6lYrVN_sX5a_kZJEQTQvuyJcx5pk6yslo6OMA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-pink-primary text-white font-medium text-lg mt-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            Join as a Member <ArrowUpRightFromSquare />
          </a>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default About;
