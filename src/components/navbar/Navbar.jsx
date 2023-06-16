"use client";

import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import "@/styles/Navbar.scss";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const links = [
    {
      label: "Home",
      link: "/",
    },
  ];

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <p>Free games</p>
        </div>
        <ul className="linksContainer">
          {links.map(({ label, link }) => (
            <li key={label} className="item">
              <Link href={link} className="link">
                {label}
              </Link>
            </li>
          ))}
          <button
            onClick={() => setMenu(!menu)}
            className="menuButton"
            style={{ menu }}
          >
            {menu ? <MdClose /> : <MdMenu />}
          </button>
        </ul>
      </header>
      {menu ? (
        <div className="menu">
          <ul className="menu_containerLinks">
            <li className="menu_containerLinks_item">
              <p>Favoritos</p>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
