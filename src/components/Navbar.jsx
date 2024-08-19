import { useState } from "react";
import logo from "../assets/Signature.png/";
import { NAVIGATION_LINKS } from "../constant";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetLink = document.querySelector(href);
    if (targetLink) {
      const offset = -150;
      const linkPosition = targetLink.getBoundingClientRect().top;
      const offsetPosition = linkPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenu(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-md items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex justify-center items-center gap-6">
            <div>
              <a href="#">
                <img src={logo} width={90} alt="logo" />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-sm hover:text-yellow-400"
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between ">
            <div>
              <a href="#">
                <img src={logo} width={80} alt="logo" className="m-2" />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenu ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isMobileMenu && (
          <ul className="ml-4 flex flex-col gap-4 backdrop-blur-md">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  className="block w-full text-xl"
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
