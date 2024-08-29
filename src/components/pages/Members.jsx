import React from 'react'
import ProfileView from '../global/ProfileView'
import Nav from '../global/Nav'
import Footer from '../global/Footer'

const Members = () => {
  return (
    <div className=''>
      <Nav/>
      <div className='flex w-full justify-center flex-col items-center'>
      <h1 className='text-3xl md:text-4xl font-bold mt-20'>Council Members</h1>
      <h2 className='text-gray-400 md:text-2xl'>Rotract club Bhubaneswar Sunshine</h2>
      <div className="w-[80%] md:w-full flex flex-col justify-center gap-14 items-center mt-5 mb-10">
          <ProfileView Name={"Rahul Sasmal"} post={"president"}url={"https://firebasestorage.googleapis.com/v0/b/rotaract-bbsr.appspot.com/o/council%2Fpresident.jpeg?alt=media&token=18ca1600-67ca-4e16-8702-d5070e749456"}/>
          <p className='w-[80%] lg:w-[40%] text-gray-500'>Rahul is a visionary leader, guiding the Rotaract Club of Bhubaneswar Sunshine with dedication. He is currently pursuing a Bachelor's degree in Economics and is passionate about community development and youth empowerment, steering the club towards impactful initiatives with strategic foresight.</p>
          <ProfileView Name={"Pratyush kar"} post={"Vice president"}url={"https://firebasestorage.googleapis.com/v0/b/rotaract-bbsr.appspot.com/o/council%2Fvice-president.jpeg?alt=media&token=1a42191b-ad84-4e94-bd25-b8a2642957aa"}/>
          <p  className=' w-[80%] lg:w-[40%] text-gray-500'>Pratyush is an innovative leader focused on modernizing the club’s operations. Currently pursuing a Bachelor's degree in Commerce, he is passionate about technology and has streamlined the club’s systems, including creating a new website, to drive future advancements.</p>
          <ProfileView Name={"Rudraditya Mallick "} post={" Secretary"}url={"https://firebasestorage.googleapis.com/v0/b/rotaract-bbsr.appspot.com/o/council%2Fsecretary.jpeg?alt=media&token=abe41d3a-978c-422a-84cf-52d50afe8572"}/>
          <p  className=' w-[80%] lg:w-[40%] text-gray-500'>Rudraditya brings precision and order to his role, ensuring smooth operations within the club. He is currently pursuing a Bachelor's degree in Chemistry and is passionate about effective communication and transparency, contributing to the club’s efficiency and organizational structure.</p>
          <ProfileView Name={"Soham Pattnaik"} post={"Treasurer"} show link={"/council"} url={"https://firebasestorage.googleapis.com/v0/b/rotaract-bbsr.appspot.com/o/council%2Ftresurer.jpeg?alt=media&token=8c9a849b-2913-4c78-ad38-8604dc84d923"}/>
          <p  className=' w-[80%] lg:w-[40%] text-gray-500'>Soham manages the club’s finances with expertise, ensuring resources are maximized for community projects. Currently pursuing a Bachelor's degree in Agricultural Sciences, he is passionate about financial literacy and resource management, playing a crucial role in the club’s financial planning.</p>
          <ProfileView Name={"Biswajeet Ganthia"} post={"Relations Manager"} show link={"/council"} url={"https://firebasestorage.googleapis.com/v0/b/rotaract-bbsr.appspot.com/o/council%2Fclub-manager.jpeg?alt=media&token=ae8d9ce3-cad7-455d-85df-f3bdcbf74fb6"}/>
          <p  className=' w-[80%] lg:w-[40%] text-gray-500'>Biswajeet excels in building strong connections with the community and other clubs. He is currently pursuing a Bachelor's degree in Technology and is passionate about outreach and partnerships, enhancing the club’s visibility and engagement within the broader community.</p>


        </div>


      </div>
      
      <Footer/>
    </div>
  )
}

export default Members
