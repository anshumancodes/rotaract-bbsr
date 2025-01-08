import React, { useState, useEffect } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import DOMPurify from 'dompurify'; // Import DOMPurify

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRef = collection(db, "blog");
        const blogQuery = query(blogsRef);
        const blogsSnapshot = await getDocs(blogQuery);
        const blogsList = blogsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(blogsList);
        setBlogs(blogsList);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-20">
      <h1 className="mb-12 text-center font-sans text-5xl font-bold">
        Recent Posts
      </h1>
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-lg shadow-md overflow-hidden"
              style={{ height: '500px' }}
            >
              <div className="h-[20vh]">
                {/* Add blog image here if needed */}
              </div>
              <div className="px-5">
                <h2 className="text-2xl mb-2">{blog.title}</h2>
                
                {/* Sanitize and maintain HTML structure */}
                <div
                  className="text-gray-600 text-sm mb-4"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(blog.content, {
                      ALLOWED_TAGS: [
                        'h1',
                        'h2',
                        'h3',
                        'h4',
                        'h5',
                        'h6',
                        'p',
                        'strong',
                        'em',
                        'ul',
                        'li',
                        'ol',
                        'blockquote',
                      ], // Allow specific HTML tags
                      ALLOWED_ATTR: [] // You can also control allowed attributes, here none are allowed
                    }),
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="w-full flex justify-center items-center h-full">
            {blogs ? "No blogs available" : "Loading..."}
          </p>
        )}
      </div>
      <footer>note: this page is still under development, it's live for testing purposes</footer>
    </section>
  );
}

