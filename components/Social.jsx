import { Target } from "lucide-react";
import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa"

const socials = [
// { icon: <FaGithub/>, path: "https://github.com/ASayyam"},
// { icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/asma-sayyam-1023b91b6/?originalSubdomain=pk"},
{ icon: <FaYoutube className="text-red-600 text-5xl  p-2 bg-white rounded-full"/>, path: "https://www.youtube.com/@arifsabirworshipper5010"},
{ icon: <FaFacebook className="text-blue-600 text-5xl  p-2 bg-white rounded-full"/>, path: "https://www.facebook.com/arif.sabir1  " },

]

const Social = ({containerStyles, iconStyles}) => {
  return (
     <div className={containerStyles}>
{socials.map((item, index) => {
    return (

        <Link key={index} href={item.path} className={iconStyles}>
{item.icon}
        </Link>
    );
})}
</div>
  );
};

export default Social;
