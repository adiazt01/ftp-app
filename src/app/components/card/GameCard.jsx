"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdRemoveRedEye } from "react-icons/md";

function GameCard({ game }) {
  const { title, thumbnail, id} = game;

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
      <Link
        href={`game/${id}`}
        className="GameCard_viewButton"
      >
        <MdRemoveRedEye className="GameCard_viewButton_icon" />
      </Link>

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
            transition: .3s;
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
            transition: .3s;
          }

          .GameCard:hover .GameCard_title{
            top: 1.6em;
          }

          .GameCard_viewButton{
            position: absolute;
            bottom: -2em;
            padding: 4px 15px;
            color: white;
            border: 0;
            background-color: green;
            font-size: 20px;
            border-radius: 20px;
            transition: .3s;
          }

          .GameCard_viewButton_icon{
            margin-bottom: -5px;
          }

          .GameCard:hover .GameCard_viewButton{
            bottom: 0.7em;
          }

        `}
      </style>
    </div>
  );
}

export default GameCard;
