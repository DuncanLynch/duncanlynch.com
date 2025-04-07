import Image from "next/image";
import TechnologyButton from "@/components/About/TechnologyButton.tsx";
const IMG = ""
const Page = ({}) => {
    return (
        <div id="Main" className="flex justify-center p-8">
            <div id="About" className=" h-full w-[75%] flex jusify-center items-center flex-col gap-2 ">
                <div id="Header" className="text-6xl rounded-lg antialiased drop-shadow-lg bg-black p-4 border border-stone-500 text-center ">Duncan Lynch</div>
                <div className="grid grid-rows-1 items-center justify-center justify-items-center">
                    <div id="Intro" className="text-2xl border border-stone-500 text-center drop-shadow-xl rounded-lg font-normal antialiased bg-black h-fit w-fit p-4 lg:w-[60%] md:w-[75%] sm:w-[80%]">Hello! My name is Duncan Lynch, and I am a 2/3 
                        (graduating in my junior year) Computer Science major at Stevens Institute of Technology! 
                        I'm especially interested in embedded systems and I am preparing some projects to work in my free time to connect all my skills.
                        If you'd like to see my current projects you can check them out under my projects tab. 
                        </div>
                    </div>  
                <div className="flex flex-col gap-8 rounded-lg border border-stone-500 bg-black p-8 drop-shadow-2xl items-center">
                    <a className=" text-4xl"> My Web Stack</a>
                    <div className=" flex flex-row gap-8">
                        <TechnologyButton name={"Reactjs"}/>
                        <TechnologyButton name={"Nextjs"}/>
                        <TechnologyButton name={"Tailwindcss"}/>
                        <TechnologyButton name={"TypeScript"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;