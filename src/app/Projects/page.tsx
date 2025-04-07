import ProjectPane from "@/components/Projects/ProjectPane";
const Page = ({}) => {
    return (
        <div className=" flex flex-row justify-center items-center gap-16 py-10 px-10 ">
            <ProjectPane 
            title={"BumbyBot"} 
            duration={"08/24 - 10/24"} 
            desc={"A Discord bot designed to bring the Rust+ app's functionality to Discord!"}
            url={"https://github.com/DuncanLynch/BumbyBot"} 
            img={"/BUMBYBOT.png"}
            />
            <ProjectPane 
            title={"Classy2"} 
            duration={"12/24 - Present"} 
            desc={"A Discord bot that allows users to query all of the Stevens classes available, find keywords, and create class wishlists!"}
            url={"https://github.com/DuncanLynch/Classy2"} 
            img={"/Classy2.png"}
            />
            <ProjectPane 
            title={"Personal Website"} 
            duration={"02/24 - Present"} 
            desc={"The website you're looking at! It was developed with next.js and tailwind!"}
            url={"https://github.com/DuncanLynch/Personal-Website/"} 
            />
        </div>
    );
}

export default Page;