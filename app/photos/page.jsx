import Image from "next/image";

export default function Page() {
  const imagesVertical = [
    { src: "/assets/images/37.JPG", alt: "Image 1" },
    { src: "/assets/images/38.JPG", alt: "Image 2" },
    { src: "/assets/images/39.JPG", alt: "Image 3" },
    { src: "/assets/images/40.JPG", alt: "Image 4" },
    { src: "/assets/images/41.JPG", alt: "Image 5" },
    { src: "/assets/images/42.JPG", alt: "Image 6" },
    { src: "/assets/images/43.JPG", alt: "Image 7" },
    { src: "/assets/images/44.JPG", alt: "Image 8" },
    { src: "/assets/images/45.JPG", alt: "Image 9" },
    { src: "/assets/images/46.JPG", alt: "Image 10" },
    { src: "/assets/images/47.JPG", alt: "Image 11" },
    { src: "/assets/images/48.JPG", alt: "Image 12" },
    { src: "/assets/images/49.JPG", alt: "Image 13" },
    { src: "/assets/images/50.JPG", alt: "Image 14" },
    { src: "/assets/images/51.JPG", alt: "Image 15" },
    { src: "/assets/images/52.JPG", alt: "Image 16" },
    { src: "/assets/images/54.JPG", alt: "Image 17" },
    { src: "/assets/images/56.JPG", alt: "Image 18" },
    { src: "/assets/images/57.JPG", alt: "Image 19" },
    { src: "/assets/images/58.JPG", alt: "Image 20" },
    { src: "/assets/images/62.JPG", alt: "Image 21" },
    { src: "/assets/images/63.JPG", alt: "Image 22" },
    { src: "/assets/images/64.JPG", alt: "Image 23" },
    { src: "/assets/images/65.JPG", alt: "Image 24" },
    { src: "/assets/images/66.JPG", alt: "Image 25" },
    { src: "/assets/images/69.JPG", alt: "Image 26" },
    { src: "/assets/images/74.JPG", alt: "Image 27" },
    { src: "/assets/images/75.JPG", alt: "Image 28" },
    { src: "/assets/images/76.JPG", alt: "Image 29" },
    { src: "/assets/images/77.JPG", alt: "Image 30" },
    { src: "/assets/images/78.JPG", alt: "Image 31" },
    { src: "/assets/images/79.JPG", alt: "Image 32" },
    { src: "/assets/images/83.JPG", alt: "Image 33" },
    { src: "/assets/images/84.JPG", alt: "Image 34" },
    { src: "/assets/images/85.JPG", alt: "Image 35" },
    { src: "/assets/images/86.JPG", alt: "Image 36" },
    { src: "/assets/images/87.JPG", alt: "Image 37" },
    { src: "/assets/images/89.JPG", alt: "Image 38" },
    { src: "/assets/images/90.JPG", alt: "Image 39" },
    { src: "/assets/images/image1.jpg", alt: "Image 40" },
    { src: "/assets/images/image2.jpg", alt: "Image 41" },
    { src: "/assets/images/image3.jpg", alt: "Image 42" },
    { src: "/assets/images/image5.jpg", alt: "Image 43" },
    { src: "/assets/images/image6.jpg", alt: "Image 44" },
    { src: "/assets/images/image7.jpg", alt: "Image 45" },
    { src: "/assets/images/image8.jpg", alt: "Image 46" },
    { src: "/assets/images/image9.jpg", alt: "Image 47" },
    { src: "/assets/images/image10.jpg", alt: "Image 48" },
    { src: "/assets/images/image11.jpg", alt: "Image 49" },
    { src: "/assets/images/image12.jpg", alt: "Image 50" },
    { src: "/assets/images/image13.jpg", alt: "Image 51" },
    { src: "/assets/images/image14.jpg", alt: "Image 52" },
    { src: "/assets/images/image15.jpg", alt: "Image 53" },
    { src: "/assets/images/image16.jpg", alt: "Image 54" },
    { src: "/assets/images/image17.jpg", alt: "Image 55" },
    { src: "/assets/images/image18.jpg", alt: "Image 56" },
    { src: "/assets/images/image19.jpg", alt: "Image 57" },
    { src: "/assets/images/image20.jpg", alt: "Image 58" },
    { src: "/assets/images/image21.jpg", alt: "Image 59" },
  ];

  const imagesHorizontal = [

    { src: "/assets/images/34.JPG", alt: "Image 60" },
    { src: "/assets/images/35.JPG", alt: "Image 61" },
    { src: "/assets/images/36.JPG", alt: "Image 62" },
    { src: "/assets/images/59.JPG", alt: "Image 63" },
    { src: "/assets/images/60.JPG", alt: "Image 64" },
    { src: "/assets/images/67.JPG", alt: "Image 65" },
    { src: "/assets/images/68.JPG", alt: "Image 66" },
    { src: "/assets/images/70.JPG", alt: "Image 67" },
    { src: "/assets/images/71.JPG", alt: "Image 68" },
    { src: "/assets/images/72.JPG", alt: "Image 69" },
    { src: "/assets/images/73.JPG", alt: "Image 70" },
    { src: "/assets/images/80.JPG", alt: "Image 71" },
    { src: "/assets/images/81.JPG", alt: "Image 72" },
    { src: "/assets/images/82.JPG", alt: "Image 73" },
    { src: "/assets/images/image33.JPG", alt: "Image 74" },
     { src: "/assets/images/image22.jpg", alt: "Image 75" },
    { src: "/assets/images/image22.jpg", alt: "Image 76" },
    { src: "/assets/images/image23.jpg", alt: "Image 77" },
    { src: "/assets/images/image24.jpg", alt: "Image 78" },
    { src: "/assets/images/image25.jpg", alt: "Image 79" },
    { src: "/assets/images/image26.jpg", alt: "Image 80" },
    { src: "/assets/images/image27.jpg", alt: "Image 81" },
    { src: "/assets/images/image28.jpg", alt: "Image 82" },
    { src: "/assets/images/image29.jpg", alt: "Image 83" },
    { src: "/assets/images/image30.jpg", alt: "Image 84" },
    { src: "/assets/images/image32.jpg", alt: "Image 85" },
  ];

  return (
    <div className="w-full h-full">
      {/* Vertical images */}
      <div className="flex justify-evenly flex-wrap gap-8 p-5">
        {imagesVertical.map((image, index) => (
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
      <div className="flex justify-evenly flex-wrap gap-10 p-5">
        {imagesHorizontal.map((image, index) => (
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
    </div>
  );
}
