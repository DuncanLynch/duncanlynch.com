import HeaderButton from "./HeaderButton";

const NavButtons = {
    "Home": "/Home",
    "About": "/About",
    "Projects": "/Projects",
    "Resume": "/Resume",
    "Cats": "/Cats"
};
// bg-gradient-to-r from-[#6a657c] to-[rgb(23,22,24)] 
const NavBar = () => {
    return (
        <div className="flex flex-col ">
            <div id="NavBar" className={`" transition-all ease-in-out drop-shadow-2xl
            duration-150 py-10  w-full flex justify-center h-[20%] "`}>
                <div className="flex justify-center lg:gap-8 md:gap-5 sm:gap-2  ">
                    {Object.entries(NavButtons).map(([key, value]) => (
                        <>
                        <HeaderButton key={key} href={value}>{key}</HeaderButton>
                        {key !== "Cats" && (<div key={key + "43"} className=" h-full w-1 border border-stone-500 rounded-full bg-[#3e3b41] " /> )}
                        </>
                    ))}
            </div>
            </div>
            <view className="w-full h-1 bg-[#3e3b41] border border-[#484749]"/>
        </div>
    );
};

export default NavBar;