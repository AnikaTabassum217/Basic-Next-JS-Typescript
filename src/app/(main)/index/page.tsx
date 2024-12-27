import Link from "next/link";
import React from "react";

const page=()=>{
    return(
        <>
         
         <div className="container mx-auto py-10">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href={'/index/use-props'}>
                <div className="text 3xl text-black text-medium bg-pink-300 rounded-sm flex justify-center items-center  py-10 px-10">Use Props</div>
                </Link>
                <div className="text 3xl text-black text-medium bg-yellow-300 rounded-sm flex justify-center items-center  py-10 px-10">How To Print PDF</div>
                <div className="text 3xl text-black text-medium bg-sky-300 rounded-sm flex justify-center items-center  py-10 px-10">CRUD Opertion</div>
                <div className="text 3xl text-black text-medium bg-red-300 rounded-sm flex justify-center items-center  py-10 px-10">Language Shifting</div>
                <div className="text 3xl text-black text-medium bg-sky-300 rounded-sm flex justify-center items-center  py-10 px-10">Use Slug</div>
                <div className="text 3xl text-black text-medium bg-yellow-300 rounded-sm flex justify-center items-center  py-10 px-10">Show PDF in Browser</div>
                <div className="text 3xl text-black text-medium bg-red-300 rounded-sm flex justify-center items-center  py-10 px-10">Use Animation</div>
                <div className="text 3xl text-black text-medium bg-pink-300 rounded-sm flex justify-center items-center  py-10 px-10">getwaves.io</div>
                <div className="text 3xl text-black text-medium bg-yellow-300 rounded-sm flex justify-center items-center  py-10 px-10">Figma Community</div>
                <div className="text 3xl text-black text-medium bg-sky-300 rounded-sm flex justify-center items-center  py-10 px-10">Shadcn</div>
                <div className="text 3xl text-black text-medium bg-pink-300 rounded-sm flex justify-center items-center  py-10 px-10">Bazar Free Website</div>

            </div>

         </div>
        </>
    )
}
export default page;