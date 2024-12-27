import Image from "next/image";
import React from "react";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";


const data = [
  {
    img: '/images/use-props/img1.png',
    price: '$960',
    name: "Gucci dullf bag"
  },
  {
    img: '/images/use-props/img2.png',
    price: '$1260',
    name: "Pink Ponk"
  },
  {
    img: '/images/use-props/img3.png',
    price: '$160',
    name: "Bata leather Bag"
  }
]
const CardDesignForProps = () => {
  return (
    <>
      Card
      <div className="flex lg:flex-row flex-col justify-center items-center gap-4 ">
        {
          data.map((dt, index) => {
            return (
              <>
                <div className="bg-gray-200 rounded-md ">
                  <div className="relative text-center">
                    <Image
                      src={dt.img}
                      alt="Bag"
                      width={500}
                      height={500}
                      className="rounded-md h-full w-full object-cover object-center"
                    />
                    <div className=" absolute top-12 lg:right-32 md:right-48 right-36">
                    <MdOutlineDelete className="bg-white rounded-full cursor-pointer h-6 w-6 p-1"/>
                    </div>
                  </div>

                  <div className="flex justify-center items-center bg-black text-white gap-2">
                    <div> <BsCart3 className='size-6' /></div>
                    <div className="text-center  p-2">ADD TO CART</div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}
export default CardDesignForProps;