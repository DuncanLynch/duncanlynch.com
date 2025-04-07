import Image from "next/image";
export default function CatPane({catName, catTranslatedName, catURL, catIMG}: 
    {catName: string, catTranslatedName: string, catURL: string, catIMG: string})
{
    return (
        <button onClick={() => {window.open(catURL,'_blank')}} className="hover:bg-white content-box drop-shadow-2xl transition-all h-fit w-fit ease-in-out duration-200 rounded-lg hover:text-gray-800" >
            <Image width={500} height={500} src={catIMG} alt={"The thumbnail did not load..."} className="rounded-lg text-center " />
            <a>{catName}</a>
            { "「" + catTranslatedName + "」" }
        </button>
    );
}