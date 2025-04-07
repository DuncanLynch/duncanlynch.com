
export default function Page()
{
    return (
        <div id="PDF Viewer" className="flex justify-center py-5 h-[100%]">
            <iframe className=" rounded-lg drop-shadow-2xl w-[70%] h-screen " src="./DuncanLynch_Resume.pdf"></iframe>
        </div>
    );
}