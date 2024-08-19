import logo from "../assets/Signature.png/";
import { SOCIAL_MEDIA_LINKS } from "../constant";

const Footer = () => {
  return (
    <div className="mb-8 mt-20 ">
      <div className="flex item-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link,index)=>{
          return(
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>)
        })}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide">
        &copy;Swan Htar Ni No. All rights reserved.
      </p>
    </div>
  );
};
export default Footer;
