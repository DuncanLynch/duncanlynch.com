'use client'
export default function Footer()
{
    return (
        <div className="bg-gradient-to-r from-[#2e2b30] border-t border-stone-500 to-[rgb(23,22,24)]  fixed bottom-0 flex items-center justify-center w-full h-[5%]">
            <footer id="Contacts" className="text-lg text-center"> 
                Contact me! 
                <a className="px-2 underline drop-shadow-xl underline-offset-4">duncan@thelynches.com</a> 
                <a className="px-2 underline drop-shadow-xl  underline-offset-4">(713)-540-9149</a> 
                <button onClick={() => {window.open("https://www.github.com/duncanlynch",'_blank')}} className="px-2 drop-shadow-xl underline underline-offset-4">github.com/duncanlynch</button>
                <button onClick={() => {window.open("https://www.linkedin.com/in/duncantlynch",'_blank')}} className="px-2 drop-shadow-xl underline underline-offset-4">linkedin.com/in/duncantlynch</button>
            </footer>
        </div>
    );
}