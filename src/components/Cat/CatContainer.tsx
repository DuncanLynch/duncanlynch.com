'use client'
import { useState, useEffect } from "react";
import { getCats } from "@/data/MeowCameraAPI/getCats.ts";
import { Cat } from "@/data/types/types.ts";
import CatPane from "./CatPane.tsx";
import { GiCat } from "react-icons/gi";

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const URL = "https://meow.camera/viewer/#";
const IMG_URL = "https://screenshots.meow.camera/";

export default function CatContainer(){
    
    const [catList, setCatList] = useState<Cat[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [dotCount, setDotCount] = useState<number>(1);
    useEffect(() => {
        const interval = setInterval(() => {
            setDotCount(prev => (prev % 4) + 1);
        }, 500);

    return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const fetchCats = async () => {
            try {
                const response = await getCats();
                const cats: Cat[] = JSON.parse(response);
                await wait(1000)
                setCatList(cats);
                setLoading(false);
            } catch (e) {
                console.error("Failed to fetch cats!");
            }
        };
        fetchCats();
    }, []);
    return (
        <div className=" flex justify-center  py-5" >
            <div className={` ${loading ? 'flex flex-row' : 'grid grid-cols-2' } gap-5 bg-[#211f22] rounded-lg p-7 `}>
                {!loading && catList.map(cat => 
                   <CatPane catName={cat['name']} key={cat['id']} catTranslatedName={cat['translatedName']} catURL={URL + cat['id']} catIMG={IMG_URL+cat['id'] +".jpg"} />
                )
                }
                {loading && 
                    <div className="text-3xl text-center items-center w-100 gap-16 flex flex-row  justify-between ">Loading Cats{'.'.repeat(dotCount)} 
                        <GiCat size={100}/>
                    </div>
                }
            </div>
        </div>
    );
}