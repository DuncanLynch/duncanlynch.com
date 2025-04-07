"use client"
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const HeaderButton = ({ children, href }: {children: string, href: string}) => {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <button onClick={() => router.push(href)} className={`" rounded-lg hover:text-slate-800 transition-all ease-in duration-200 hover:bg-gray-300  max-w-[50%] lg:text-3xl lg:min-w-40 lg:min-h-20 md:text-xl md:min-w-30 md:min-h-15 sm:text-lg sm:min-w-20 sm:min-h-10 w-fit h-fit max-h-full hover:scale-[110%] ${pathname === href ? ' bg-slate-50 scale-[110%]  drop-shadow-xl text-slate-800 ' : ' text-white '} "`} >
            {children}
        </button>
    )
}

export default HeaderButton;