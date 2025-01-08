import React from "react";
import Nav from "../global/Nav";
import { Carousel } from "../global/Carousel";
import Gallery from "./Gallery";
import ProfileView from "../global/ProfileView";
import Footer from "../global/Footer";

// Council Members Data
const councilMembers = [
  { name: "Rahul Sasmal", post: "President", url: "president.jpeg" },
  { name: "Pratyush Kar", post: "Vice President", url: "vice-president.jpeg" },
  { name: "Rudraditya Mallick", post: "Secretary", url: "secretary.jpeg" },
  { name: "Soham Pattnaik", post: "Treasurer", url: "tresurer.jpeg" },
  { name: "Biswajeet Ganthia", post: "Relations Manager", url: "club-manager.jpeg" },
];

const Home = () => {
  return (
    <main className="bg-white-primary">
      <Nav />
      
      {/* Hero Section */}
      <section className="container mx-auto mt-10 flex flex-col md:flex-row justify-center items-center gap-6">
        <img src="/sunshine.jpg" alt="Sunshine" className="md:h-[400px] w-[400px]" />
        <img src="/rotaryintl.png" alt="Rotary International" className="h-[200px] md:h-[300px]" />
      </section>

      {/* Carousel Section */}
      <section className="mt-10">
        <Carousel />
      </section>

      {/* Welcome Section */}
      <section className="container mx-auto mt-20 text-center">
        <h1 className="font-bold text-4xl text-dark-primary">Rotaract Club of Bhubaneswar Sunshine</h1>
        <p className="text-dark-primary mt-10 text-xl">
          Welcome to the official website of the Rotaract Club of Bhubaneswar Sunshine. Our club is dedicated to charity, social work, and community service.
        </p>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto mt-20 text-center">
        <p className="italic text-4xl md:text-6xl font-extralight text-gray-400">"Service Above Self"</p>
        <p className="text-dark-primary mt-10 text-xl w-[90%] md:w-full mx-auto">
          We believe in selfless service and aim to make a positive impact in our community through various charitable activities and social initiatives.
        </p>
      </section>

      {/* Join Section */}
      <section className="container mx-auto mt-20 bg-gray-900 text-white-primary text-center py-10 px-5">
        <p className="text-xl px-8">
          Our club is anchored on strong relationships and an active membership, encouraging members to collectively find ways to improve the quality of life in our communities.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPwZENdS5zO6lYrVN_sX5a_kZJEQTQvuyJcx5pk6yslo6OMA/viewform?usp=sharing">
          <button className="bg-pink-primary px-4 py-2 text-white-primary mt-5 rounded">
            Join the Club
          </button>
        </a>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto mt-20 text-center">
        <h2 className="py-5 text-3xl font-bold">A Glance at Our Work</h2>
        <a href="/gallery" className="text-xl text-blue-primary underline">
          View Gallery
        </a>
        <div className="mt-10">
          <Gallery folderName="work-drives" />
        </div>
      </section>

      {/* Council Members Section */}
      <section className="container mx-auto mt-20 text-center mb-10">
        <h2 className="py-5 text-3xl font-bold">Council Members</h2>
        <div className="flex flex-wrap justify-center gap-14 mt-10">
          {councilMembers.map((member, index) => (
            <ProfileView
              key={index}
              Name={member.name}
              post={member.post}
              show
              link="/council"
              url={`https://firebasestorage.googleapis.com/v0/b/rotaract-bbsr.appspot.com/o/council%2F${member.url}?alt=media`}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
