"use client";

import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

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
        <div className="navbar__logo">
          <p>Free games</p>
        </div>
        <ul className="navbar__linksContainer">
          {links.map(({ label, link }) => (
            <li key={label} className="navbar__linksContainer_item">
              <Link href={link} className="navbar__linksContainer_item_link">
                {label}
              </Link>
            </li>
          ))}
          <button
            onClick={() => setMenu(!menu)}
            className="navbar__linksContainer_item_menu"
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
              <p>Salir</p>
              <p>Favoritos</p>
            </li>
          </ul>
        </div>
      ) : null}
      <style>{`
        .navbar {
          top: 0;
          position: sticky;
          width: 100%;
          background-color: black;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 60px;
          color: white;
          padding: 20px;
          font-size: 20px;
          z-index: 5;
        }
        
        .navbar__logo{
            text-align: center;
        }

        .navbar__linksContainer_item_link {
          color: white;
        }

        .navbar__linksContainer {
          display: flex;
          flex-direction: row;
        }

        .navbar__linksContainer_item {
        margin-left: 20px;
          list-style: none;
        }

        .navbar__linksContainer_item a {
          color: white;
          text-decoration: none;
        }

        .navbar__linksContainer_item_menu{
            display: flex;
            margin-left: 20px;
            margin-bottom: -12px; 
            margin-top: -4px;
            height: 1em;
            background: none;
            font-size: 1.7em;
            color: white;
            border: 0;
            transition: all .3s;
            cursor: pointer;
        }

        .navbar__linksContainer_item_menu:hover{
            transform: scale(1.1);
        }

        .menu{
            display: flex;
            justify-content: center;
            font-size: 20px;
            padding: 0px 20px 20px;
            border-radius: 0px 0px 0px 20px;
            color: white;
            position: fixed;
            top: 60px; 
            right: 0;
            background-color: black;
            width: auto;
            height: auto;
        }
        
        .menu_containerLinks{
            list-style: none;
        }

      `}</style>
    </>
  );
}

export default Navbar;
