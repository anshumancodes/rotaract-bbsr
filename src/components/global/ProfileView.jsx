import React from 'react'

export default function ProfileView({url,Name,link}) {
  return (
    <div>
      <div className="flex-col flex gap-2 items-center justify-center py-5">
        <div className="profile__img">
          {url?  <img src={url} alt={`${Name}`} className='max-w-[200px]'/>:<img/>}
        </div>
        <div className="profile__name">
            <p className='font-bold text-xl'>{Name}</p>
        </div>
        <div className="profile__link">
           {url?  <a href={`${link}`}><button className='bg-pink-primary px-2 py-1 text-base text-center text-white-primary'>read more</button></a>: <a></a>}
        </div>
      </div>
    </div>
  )
}
