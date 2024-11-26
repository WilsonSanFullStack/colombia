"use client";
import { TbLayoutNavbarExpandFilled } from "react-icons/tb";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  //* para saber que resolucion se esta manejando
  const isScreenWidth = () => {
    return window.innerWidth > 750;
  };
  // para manejar la resolucion
  useEffect(() => {
    setShow(isScreenWidth());
    const handleResize = () => {
      setShow(isScreenWidth());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //* para mostrar el menu
  const toggleMenu = () => {
    if (!isScreenWidth()) {
      setShow(!show);
    }
  };
  const handleNavLinkClick = () => {
    if (!isScreenWidth()) {
      setShow(false);
    }
  };
  const handleSubMenuToggle = () => {
    setShowSubMenu(!showSubMenu);
  };

  const handleSubMenuClose = () => {
    setShowSubMenu(false);
  };
  return (
    <nav className="px-10 bg-slate-900 fixed top-0 min-w-full font-bold">
      <div className="">
        {!show && (
          <div onClick={toggleMenu} className="flex justify-center m-1">
            <TbLayoutNavbarExpandFilled className="text-2xl" />
          </div>
        )}
        {show && (
          <div>
            <ul
              className="
            movil:h-fit movil:grid movil:grid-cols-1 movil:text-center movil:capitalize 
            tablet:h-fit tablet:grid tablet:grid-cols-1 tablet:text-center tablet:capitalize 
            laptop:flex laptop:list-none laptop:justify-between laptop:items-center laptop:h-9 
            laptop:capitalize xl:flex xl:list-none xl:justify-between xl:items-center xl:h-9 xl:capitalize 
            2xl:flex 2xl:list-none 2xl:justify-between 2xl:items-center 2xl:h-9 2xl:capitalize"
            >
              <li className="inline-block items-center">
                <Link href="/" onClick={handleNavLinkClick}>
                  Home
                </Link>
              </li>
              <li
                className="inline-block items-center"
                onMouseEnter={handleSubMenuToggle}
                onMouseLeave={handleSubMenuClose}
              >
                <Link href="/simbolos" onClick={handleNavLinkClick}>
                  simbolos patrios
                </Link>
                {showSubMenu && (
                  <div className="movil:inline-block tablet:inline-block">
                    <ul className="grid grid-cols-1 fixed bg-slate-800 mx-2 px-2 capitalize text-center">
                      <li className="inline-block items-center">
                        <Link href="#bandera">bandera</Link>
                      </li>
                      <li className="inline-block items-center">
                        <Link href="#escudo">escudo</Link>
                      </li>
                      <li className="inline-block items-center">
                        <Link href="#himno">himno</Link>
                      </li>
                      <li className="inline-block items-center">
                        <Link href="#arbol">arbol</Link>
                      </li>
                      <li className="inline-block items-center">
                        <Link href="#ave">ave</Link>
                      </li>
                      <li className="inline-block items-center">
                        <Link href="#flor">flor</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="inline-block items-center">
                <Link href="/regions" onClick={handleNavLinkClick}>
                  region
                </Link>
              </li>
              <li className="inline-block items-center">
                <Link href="/department" onClick={handleNavLinkClick}>
                  department
                </Link>
              </li>
              <li className="inline-block items-center">
                <Link href="/departament" onClick={handleNavLinkClick}>
                  municipalities
                </Link>
              </li>
              <li className="inline-block items-center">
                <Link href="/departament" onClick={handleNavLinkClick}>
                  presidents
                </Link>
              </li>
              <li className="inline-block items-center">
                <Link href="/departament" onClick={handleNavLinkClick}>
                  constitution
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
