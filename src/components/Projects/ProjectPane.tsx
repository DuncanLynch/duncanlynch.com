'use client'
import Image from "next/image"
export default function ProjectPane({desc, title, duration, img, url}: {desc: string, title: string, duration: string, img:string | null, url:string}){
    return (
        <button onClick={() => window.open(url,"_blank")} className=" relative flex flex-col gap-1 py-2 px-2 bg-gray-400 w-fit h-[10%] 
        transition-all ease-in duration-250 rounded-lg hover:bg-sky-50 hover:scale-[110%] border-spacing-8 border-4 border-stone-800 drop-shadow-2xl">
            {img && <div className=" flex justify-center w-full h-fit py-1 object-contain items-center rounded-md bg-gray-400 ">
                <img src={img} className="h-auto w-full rounded-md object-contain "/>
            </div>}
            <view className=" h-1 w-full rounded-full bg-[#1b1a1b] " />
            <a className="text-xl text-gray-800">{title}</a>
            <a className="text-md text-gray-800">{duration}</a>
            <view className=" h-1 w-full rounded-full bg-[#1b1a1b] " />
            <a className="text-lg text-gray-800">{desc}</a>
        </button>
    );
}