import React, { useEffect, useState } from 'react';
import { storage } from '../../config/firebase';

import ImageGallery from 'react-image-gallery';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

import 'react-image-gallery/styles/css/image-gallery.css';

  

export default function Gallery({folderName}) {

  const [images, setImages] = useState([]);
  const folder=folderName;

  useEffect(() => {
    const fetchImages = async () => {
      const folderRef = ref(storage, folder); // replace with your folder name
      const res = await listAll(folderRef);

      const urls = await Promise.all(
        res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return {
            original: url,
            thumbnail: url, // Using the same URL for both original and thumbnail
          };
        })
      );

      setImages(urls);
    };

    fetchImages();
  }, []);

  return <ImageGallery items={images}  />;
   
}
