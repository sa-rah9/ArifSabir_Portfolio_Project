import React from 'react';
import Image from 'next/image';

export default function Page() {
  const imagesV = [
    { src: "/assets/images/image1.jpg", alt: "Image 1" },
    { src: "/assets/images/image2.jpg", alt: "Image 2" },
    { src: "/assets/images/image3.jpg", alt: "Image 3" },
    { src: "/assets/images/image5.jpg", alt: "Image 4" },
    { src: "/assets/images/image6.jpg", alt: "Image 5" },
    { src: "/assets/images/image7.jpg", alt: "Image 6" },
    { src: "/assets/images/image8.jpg", alt: "Image 7" },
    { src: "/assets/images/image9.jpg", alt: "Image 8" },
    { src: "/assets/images/image10.jpg", alt: "Image 9" },
    { src: "/assets/images/image11.jpg", alt: "Image 10" },
    { src: "/assets/images/image12.jpg", alt: "Image 11" },
    { src: "/assets/images/image13.jpg", alt: "Image 12" },
    { src: "/assets/images/image14.jpg", alt: "Image 13" },
    { src: "/assets/images/image15.jpg", alt: "Image 14" },
    { src: "/assets/images/image16.jpg", alt: "Image 15" },
    { src: "/assets/images/image17.jpg", alt: "Image 16" },
    { src: "/assets/images/image18.jpg", alt: "Image 17" },
    { src: "/assets/images/image19.jpg", alt: "Image 18" },
    { src: "/assets/images/image20.jpg", alt: "Image 19" },
    { src: "/assets/images/image21.jpg", alt: "Image 20" },
  ];
const ImagesH = [
  { src: "/assets/images/image22.jpg", alt: "Image 21" },
  { src: "/assets/images/image23.jpg", alt: "Image 22" },
  { src: "/assets/images/image24.jpg", alt: "Image 23" },
  { src: "/assets/images/image25.jpg", alt: "Image 24" },
  { src: "/assets/images/image26.jpg", alt: "Image 25" },
  { src: "/assets/images/image27.jpg", alt: "Image 26" },
  { src: "/assets/images/image28.jpg", alt: "Image 27" },
  { src: "/assets/images/image29.jpg", alt: "Image 28" },
  { src: "/assets/images/image30.jpg", alt: "Image 28" },
  { src: "/assets/images/image31.jpg", alt: "Image 28" },
  { src: "/assets/images/image32.jpg", alt: "Image 28" },
  { src: "/assets/images/image29.jpg", alt: "Image 28" },
]

  return (
    <div className='w-full h-full'>
      {/* varticle images */}
    <div className='flex justify-evenly flex-wrap gap-8 p-5'>
      {imagesV.map((image, index) => (
        <Image
          key={index}
          className="object-cover border-2 border-white"
          src={image.src}
          alt={image.alt}
          width={200}
          height={200}
        />
      ))}
      </div>

      {/* Horizontal images */}
      <div className='flex justify-evenly flex-wrap gap-10 p-5'>
      {ImagesH.map((image, index) => (
        <Image
          key={index}
          className="object-cover border-2 border-white"
          src={image.src}
          alt={image.alt}
          width={350}
          height={350}
        />
      ))}
      </div>

      {/* Embedding YouTube video */}
      {/* <div className="border-2 border-red-600">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_0h-tFjjNrw?si=HliA29_WkTLacXPd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div> */}
      </div>
  );
}
