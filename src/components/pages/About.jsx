import React from "react";
import Nav from "../global/Nav";
import { ArrowUpRightFromSquare } from "lucide-react";
import Footer from "../global/Footer";

export const About = () => {
  return (
    <div>
      <Nav/>
      <article className="bg-white-primary mt-14 mb-5">
      <div className="flex w-full justify-center flex-col items-center">
      <span className="text-pink-primary font-semibold">Know Everything .... about us </span>
      <h1 className="text-xl md:text-3xl font-bold mt-10 py-2">About Rotaract Club of Bhubaneswar Sunshine</h1>
      <img src="https://firebasestorage.googleapis.com/v0/b/rotaract-bbsr.appspot.com/o/slider%2Fslider-3.jpg?alt=media&token=2c1879ed-30cb-4d2c-bb8e-054c6f029db6" alt="" width={800}/>
      <p className="w-[80%] lg:w-[50%] text-gray-500 mt-10">
        Welcome to the Rotaract Club of Bhubaneswar Sunshine, a vibrant and
        socially-driven organization dedicated to creating meaningful change in
        our community. Established with the core belief of "Service Before
        Self," our club is committed to making a difference through innovative
        projects, community development, and charitable initiatives. As a
        youth-led wing of the Rotary Club of Bhubaneswar Meadows, we stand at
        the forefront of societal progress, driven by our passion for serving
        others. Our members, a dynamic group of young leaders, bring diverse
        talents and perspectives to the table, all united by a common goal: to
        uplift our society and empower the underserved. We are actively involved
        in a wide range of activities that promote social responsibility, from
        organizing educational workshops and health camps to spearheading
        environmental conservation efforts. Our commitment to charity extends
        beyond monetary donations; we believe in hands-on involvement and
        sustainable solutions that address the root causes of societal issues.
        Our council, newly elected in 2024, is composed of visionary leaders who
        are deeply invested in the betterment of our community. Under their
        guidance, we are excited to launch our first major initiative, the Vande
        Mataram Walkathon 2024, a symbol of our dedication to uniting people for
        a common cause. At Rotaract Club of Bhubaneswar Sunshine, we strive to
        inspire positive change and foster a sense of unity among all age
        groups. We believe that through collaboration, innovation, and
        unwavering commitment, we can create a brighter, more inclusive future
        for all. Join us on this journey of service and impact. Together, we can
        transform our community and build a legacy of compassion, leadership,
        and social good. 
      </p>
      <a href="" className="flex gap-3 px-4 py-2 bg-pink-primary mt-5">Join as a member <ArrowUpRightFromSquare/></a>
      </div>
    </article>
    <Footer/>
    </div>
  );
};
