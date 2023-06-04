"use client";

import Image from "next/image";
import React from "react";
import { MdRemoveRedEye } from "react-icons/md";

function GameCard({ game }) {
  const { title, short_description, game_url, thumbnail } = game;

  return (
    <div className="GameCard">
      <Image
        className="GameCard_img"
        src={thumbnail}
        fill={true}
        sizes="(max-width: 160px)"
        alt={`${title} image`}
        priority={true}
      />
      <h3 className="GameCard_title">{title}</h3>
      <button className="GameCard_viewButton">
        <MdRemoveRedEye /> View game
      </button>

      <style>
        {`
          .GameCard {
            position: relative;
            width: 17rem;
            height: 160px;
            background-color: grey;
            align-items: center;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            transition: all .3s;
          }

          .GameCard_img{
            object-fit: cover;
            object-position: 50% 50%;
            image-rendering: crisp-edges;
            transition: all .3s;
          }

          .GameCard:hover .GameCard_img{
            transform: scale(1.2);
            filter: blur(5px) brightness(0.5);
          }

          .GameCard_title{
            position: absolute;
            top: -3em;
            font-size: 1.5em;
            width: 10em;
            font-weight: 900;
            color: white;
            text-align: center;
            z-index: 1;
            transition: all .3s;
          }

          .GameCard:hover .GameCard_title{
            top: 1.6em;
          }

        `}
      </style>
    </div>
  );
}

export default GameCard;
