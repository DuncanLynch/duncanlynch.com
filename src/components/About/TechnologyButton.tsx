import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";

const techcologies: Record<string, React.ReactElement> = {
    Reactjs: <FaReact color="#4baee3" size={75}/>,
    TypeScript: <BiLogoTypescript color="#3685e0" size={75}/>,
    Tailwindcss: <RiTailwindCssFill color="#176d9c" size={75}/>,
    Nextjs: <RiNextjsFill color="#ffffff" size={75} />
}


export default function TechnologyButton({name}: {name: string})
{
    return (
        <div className=" flex flex-row h-[75px] bg-slate-950 rounded-xl p-2 border border-slate-500 w-[250px] gap-2 justify-between items-center transition-all ease-out duration-300 hover:scale-[120%] hover:bg-slate-900">
            <span className=" text-3xl text-pretty text-slate-200 text-center ">
                {name}
            </span>
            {techcologies[name]}
        </div>
    );
}