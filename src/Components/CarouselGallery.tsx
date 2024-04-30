import { useEffect, useState } from "react"
import labtopImage1 from "../../public/labtop-1.jpg"
import labtopImage3 from "../../public/labtop-3.jpg"
import labtopImage4 from "../../public/labtop-4.jpg"
import labtopImage5 from "../../public/labtop-5.jpg"
import labtopImage6 from "../../public/labtop-6.jpg"

const images: string[] = [
  labtopImage1,
  labtopImage3,
  labtopImage4,
  labtopImage5,
  labtopImage6
]


export const CarouselGallery = () => {

  const [currentImage, setCurrentImage] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0])
  }, [])


  return (
    <div className='w-full'>
      <div className=" flex items-center flex-col">
        <img src={currentImage} alt=""  className="h-[450px] text-center"/>
        <div className="flex justify-center mt-4 w-full h-16">
          {images.map((image, i) => (
            <div
              key={i}
              className="flex mr-2 h-22 w-20 mr-4 bg-cover bg-center cursor-pointer hover:border-2 border-colorLink"
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}