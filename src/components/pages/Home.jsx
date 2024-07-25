import React from "react";
import Nav from "../global/Nav";
import { Carousel } from "../global/Carousel";
import Gallery from "./Gallery";
import ProfileView from "../global/ProfileView";
import Footer from "../global/Footer";

export const Home = () => {
  return (
    <main className="bg-white-primary">
      <Nav />
      <div className="mt-10 justify-center items-center flex gap-6 flex-col md:flex-row">
        <img
          src="/sunshine.jpg"
          alt="Logo"
          className="md:h-[400px] w-[400px]"
        />
        <img
          src="/rotaryintl.png"
          alt="Logo"
          className=" h-[200px] md:h-[300px]  bg-transparent"
        />
      </div>

      <div className="mt-10">
        <Carousel />
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-[15vh]">
        <h1 className="font-bold text-4xl text-dark-primary text-center">
          Rotaract Club of Bhubaneswar Sunshine
        </h1>
        <p className="text-dark-primary text-center mt-10 text-xl">
          Welcome to the official website of the Rotaract Club of Bhubaneswar
          Sunshine. Our club is dedicated to charity, social work, and community
          service.
        </p>
      </div>
      <div className="mt-[20vh] w-full flex flex-col items-center justify-center">
        <p className="italic text-4xl md:text-6xl font-extralight text-gray-400">
          "Service Above Self"
        </p>
        <p className="text-dark-primary text-center mt-10 text-xl w-[90%] md:w-full">
          We believe in selfless service and aim to make a positive impact in
          our community through various charitable activities and social
          initiatives
        </p>
      </div>

      <div className="w-full flex justify-center items-center mb-10 mt-20">
        <div className="bg-gray-400 md:w-[60%] md:h-[200px] text-center items-center flex flex-col justify-center py-3">
          <p className="px-8">
            Our club is anchored on strong relationships and an active
            membership. One that encourages members to collectively find ways to
            improve the quality of life for people in our communities and to
            serve the public interest
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPwZENdS5zO6lYrVN_sX5a_kZJEQTQvuyJcx5pk6yslo6OMA/viewform?usp=sharing">
            <button className="bg-pink-primary px-4 py-2 text-white-primary mt-5">
              Join the club
            </button>
          </a>
        </div>
      </div>

      <div className="mt-10 flex-col flex justify-center w-full items-center ">
        <h2 className="py-5 text-3xl font-bold">A glance at our work</h2>
        <a
          href=""
          className="font-extralight text-xl text-blue-primary underline py-3"
        >
          view gallery
        </a>
        <div className="w-[80%] md:w-full flex justify-center">
          <Gallery folderName={"work-drives"} />
        </div>
      </div>

      <div className="mt-10 flex-col flex justify-center w-full items-center ">
        <h2 className="py-5 text-3xl font-bold">Founding members</h2>
        <div className="w-[80%] md:w-full flex flex-col md:flex-row justify-center gap-14">
          <ProfileView Name={"John doe"} url={"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
          <ProfileView Name={"John doe"} url={"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
          <ProfileView Name={"John doe"} url={"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
          

        </div>
      </div>
      <Footer/>
    </main>
  );
};
