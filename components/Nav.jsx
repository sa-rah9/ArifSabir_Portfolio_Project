"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
{
    name : "home",
    path : "/",
},   
{

    name : "photos",
   path : "/photos",
 },
{

    name : "contact",
    path : "/contact",
},
]
const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
  return (
  <nav className= "flex gap-8 text-3xl">
   {links.map((link, index) => {
    return (
    <Link 
    href= {link.path}
    key= {index} 
    className= {`${
        link.path === pathname && "text-[#FFEA00]  border-b-2 border-[#FFEA00]"
        } capitalize font-medium hover:text-[#FFEA00] transition-all`}
        >
        {link.name}
        </Link>
         );
     })}
  </nav>
  );
};

export default Nav;


/*code of line 36 and 43 44 is not working...in general css is not working..seems like */
