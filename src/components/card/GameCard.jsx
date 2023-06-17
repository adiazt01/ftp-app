"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdRemoveRedEye } from "react-icons/md";
import "/src/styles/GameCard.scss"

function GameCard({ game }) {
  const { title, thumbnail, id} = game;

  return (
    <div className="GameCard">
      <Image
        className="img"
        src={thumbnail}
        fill={true}
        sizes="(max-width: 160px)"
        alt={`${title} image`}
        priority={true}
      />
      <h3 className="title">{title}</h3>
      <Link
        href={`/home/game/${id}`}
        className="viewButton"
      >
        <MdRemoveRedEye className="icon" />
      </Link>
    </div>
  );
}

export default GameCard;
