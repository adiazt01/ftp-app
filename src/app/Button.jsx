"use client";

import axios from "axios";
import { NextResponse } from "next/server";

import React from "react";

function Button() {
  async function click() {
    const response = await axios.get("/api/auth/profile");
  }

  return <button onClick={click}>asdasdasd</button>;
}

export default Button;
