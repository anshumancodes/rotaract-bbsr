import React from 'react';

export default function ProfileView({ url, Name, link, post, show }) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      {/* Profile Image */}
      {url ? (
        <img
          src={url}
          alt={`${Name}'s profile`}
          className="max-w-[200px] max-h-[200px] rounded-sm"
        />
      ) : (
        <div className="w-[200px] h-[200px] bg-gray-200 rounded-sm flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}

      {/* Profile Name */}
      <p className="font-bold text-xl">{Name}</p>

      {/* Profile Post */}
      <p className="font-light text-gray-800">{post}</p>

      {/* Read More Link */}
      {link && show && (
        <a
          href={link}
          className="bg-pink-primary px-4 py-2 text-white-primary mt-2 rounded text-center"
        >
          Read More
        </a>
      )}
    </div>
  );
}

