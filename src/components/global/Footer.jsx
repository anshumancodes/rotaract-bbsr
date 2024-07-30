import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className=" bg-gray-400 flex flex-col  w-full items-center justify-center">
            <div className='flex flex-col md:flex-row gap-14 py-14'>
                <div className='flex flex-col gap-2 text-dark-primary underline text-base'>
                    <a href="/about">about us</a>
                    <a href="/council">counsil of members</a>
                    <a href="/blog">explore blogs</a>
                </div>
                <div className='flex flex-col gap-2 text-dark-primary underline text-base'>
                    <a href="/gallery">gallery</a>
                    <a href="">membership rules</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPwZENdS5zO6lYrVN_sX5a_kZJEQTQvuyJcx5pk6yslo6OMA/viewform?usp=sharing">Application for membership</a>
                </div>
                <div className='flex flex-col gap-2 text-dark-primary underline text-base'>
                    <a href="">Make a donation</a>
                    <a href="">contact us !</a>
                    <a href="" className='text-blue-primary'>login as admin</a>
                </div>

            
            </div>

            <div className='text-dark-primary py-4 w-full justify-center flex'>Copyright&copy; rotract Bhubaneswar sunshine {new Date().getFullYear()}</div>
            <div className='text-dark-primary py-4 w-full justify-center flex gap-1'>developed and maintained by  <a href="https://anshumancdx.xyz" className='text-blue-primary underline'> anshumancdx</a></div>
            

        </footer>
      
    </div>
  )
}
